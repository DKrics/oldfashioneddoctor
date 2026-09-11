# Old Fashioned Doctor

A static journal for **Old Fashioned Doctor** — *Medicine. Cocktails. Life.*

The public byline is **Old Fashioned Doctor**. Rebuilt from the public Blogger archive as a GitHub Pages site (Astro + TypeScript) for **https://oldfashioneddoctor.com**.

## Local

From this directory:

- `npm run dev` — local server
- `npm run build` — static output in `dist/` (includes Pagefind search index)
- `npm run preview` — preview the production build

`site` is `https://oldfashioneddoctor.com` and `base` is `/`.

## Custom domain cutover

Canonical domain: **oldfashioneddoctor.com**. Do not change live DNS until you are ready. Keep Blogger live until the new site is confirmed.

See `STATUS.md` for the Squarespace DNS → GitHub Pages steps.

## Content

- 24 essays in `src/content/posts/`
- Original photographs in `public/images/posts/`
- Generated covers for posts that had no surviving photo: `public/images/covers/`
- Default social card: `public/images/og-default.jpg`
- Old Blogger paths such as `/2018/02/make-it-count.html` redirect to the new slugs

Feedback is via X only for identity: [@OldFashionedDr](https://x.com/OldFashionedDr). There is no public email address.

Each essay has a comments box (Cusdis, moderated). Name and email are required; email is never published; nothing is shown until approved. Set `PUBLIC_CUSDIS_APP_ID` (see `STATUS.md` and `.env.example`). Do not import old Blogger comments.

Do not republish without permission. Linking is okay.
