import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Preview on github.io until DNS cutover; then site=https://oldfashioneddoctor.com base='/'
site: 'https://dkrics.github.io',
  base: '/oldfashioneddoctor/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/cocktails/': '/drinks/',
  },
});
