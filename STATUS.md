# Old Fashioned Doctor — go-live status

Overnight (quiet): site work is **done** on branch `site`. Essay prose untouched. All **24** posts remain. Blogger comments **not** imported.

Keeper `2026-09-11 13:52 CDT`: https://dkrics.github.io/oldfashioneddoctor/ serves Astro (cream/amber, covers, Drinks). Apex `oldfashioneddoctor.com` still Blogger A records `216.239.*`. `www` → `ghs.google.com`. Hosted Cusdis dropped (cusdis.com HTTP **521**); comments are now an email form pending `PUBLIC_WEB3FORMS_ACCESS_KEY`. No usable Squarespace/Google session on the box browser (stale/absent auth; no Google SID/HSID; account.squarespace.com → login OAuth). GitHub Pages `cname` null (preview mode). `gh` CLI authenticated as DKrics.

`npm run build` **green** (Astro + Pagefind indexed 24 pages).

## Live preview (use this until DNS cutover)

**https://dkrics.github.io/oldfashioneddoctor/**

Hard-refresh. Cream/amber Astro site with `Drinks` nav and per-post covers — **not** Blogger.

Repo is intentionally on **github.io preview mode** until you flip Squarespace DNS:
- `astro.config.mjs`: `site: 'https://dkrics.github.io'`, `base: '/oldfashioneddoctor/'`
- No `public/CNAME` (would 301 github.io → Blogger while apex is still `216.239.*`)
- Restore files: `CNAME.example.live` / `CNAME.example` → copy to `public/CNAME` after DNS

## What landed

- Real `hero` on every post (12 generated covers in `public/images/covers/` + `public/images/og-default.jpg`) — no gradient placeholders
- SEO: titles, descriptions, canonicals, OG/Twitter, sitemap, robots, RSS, JSON-LD `Blog` / `BlogPosting`, author **Old Fashioned Doctor** only
- Drinks rename (`/cocktails/` → `/drinks/`), Pagefind search, Blogger path redirects under `public/2017`, `public/2018`, `public/p`
- Feedback via X only: [@OldFashionedDr](https://x.com/OldFashionedDr)
- Comments UI (`Comments.astro` + Web3Forms email POST): Name / Email / Comment required. Email never published. No on-page thread — notes go to the private inbox for review. Disabled until `PUBLIC_WEB3FORMS_ACCESS_KEY` is set. X remains the public alternate.

## Git

- Branch `site` is the deploy branch (Actions workflow on push to `site`)
- `gh` authenticated as **DKrics** (`repo` + `workflow`)
- Deploy stays on **`site`** (Actions). Do **not** force-push `main`
- `origin/main` is a divergent simpler rebuild; agents will not force-push

## Blocked on Homey (no live DNS changes from agents)

1. **Squarespace DNS** → GitHub Pages (apex still Blogger `216.239.32/34/36/38.21`)
2. **Web3Forms** access key secret (`PUBLIC_WEB3FORMS_ACCESS_KEY`) so the comments form can email notes
3. Box browser login for Squarespace/Google (still at sign-in walls)

Exact click-paths: see `MORNING-STATUS.md`.

## Cover files

```
public/images/covers/near-death-experience.jpg
public/images/covers/whiskey-healthcare.jpg
public/images/covers/martini-monday.jpg
public/images/covers/barrel-aging.jpg
public/images/covers/health-weight-loss.jpg
public/images/covers/heres-to-21.jpg
public/images/covers/cocktail-fail.jpg
public/images/covers/misinformed-patients.jpg
public/images/covers/waiting-on-doctor.jpg
public/images/covers/rosh-hashana.jpg
public/images/covers/good-doctors.jpg
public/images/covers/medicare-plan.jpg
public/images/og-default.jpg
```
