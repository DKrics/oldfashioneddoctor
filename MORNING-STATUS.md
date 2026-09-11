# Morning brief — Old Fashioned Doctor

Quiet overnight. Preview is live; **you** own DNS + Cusdis. Agents did **not** change live DNS.

## Preview (ready now)

https://dkrics.github.io/oldfashioneddoctor/

Hard-refresh. Astro, covers, Drinks, cream/amber. `npm run build` green. Branch `site` deploys via Actions.

## 1) Cusdis App ID (comments)

Host was **521** overnight — retry when [cusdis.com](https://cusdis.com) loads.

1. Open https://cusdis.com → **Start for free**
2. Sign in with your private Google/GitHub (dashboard stays off the public journal)
3. **+ New website**: Name `Old Fashioned Doctor`, Domain `oldfashioneddoctor.com`
4. Copy **App ID** from Embed (`data-app-id="…"`) or from the project URL `…/dashboard/project/<APP-ID>`
5. In project settings: turn **on** email notify for new comments (Quick Approve)
6. GitHub → repo `DKrics/oldfashioneddoctor` → **Settings → Secrets and variables → Actions → New repository secret**
   - Name: `PUBLIC_CUSDIS_APP_ID`
   - Value: that App ID
7. **Actions → Deploy to GitHub Pages → Run workflow** (branch `site`)
8. Approve comments in Cusdis dashboard (or email link). Do **not** import Blogger/Disqus comments.

Until then: comments heading + disabled form + X handle only.

## 2) Squarespace DNS cutover (do this when ready)

Apex still points at Blogger (`216.239.*`). Keep Blogger until HTTPS on the new site is confirmed.

1. Squarespace → Domains → `oldfashioneddoctor.com` → **DNS settings**
2. Apex **A** records (remove/replace Blogger A’s):
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

## Done overnight

- All 24 heroes/covers filled; build green
- `STATUS.md` + this file updated for morning
- `main` sync from `site` prepared (no force)

## Git / main

- Deploy source of truth: branch **`site`** (Actions on push). Already pushed; green.
- `origin/main` is a divergent older/simpler rebuild — **cannot** update without force-push.
- Agents will **not** force-push. Decide at morning: keep `site`, or authorize replacing `main`.
