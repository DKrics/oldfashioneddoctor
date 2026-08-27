import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Project Pages URL for now: https://dkrics.github.io/oldfashioneddoctor/
// Custom domain later: set site to https://oldfashioneddoctor.com and base to '/'
// then add public/CNAME (see CNAME.example). Do not enable custom DNS until cutover.
const BASE = '/oldfashioneddoctor';

function prefixSiteBase() {
  return (tree) => {
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'element' && node.properties) {
        for (const key of ['src', 'href']) {
          const v = node.properties[key];
          if (
            typeof v === 'string' &&
            v.startsWith('/') &&
            !v.startsWith('//') &&
            !v.startsWith(BASE)
          ) {
            node.properties[key] = BASE + v;
          }
        }
      }
      for (const child of node.children || []) walk(child);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: 'https://dkrics.github.io',
  base: '/oldfashioneddoctor/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [prefixSiteBase],
  },
  redirects: {
    '/drinks': '/cocktails/',
    '/drinks/': '/cocktails/',
  },
});
