export const SITE = {
  title: 'Old Fashioned Doctor',
  tagline: 'Medicine. Cocktails. Life.',
  description: 'A journal of medicine, cocktails, and life, written by a practicing family physician.',
  author: 'Old Fashioned Doctor',
  twitter: 'https://x.com/OldFashionedDr',
  twitterHandle: '@OldFashionedDr',
  origin: 'https://oldfashioneddoctor.com',
  customDomain: 'oldfashioneddoctor.com',
  copyright: 'Do not republish without permission. Linking is okay.',
  ogImage: '/images/og-default.jpg',
} as const;

export const COMMENTS = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: (import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY || '').trim(),
} as const;

export const CATEGORIES = ['Drinks', 'Medicine', 'Life'] as const;
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
  Drinks: {
    slug: 'drinks',
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

export function absoluteUrl(path = ''): string {
  const origin = SITE.origin.replace(/\/$/, '');
  if (!path) return `${origin}/`;
  if (/^https?:\/\//i.test(path)) return path;
  const clean = String(path).replace(/^\/+/, '');
  return `${origin}/${clean}`;
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

export function authorJsonLd() {
  return {
    '@type': 'Person',
    '@id': absoluteUrl('#author'),
    name: SITE.author,
    url: absoluteUrl('about/'),
    sameAs: [SITE.twitter],
  };
}

export function blogJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': absoluteUrl('#blog'),
        name: SITE.title,
        description: SITE.description,
        url: absoluteUrl(),
        inLanguage: 'en-US',
        publisher: { '@id': absoluteUrl('#author') },
        author: { '@id': absoluteUrl('#author') },
        image: absoluteUrl(SITE.ogImage),
      },
      authorJsonLd(),
    ],
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  published: Date;
  updated?: Date;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: SITE.author,
      url: absoluteUrl('about/'),
      sameAs: [SITE.twitter],
    },
    publisher: {
      '@type': 'Person',
      name: SITE.author,
      url: absoluteUrl('about/'),
      sameAs: [SITE.twitter],
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': opts.url,
    },
    isPartOf: {
      '@type': 'Blog',
      '@id': absoluteUrl('#blog'),
      name: SITE.title,
    },
  };
}
