# Morning brief — Old Fashioned Doctor

Quiet overnight is over (after 7:30 AM CDT). Preview is live; **you** own DNS + the comments inbox key. Agents did **not** change live DNS.

Keeper check `2026-09-12 10:58 CDT`: github.io Astro preview OK (cream/amber `#f4ead8`/`#d9c48a`, covers, Drinks `/drinks/` 200). Apex still Blogger A `216.239.32/34/36/38.21`. `www` still Blogger GSE. Hosted Cusdis still **521** (abandoned); comments email-only pending Web3Forms secret (not set — `gh secret list` empty). Box browser chrome-profile has only anonymous/marketing Squarespace cookies — **no** usable login (`ANONYMOUS_ID` present; no Google SID/HSID account cookies). GitHub Pages `cname` still null (correct for preview mode). Latest Actions deploy on `site` green. `gh` CLI still authenticated as DKrics. No material change vs prior keeper — Homey still owns DNS + Web3Forms key. Local ~2026-09-12 10:58 CDT — stay quiet (no WakeParent; no material change).





## Preview (ready now)

https://dkrics.github.io/oldfashioneddoctor/

Hard-refresh. Astro, covers, Drinks, cream/amber. `npm run build` green. Branch `site` deploys via Actions (latest push green).

## 1) Web3Forms access key (comments → private inbox)

Hosted Cusdis (`cusdis.com`) was HTTP **521** and is no longer used. Comments now email a note for review. Nothing appears on the page. The private inbox address is **not** published on the site.

1. Open https://web3forms.com → **Create Access Key**
2. Enter the private inbox email (not published on the site)
3. Confirm via the email they send
4. Copy **Access Key**
5. GitHub → repo `DKrics/oldfashioneddoctor` → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `PUBLIC_WEB3FORMS_ACCESS_KEY`
   - Value: that key
6. **Actions → Deploy to GitHub Pages → Run workflow** (branch `site`)
7. Optional: delete unused secret `PUBLIC_CUSDIS_APP_ID` (and `PUBLIC_CUSDIS_HOST` if present)

Until then: comments heading + disabled form + X handle only. Notes land in the inbox; do **not** import Blogger/Disqus comments.

## 2) Squarespace DNS cutover (do this when ready)

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
- Keeper `2026-09-12 10:58 CDT`: preview re-verified; DNS still blocked on Homey/login; comments waiting on Web3Forms key; box Squarespace cookies anonymous only; no WakeParent (no material change)

## Git / main

- Deploy source of truth: branch **`site`** (Actions on push). Already pushed; green.
- `origin/main` is a divergent older/simpler rebuild — **cannot** update without force-push.
- Agents will **not** force-push. Decide when ready: keep `site`, or authorize replacing `main`.
