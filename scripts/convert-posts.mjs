#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ARCHIVE = '/workspace/ofd-archive';
const ROOT = '/workspace/oldfashioneddoctor';
const POSTS_IN = path.join(ARCHIVE, 'posts');
const POSTS_OUT = path.join(ROOT, 'src/content/posts');
const IMG_IN = path.join(ARCHIVE, 'images');
const IMG_OUT = path.join(ROOT, 'public/images/posts');
const MAPPING = JSON.parse(fs.readFileSync(path.join(IMG_IN, 'MAPPING.json'), 'utf8'));

const COCKTAIL_KEYS = [
  'bourbon', 'cocktail', 'cocktails', 'whiskey', 'whisky', 'rye', 'martini', 'sazerac',
];
const MEDICINE_KEYS = [
  'medicine', 'healthcare', 'doctor', 'patient', 'health', 'insurance', 'emr', 'ehr',
];

function normalizeTag(t) {
  return String(t).replace(/^#/, '').trim().toLowerCase();
}

function inferCategories(tags) {
  const norm = tags.map(normalizeTag);
  const hay = ` ${norm.join(' | ')} `;
  const hasCocktail = COCKTAIL_KEYS.some((k) => hay.includes(` ${k} `) || hay.includes(`| ${k} |`));
  const hasMedicine = MEDICINE_KEYS.some((k) => {
    const re = new RegExp(`(?:^|[\\s|#])${k}(?:$|[\\s|#])`, 'i');
    return norm.some((t) => t === k || t.split(/[\s#]+/).includes(k));
  });
  const cats = [];
  if (hasMedicine) cats.push('medicine');
  if (hasCocktail) cats.push('cocktails');
  if (cats.length === 0) cats.push('life');
  return cats;
}

function yamlQuote(s) {
  const str = String(s);
  if (str === '') return '""';
  if (/[:#{}[\],&*?|!<>=%@`'"\\]/.test(str) || /^\s|\s$/.test(str) || /^(true|false|null|yes|no|on|off)$/i.test(str)) {
    return JSON.stringify(str);
  }
  return str;
}

function stripHash(tag) {
  return String(tag).replace(/^#/, '').trim();
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) throw new Error('No frontmatter');
  const fm = m[1];
  const body = m[2];
  const data = {};
  let currentKey = null;
  let list = null;
  for (const line of fm.split('\n')) {
    const listItem = line.match(/^\s+-\s+(.*)$/);
    if (listItem && currentKey) {
      let v = listItem[1].trim();
      if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
        v = v.slice(1, -1);
      }
      list.push(v);
      continue;
    }
    const kv = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (kv) {
      currentKey = kv[1];
      const rest = kv[2];
      if (rest === '' || rest === '|' || rest === '>') {
        list = [];
        data[currentKey] = list;
      } else {
        let v = rest.trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        data[currentKey] = v;
        list = null;
      }
    }
  }
  return { data, body };
}

function normalizeUrl(u) {
  try {
    const url = new URL(u.trim());
    if (url.protocol === 'http:') url.protocol = 'https:';
    url.hash = '';
    url.search = '';
    url.pathname = url.pathname
      .replace(/\/s\d+\//g, '/s0/')
      .replace(/\/w\d+\//g, '/s0/')
      .replace(/\/s\d+$/g, '/s0');
    let s = url.toString();
    if (s.endsWith('/')) s = s.slice(0, -1);
    return s;
  } catch {
    return u.trim();
  }
}

function filenameFromUrl(u) {
  try {
    const p = new URL(u, 'https://example.com').pathname;
    const base = decodeURIComponent(p.split('/').filter(Boolean).pop() || '');
    return base.split('?')[0];
  } catch {
    const base = u.split('/').pop() || '';
    return base.split('?')[0];
  }
}

function bloggerToken(u) {
  const m = u.match(/\/(AVvXs[A-Za-z0-9_-]{20,})\//);
  return m ? m[1] : null;
}

// Build lookup tables
const byNorm = new Map();
const byFile = new Map();
const byToken = new Map();

for (const entry of MAPPING) {
  const urls = [...(entry.original_urls || []), entry.download_url, entry.canonical_key].filter(Boolean);
  for (const u of urls) {
    byNorm.set(normalizeUrl(u), entry);
    byNorm.set(normalizeUrl(u.replace(/^https:/, 'http:')), entry);
    const fn = filenameFromUrl(u);
    if (fn) {
      if (!byFile.has(fn)) byFile.set(fn, []);
      byFile.get(fn).push(entry);
    }
    const tok = bloggerToken(u);
    if (tok) byToken.set(tok, entry);
  }
  if (entry.filename) {
    if (!byFile.has(entry.filename)) byFile.set(entry.filename, []);
    byFile.get(entry.filename).push(entry);
  }
}

function lookupImage(url, postSlug) {
  const clean = url.replace(/[<>]/g, '').trim();
  const n = normalizeUrl(clean);
  let entry = byNorm.get(n);
  if (!entry) {
    const tok = bloggerToken(clean);
    if (tok) entry = byToken.get(tok);
  }
  if (!entry) {
    const fn = filenameFromUrl(clean);
    const cands = byFile.get(fn) || [];
    if (cands.length === 1) entry = cands[0];
    else if (cands.length > 1) {
      entry =
        cands.find((c) => (c.sources || []).some((s) => s.includes(postSlug))) ||
        cands.find((c) => c.downloaded) ||
        cands[0];
    }
  }
  return entry || null;
}

function excerptFrom(body) {
  const text = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]+\)/g, (m) => {
      const t = m.match(/^\[([^\]]*)\]/);
      return t ? t[1] : ' ';
    })
    .replace(/[#>*_`~]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 180) return text;
  const cut = text.slice(0, 180);
  const sp = cut.lastIndexOf(' ');
  return (sp > 80 ? cut.slice(0, sp) : cut).trim() + '…';
}

function stripTagCloud(body) {
  // Remove trailing tumblr-style tag clouds
  return body.replace(/\n\[#[^\]]+\]\(<https:\/\/www\.tumblr\.com\/tagged\/[^)]+>\)[\s\S]*$/m, '\n').trimEnd() + '\n';
}

function rewriteInternalLinks(body, pathToSlug) {
  return body.replace(
    /\]\(\<?https?:\/\/(?:www\.)?oldfashioneddoctor\.com(\/[^)>\s]+)\>?\)/g,
    (full, pth) => {
      const clean = pth.replace(/[?#].*$/, '');
      const slug = pathToSlug.get(clean) || pathToSlug.get(clean.replace(/\/$/, ''));
      if (slug) return `](/posts/${slug}/)`;
      return full;
    },
  );
}

function rewriteImages(body, postSlug) {
  const used = [];
  const missing = [];
  // [![](url)](<url>) or [![](url)](url) or ![alt](url)
  const imgRe = /(!\[[^\]]*\]\()<?([^)>\s]+)>?(\))(?:\(\<?([^)>\s]+)\>?\))?/g;
  let out = body.replace(imgRe, (full, pre, url) => {
    const entry = lookupImage(url, postSlug);
    if (entry && entry.downloaded && entry.bytes > 0) {
      const local = `/images/posts/${entry.filename}`;
      if (!used.includes(entry.filename)) used.push(entry.filename);
      return `![Photograph from the Old Fashioned Doctor archive](${local})`;
    }
    missing.push(url);
    return `<!-- original image unavailable: ${url} -->\n\n<p class="missing-photo"><em>A photograph originally published with this post is no longer hosted online.</em></p>`;
  });
  // leftover HTML <img>
  out = out.replace(/<img\b[^>]*src=["']([^"']+)["'][^>]*>/gi, (full, url) => {
    const entry = lookupImage(url, postSlug);
    if (entry && entry.downloaded && entry.bytes > 0) {
      const local = `/images/posts/${entry.filename}`;
      if (!used.includes(entry.filename)) used.push(entry.filename);
      return `<img src="${local}" alt="Photograph from the Old Fashioned Doctor archive" />`;
    }
    missing.push(url);
    return `<p class="missing-photo"><em>A photograph originally published with this post is no longer hosted online.</em></p>`;
  });
  return { out, used, missing };
}

function collapseBlanks(s) {
  return s.replace(/\n{3,}/g, '\n\n').replace(/[ \t]+\n/g, '\n');
}

fs.mkdirSync(POSTS_OUT, { recursive: true });
fs.mkdirSync(IMG_OUT, { recursive: true });
fs.mkdirSync(path.join(ROOT, 'src/data'), { recursive: true });

// Copy downloaded images
let copied = 0;
let skippedEmpty = 0;
for (const entry of MAPPING) {
  const src = path.join(IMG_IN, entry.filename);
  if (!entry.downloaded || !entry.bytes) {
    skippedEmpty++;
    continue;
  }
  if (!fs.existsSync(src)) {
    console.warn('missing file', entry.filename);
    continue;
  }
  fs.copyFileSync(src, path.join(IMG_OUT, entry.filename));
  copied++;
}

const heroSrc = path.join(IMG_IN, '20170914_165527.jpg');
if (fs.existsSync(heroSrc)) {
  fs.copyFileSync(heroSrc, path.join(ROOT, 'public/images/hero.jpg'));
}

const files = fs.readdirSync(POSTS_IN).filter((f) => f.endsWith('.md'));
const parsed = [];
for (const f of files) {
  const raw = fs.readFileSync(path.join(POSTS_IN, f), 'utf8');
  const { data, body } = parseFrontmatter(raw);
  parsed.push({ file: f, data, body });
}

const pathToSlug = new Map();
for (const p of parsed) {
  try {
    const u = new URL(p.data.original_url);
    pathToSlug.set(u.pathname, p.data.slug);
    pathToSlug.set(u.pathname.replace(/\.html$/, ''), p.data.slug);
  } catch {}
}

const redirects = {};
const report = { posts: [], missingImages: [], copiedImages: copied };

for (const p of parsed) {
  const tags = Array.isArray(p.data.tags) ? p.data.tags : [];
  const cleanTags = tags.map(stripHash).filter(Boolean);
  const categories = inferCategories(tags);
  let body = stripTagCloud(p.body);
  body = rewriteInternalLinks(body, pathToSlug);
  const { out, used, missing } = rewriteImages(body, p.data.slug);
  body = collapseBlanks(out);
  const description = excerptFrom(body);
  const hero = used[0] ? `/images/posts/${used[0]}` : undefined;

  const fmLines = [
    '---',
    `title: ${yamlQuote(p.data.title)}`,
    `slug: ${p.data.slug}`,
    `published: ${yamlQuote(p.data.published)}`,
  ];
  if (p.data.updated) fmLines.push(`updated: ${yamlQuote(p.data.updated)}`);
  fmLines.push('tags:');
  for (const t of cleanTags) fmLines.push(`  - ${yamlQuote(t)}`);
  fmLines.push('categories:');
  for (const c of categories) fmLines.push(`  - ${c}`);
  fmLines.push(`original_url: ${yamlQuote(p.data.original_url)}`);
  fmLines.push(`author: ${yamlQuote(p.data.author || 'Old Fashioned Doctor')}`);
  fmLines.push(`description: ${yamlQuote(description)}`);
  if (hero) fmLines.push(`hero: ${yamlQuote(hero)}`);
  fmLines.push('---', '');

  fs.writeFileSync(path.join(POSTS_OUT, p.file), fmLines.join('\n') + body + '\n');

  try {
    const u = new URL(p.data.original_url);
    redirects[u.pathname] = `/posts/${p.data.slug}/`;
    redirects[u.pathname.replace(/\.html$/, '')] = `/posts/${p.data.slug}/`;
    redirects[u.pathname.replace(/\.html$/, '/')] = `/posts/${p.data.slug}/`;
  } catch {}

  report.posts.push({
    slug: p.data.slug,
    title: p.data.title,
    categories,
    images: used.length,
    missing: missing.length,
  });
  for (const m of missing) report.missingImages.push({ slug: p.data.slug, url: m });
}

// Month archive redirects from INDEX
const months = ['/2017/06/', '/2017/09/', '/2017/11/', '/2017/12/', '/2018/01/', '/2018/02/'];
for (const m of months) {
  redirects[m] = '/archive/';
  redirects[m.slice(0, -1)] = '/archive/';
}
redirects['/p/about.html'] = '/about/';
redirects['/p/about'] = '/about/';
redirects['/search'] = '/archive/';

fs.writeFileSync(path.join(ROOT, 'src/data/redirects.json'), JSON.stringify(redirects, null, 2) + '\n');
fs.writeFileSync(path.join(ROOT, 'src/data/convert-report.json'), JSON.stringify(report, null, 2) + '\n');

console.log('posts', report.posts.length);
console.log('images copied', copied);
console.log('empty skipped', skippedEmpty);
console.log('missing image refs', report.missingImages.length);
for (const p of report.posts) {
  console.log(` - ${p.slug}  [${p.categories.join(',')}]  imgs=${p.images} missing=${p.missing}`);
}
