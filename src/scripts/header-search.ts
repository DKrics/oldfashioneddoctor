import Fuse from 'fuse.js';

type Item = {
  title: string;
  description: string;
  url: string;
  categories: string[];
  tags: string[];
};

const panel = document.getElementById('search-panel');
const mobile = document.getElementById('mobile-nav');
const searchToggle = document.getElementById('search-toggle');
const menuToggle = document.getElementById('menu-toggle');
const input = document.getElementById('header-q') as HTMLInputElement | null;
const live = document.getElementById('header-live');

searchToggle?.addEventListener('click', () => {
  const open = !panel?.classList.contains('open');
  panel?.classList.toggle('open', open);
  searchToggle.setAttribute('aria-expanded', String(open));
  if (open) {
    mobile?.classList.remove('open');
    input?.focus();
  }
});

menuToggle?.addEventListener('click', () => {
  const open = !mobile?.classList.contains('open');
  mobile?.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  if (open) panel?.classList.remove('open');
});

let fuse: Fuse<Item> | null = null;

async function ensureIndex(): Promise<Fuse<Item>> {
  if (fuse) return fuse;
  const href = input?.dataset.index;
  if (!href) throw new Error('missing search index');
  const res = await fetch(href);
  const items = (await res.json()) as Item[];
  fuse = new Fuse(items, {
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'description', weight: 0.3 },
      { name: 'tags', weight: 0.12 },
      { name: 'categories', weight: 0.08 },
    ],
    threshold: 0.38,
    ignoreLocation: true,
  });
  return fuse;
}

let timer: number | undefined;
input?.addEventListener('input', () => {
  const q = input.value.trim();
  window.clearTimeout(timer);
  if (!q || !live) {
    if (live) {
      live.hidden = true;
      live.innerHTML = '';
    }
    return;
  }
  timer = window.setTimeout(async () => {
    try {
      const f = await ensureIndex();
      const hits = f.search(q).slice(0, 6);
      live.innerHTML = hits
        .map((h) => {
          const item = h.item;
          const cats = (item.categories || []).join(' · ');
          return `<li><a href="${item.url}"><strong>${item.title}</strong><div class="meta">${cats}</div></a></li>`;
        })
        .join('');
      live.hidden = hits.length === 0;
    } catch {
      if (live) live.hidden = true;
    }
  }, 120);
});
