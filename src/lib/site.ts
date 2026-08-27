export const SITE = {
  title: 'Old Fashioned Doctor',
  tagline: 'Medicine. Cocktails. Life.',
  description: 'A blog about medicine, cocktails, and life.',
  author: 'Old Fashioned Doctor',
  twitter: 'https://twitter.com/OldFashionedDr',
  twitterHandle: '@OldFashionedDr',
  origin: 'https://dkrics.github.io',
  customDomain: 'oldfashioneddoctor.com',
  copyright: 'Do not republish without permission. Linking is okay.',
} as const;

export const CATEGORIES = ['Medicine', 'Cocktails', 'Life'] as const;
export type Category = (typeof CATEGORIES)[number];

export const CATEGORY_META: Record<
  Category,
  { slug: string; kicker: string; blurb: string }
> = {
  Medicine: {
    slug: 'medicine',
    kicker: 'From the clinic',
    blurb: 'Patients, healthcare, insurance, EMRs, and the work of a family physician.',
  },
  Cocktails: {
    slug: 'cocktails',
    kicker: 'At the bar',
    blurb: 'Bourbon, rye, recipes, barrel-aging, and the long science of a well-made drink.',
  },
  Life: {
    slug: 'life',
    kicker: 'Off the clock',
    blurb: 'Family, near-misses, holidays, and the essays in between.',
  },
};

export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path) return base;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = String(path).replace(/^\/+/, '');
  return base + clean;
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Chicago',
  });
}

export function formatShortDate(d: Date): string {
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'America/Chicago',
  });
}

export function categoryHref(cat: Category): string {
  return withBase(`${CATEGORY_META[cat].slug}/`);
}

export function tagSlug(tag: string): string {
  return tag
    .replace(/^#/, '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
