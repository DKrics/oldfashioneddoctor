import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://oldfashioneddoctor.com',
  base: '/',
  trailingSlash: 'always',
  integrations: [sitemap()],
  redirects: {
    '/cocktails/': '/drinks/',
  },
});
