# Old Fashioned Doctor

A static journal for **Old Fashioned Doctor** — *Medicine. Cocktails. Life.*

The public byline is **Old Fashioned Doctor**. Rebuilt from the public Blogger archive as a free GitHub Pages site (Astro + TypeScript).

## Local

From this directory:

- `dev` — local server (open the printed URL; path includes `/oldfashioneddoctor/`)
- `build` — static output in `dist/`
- `preview` — preview the production build

Package scripts are `dev`, `build`, and `preview`. The `base` path is `/oldfashioneddoctor/` so CSS, JS, and images work on GitHub project Pages.

## Live URL (now)

https://dkrics.github.io/oldfashioneddoctor/

After the first push, set the repo Pages source to GitHub Actions (`.github/workflows/deploy.yml`).

## Custom domain later (Squarespace DNS)

Canonical domain: **oldfashioneddoctor.com**. Do not change live DNS or enable a GitHub custom domain until cutover. Keep Blogger live until the new site is confirmed.

When you are ready:

1. Confirm the project Pages URL looks right.
2. In `astro.config.mjs`, set `site` to `https://oldfashioneddoctor.com` and `base` to `/`.
3. Copy `CNAME.example` to `public/CNAME` (contents: `oldfashioneddoctor.com`).
4. Update `public/robots.txt` sitemap URL.
5. Point Squarespace DNS at GitHub Pages only at cutover.
6. GitHub Settings → Pages → custom domain `oldfashioneddoctor.com`, then HTTPS.
7. Keep Blogger up until verified, then retire it.

## Content

- 24 essays in `src/content/posts/`
- Images in `public/images/posts/` (copied from the Blogger export; no Blogger CDN hotlinks)
- Old paths such as `/2018/02/make-it-count.html` redirect to the new slugs
- Eight third-party images from 2017 are dead and omitted in place

Do not republish without permission. Linking is okay.


Expected Pages URL: https://dkrics.github.io/oldfashioneddoctor/

Later custom domain (do not change live DNS yet): oldfashioneddoctor.com
