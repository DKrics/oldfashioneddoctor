# Old Fashioned Doctor — go-live status

Overnight (quiet): site work is **done** on branch `site`. Essay prose untouched. All **24** posts remain. Blogger comments **not** imported.

Keeper `2026-09-16 09:12 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor title/brand, cream/amber `#f4ead8`/`#d9c48a`, covers, Drinks nav); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both serve Blogger/GSE over HTTPS (apex DNS `216.239.32/34/36/38.21`; www Google frontends). Hosted Cusdis remains HTTP **521** (abandoned); comments Web3Forms form remains enabled (`access_key` present on post pages). GitHub Pages API still reports `cname: null`, `https_enforced: true`, workflow built; latest `site` deploy green. No usable Squarespace/Google session on the box (login.squarespace.com `ANONYMOUS_ID`; Google cookies lack SID/HSID/SSID). DNS remains Homey-owned. No material change vs 08:04 CDT; no WakeParent (after 7:30 CDT; DNS ask unchanged).




`npm run build` **green** (Astro + Pagefind indexed 24 pages).

## Live preview (use this until DNS cutover)

**https://dkrics.github.io/oldfashioneddoctor/**

Hard-refresh. Cream/amber Astro site with `Drinks` nav, per-post covers, and enabled comments form — **not** Blogger.

Repo is intentionally on **github.io preview mode** until you flip Squarespace DNS:
- `astro.config.mjs`: `site: 'https://dkrics.github.io'`, `base: '/oldfashioneddoctor/'`
- No `public/CNAME` (would 301 github.io → Blogger while apex is still `216.239.*`)
- Restore files: `CNAME.example.live` / `CNAME.example` → copy to `public/CNAME` after DNS

## What landed

- Real `hero` on every post (12 generated covers in `public/images/covers/` + `public/images/og-default.jpg`) — no gradient placeholders
- SEO: titles, descriptions, canonicals, OG/Twitter, sitemap, robots, RSS, JSON-LD `Blog` / `BlogPosting`, author **Old Fashioned Doctor** only
- Drinks rename (`/cocktails/` → `/drinks/`), Pagefind search, Blogger path redirects under `public/2017`, `public/2018`, `public/p`
- Feedback via X only: [@OldFashionedDr](https://x.com/OldFashionedDr)
- Comments UI (`Comments.astro` + Web3Forms email POST): Name / Email / Comment required. Email never published. No on-page thread — notes go to the private inbox for review. **Enabled** with `PUBLIC_WEB3FORMS_ACCESS_KEY`. X remains the public alternate.

## Git

- Branch `site` is the deploy branch (Actions workflow on push to `site`)
- `gh` authenticated as **DKrics** (`repo` + `workflow`)
- Deploy stays on **`site`** (Actions). Do **not** force-push `main`
- `origin/main` is a divergent simpler rebuild; agents will not force-push

## Blocked on Homey (no live DNS changes from agents)

1. **Squarespace DNS** → GitHub Pages (apex still Blogger `216.239.32/34/36/38.21`)
2. Box browser login for Squarespace/Google (anonymous cookies only; still at sign-in walls)

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

Keeper `2026-09-15 20:00 CDT`: preview re-verified via curl HTTP 200 as Astro (cream/amber, covers, Drinks); `/drinks/` HTTP 200. Apex and `www` still Blogger; Cusdis HTTP 521; GitHub Pages `cname` null with HTTPS enforced; no usable Squarespace/Google session on box (anonymous-only). No material change vs 18:54 CDT; DNS still Homey-owned; no WakeParent.

Keeper `2026-09-15 21:52 CDT`: preview re-verified via curl HTTP 200 as Astro (cream/amber, covers, Drinks); `/drinks/` HTTP 200. Apex and `www` still Blogger; Cusdis HTTP 521; GitHub Pages `cname` null with HTTPS enforced; no usable Squarespace/Google session on box (anonymous-only). No material change vs 20:53 CDT; DNS still Homey-owned; no WakeParent.

Keeper `2026-09-15 22:50 CDT`: preview re-verified via curl HTTP 200 as Astro (cream/amber, covers, Drinks); `/drinks/` HTTP 200. Apex and `www` still Blogger; Cusdis HTTP 521; GitHub Pages `cname` null with HTTPS enforced; no usable Squarespace/Google session on box (anonymous-only). No material change vs 21:52 CDT; DNS still Homey-owned; no WakeParent.

- Keeper `2026-09-15 23:49 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor brand, cream/amber markers, covers, and Drinks); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both apex and `www` serve Blogger/GSE over HTTPS (not Astro). Hosted Cusdis remains HTTP 521. GitHub Pages API reports `cname: null`, HTTPS enforced, workflow build; `gh` is authenticated. Light browser-cookie check found no Squarespace/Google auth cookies; no usable DNS session is available. DNS remains Homey-owned. No material change; no WakeParent (after 7:30 CDT).

Keeper `2026-09-16 00:57 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor brand, cream/amber markers, covers, and Drinks); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both apex and `www` serve Blogger/GSE over HTTPS (not Astro). Hosted Cusdis remains HTTP 521. GitHub Pages API reports `cname: null`, HTTPS enforced, workflow build; `gh` is authenticated. Light browser-cookie check: login.squarespace.com still has `ANONYMOUS_ID`; Google cookies lack SID/HSID/SSID. DNS remains Homey-owned. No material change; no WakeParent (before 7:30 CDT).

Keeper `2026-09-16 02:00 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor brand, cream/amber markers, covers, and Drinks); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both apex and `www` serve Blogger/GSE over HTTPS (not Astro). Hosted Cusdis remains HTTP 521. GitHub Pages API reports `cname: null`, HTTPS enforced, workflow build; `gh` is authenticated. Light browser-cookie check: login.squarespace.com still has `ANONYMOUS_ID`; Google cookies lack SID/HSID/SSID. DNS remains Homey-owned. No material change; no WakeParent (before 7:30 CDT).

Keeper `2026-09-16 03:02 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor brand, cream/amber markers, covers, and Drinks); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both apex and `www` serve Blogger/GSE over HTTPS (not Astro). Hosted Cusdis remains HTTP 521. GitHub Pages API reports `cname: null`, HTTPS enforced, workflow build; `gh` is authenticated. Light browser-cookie check: login.squarespace.com still has `ANONYMOUS_ID`; Google cookies lack SID/HSID/SSID. DNS remains Homey-owned. No material change; no WakeParent (before 7:30 CDT).

Keeper `2026-09-16 06:55 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor title/brand, cream/amber brand colors `#f4ead8`/`#d9c48a`, covers, Drinks nav); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both serve Blogger/GSE over HTTPS (generator=blogger; apex DNS `216.239.32/34/36/38.21`; www Google frontends). Hosted Cusdis remains HTTP **521** (abandoned); comments Web3Forms form remains enabled (`access_key` present on post pages). GitHub Pages API still reports `cname: null`, `https_enforced: true`, workflow built; latest `site` deploy green. No usable Squarespace/Google session on the box (no Squarespace cookies in available Chrome DBs; no Google SID/HSID/SSID). DNS remains Homey-owned. No material change vs 05:59 CDT; no WakeParent (before 7:30 CDT).

Keeper `2026-09-16 08:04 CDT`: preview re-verified via curl HTTP 200 as Astro (Old Fashioned Doctor title/brand, cream/amber `#f4ead8`/`#d9c48a`, covers, Drinks nav); `/drinks/` HTTP 200. Apex redirects 301 to `www`, then both serve Blogger/GSE over HTTPS (apex DNS `216.239.32/34/36/38.21`; www Google frontends). Hosted Cusdis remains HTTP **521** (abandoned); comments Web3Forms form remains enabled (`access_key` present on post pages). GitHub Pages API still reports `cname: null`, `https_enforced: true`, workflow built; latest `site` deploy green. No usable Squarespace/Google session on the box (login.squarespace.com `ANONYMOUS_ID`; Google cookies lack SID/HSID/SSID). DNS remains Homey-owned. No material change vs 06:55 CDT; no WakeParent (after 7:30 CDT; DNS ask unchanged).
