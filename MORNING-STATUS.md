# Morning brief — Old Fashioned Doctor

Quiet overnight is over (after 7:30 AM CDT). Preview is live; **you** still own Squarespace DNS. Agents did **not** change live DNS.

Keeper check `2026-09-15 07:58 CDT`: github.io Astro preview OK (cream/amber `#fbf7ef`/`#b45309`/`#ebe3d3` / brand `#6b3e1a`/`#d9c48a`, covers, Drinks `/drinks/` 200). Apex still Blogger A `216.239.32/34/36/38.21`. `www` still Blogger GSE (`ghs.google.com`). Hosted Cusdis still **521** (abandoned). Comments email form **live** on preview — `PUBLIC_WEB3FORMS_ACCESS_KEY` present in Actions secrets. Box browser still has no usable Squarespace/Google login (Squarespace `ANONYMOUS_ID` only; no Google SID/HSID). GitHub Pages `cname` still null (correct for preview mode). Latest Actions deploy on `site` green (prior keeper status push). `gh` CLI authenticated as DKrics. No material change vs 06:50 CDT. DNS cutover still blocked on Homey. Local ~2026-09-15 07:58 CDT (after 7:30 CDT) — stay quiet (no WakeParent; no material change).



## Preview (ready now)


https://dkrics.github.io/oldfashioneddoctor/

Hard-refresh. Astro, covers, Drinks, cream/amber, comments form enabled. `npm run build` green. Branch `site` deploys via Actions (latest push green).

## 1) Web3Forms access key — DONE

Hosted Cusdis (`cusdis.com`) was HTTP **521** and is no longer used. Secret `PUBLIC_WEB3FORMS_ACCESS_KEY` is set; redeploys include it. Comments email a note for review. Nothing appears on the page. The private inbox address is **not** published on the site. Do **not** import Blogger/Disqus comments.

Optional cleanup: delete unused secret `PUBLIC_CUSDIS_APP_ID` (and `PUBLIC_CUSDIS_HOST` if present).

## 2) Squarespace DNS cutover (still blocked — Homey)

Apex still points at Blogger (`216.239.32/34/36/38.21`). `www` still `ghs.google.com`. Keep Blogger until HTTPS on the new site is confirmed. Box browser still has **no** usable Squarespace/Google login (anonymous cookies only) — cannot flip DNS from here.

1. Squarespace → Domains → `oldfashioneddoctor.com` → **DNS settings**
2. Apex **A** records (remove/replace Blogger A's):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. `www` **CNAME** → `dkrics.github.io`
4. Tell OFD (or wait for the next keeper) — we then:
   - Restore `public/CNAME` = `oldfashioneddoctor.com` (from `CNAME.example.live`)
   - Set `astro.config.mjs` to `site: 'https://oldfashioneddoctor.com'`, `base: '/'`
   - Push `site` → green Actions deploy
   - GitHub **Settings → Pages → Custom domain** = `oldfashioneddoctor.com` → wait for check → enable **HTTPS**
5. Verify https://oldfashioneddoctor.com serves Astro (not Blogger), then retire Blogger custom domain

## Do not

- Force-push `main`
- Import old Blogger comments
- Invent new posts

## Done overnight / morning

- All 24 heroes/covers filled; build green
- `STATUS.md` + this file updated for morning
- `main` sync from `site` prepared (no force)
- Web3Forms secret added + comments form live on github.io preview
- Keeper `2026-09-13 13:57 CDT`: preview re-verified; comments live; DNS still blocked on Homey/login; box Squarespace cookies anonymous only; no WakeParent (DNS ask unchanged; after 7:30 CDT)
- Keeper `2026-09-13 14:57 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 15:51 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 16:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 17:57 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 18:59 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 19:56 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)

- Keeper `2026-09-13 20:53 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)
- Keeper `2026-09-13 21:50 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)

- Keeper `2026-09-13 22:54 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change)

- Keeper `2026-09-13 23:59 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 00:57 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 01:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)
- Keeper `2026-09-14 02:53 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 03:53 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 05:06 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 05:55 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 07:01 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-14 07:54 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 09:52 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

## Git / main

- Deploy source of truth: branch **`site`** (Actions on push). Already pushed; green.
- `origin/main` is a divergent older/simpler rebuild — **cannot** update without force-push.
- Agents will **not** force-push. Decide when ready: keep `site`, or authorize replacing `main`.

- Keeper `2026-09-14 10:54 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 12:05 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 13:08 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)
- Keeper `2026-09-14 13:50 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 14:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 16:05 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 17:17 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 18:20 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 18:49 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 19:52 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 20:50 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 21:57 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 22:55 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)

- Keeper `2026-09-14 23:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 00:49 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)


- Keeper `2026-09-15 01:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 03:22 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 03:50 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 05:01 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 05:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 06:50 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; before 7:30 CDT)

- Keeper `2026-09-15 07:58 CDT`: preview re-verified; comments still live; DNS still blocked; box Squarespace still anonymous only; no WakeParent (no material change; after 7:30 CDT)
