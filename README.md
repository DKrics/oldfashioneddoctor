# Old Fashioned Doctor

A static journal for **Old Fashioned Doctor** — *Medicine. Cocktails. Life.*

The public byline is **Old Fashioned Doctor**. Rebuilt from the public Blogger archive as a GitHub Pages site (Astro + TypeScript) for **https://oldfashioneddoctor.com**.

The published site is the Astro project on the `site` branch. The `main` branch is an earlier static draft (two local posts, the rest still linked at Blogger) and is not deployed.

## Local

From this directory:

- `npm run dev` — local server
- `npm run build` — static output in `dist/` (includes Pagefind search index)
- `npm run preview` — preview the production build

Until DNS cutover, `astro.config.mjs` uses `site: 'https://dkrics.github.io'` and `base: '/oldfashioneddoctor/'`. Preview: https://dkrics.github.io/oldfashioneddoctor/

After cutover, set `site` to `https://oldfashioneddoctor.com` and `base` to `/`, and copy `CNAME.example.live` to `public/CNAME`.

## Custom domain cutover

Canonical domain: **oldfashioneddoctor.com**. Do not change live DNS until you are ready. Keep Blogger live until the new site is confirmed.

See `STATUS.md` for the Squarespace DNS → GitHub Pages steps. DNS is still Homey-owned. Apex still points at Blogger (`216.239.32/34/36/38.21`) and `www` is still `ghs.google.com`.

## Content

- 24 essays in `src/content/posts/` (full Blogger text)
- Original photographs in `public/images/posts/`
- Generated covers for posts that had no surviving photo: `public/images/covers/`
- Default social card: `public/images/og-default.jpg`
- Homepage photograph: `public/images/hero.jpg`
- Old Blogger paths such as `/2018/02/make-it-count.html` redirect to the new slugs

Feedback is via X only for identity: [@OldFashionedDr](https://x.com/OldFashionedDr). There is no public email address.

Each essay has a comments box that emails a note for review (Web3Forms). Name and email are required; email is never published; nothing appears on the page. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` (see `STATUS.md` and `.env.example`). Do not import old Blogger comments.

Do not republish without permission. Linking is okay.
