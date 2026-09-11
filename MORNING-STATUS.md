# Morning status — Old Fashioned Doctor cutover (2026-09-11 night)

You went to sleep asking me to finish as much as possible autonomously.

## Done

1. **Astro site polished** — all 24 posts, covers, SEO, X-only feedback, moderated comments UI (no Blogger spam imported).
2. **Committed + pushed** to branch `site` on `DKrics/oldfashioneddoctor` (left old simpler HTML on `main` alone).
3. **GitHub Pages** now builds from Actions on `site`. Latest deploy: **green**.
4. **Preview live:** https://dkrics.github.io/oldfashioneddoctor/  
   (Should show Drinks nav, cover images, new layout — not Blogger.)
5. **Custom domain set in GitHub Pages:** `oldfashioneddoctor.com` (HTTPS will enable after DNS verifies).

## In progress / overnight

- **Squarespace DNS cutover** from Blogger (Google A records `216.239.*`) → GitHub Pages A records (`185.199.108–111.153`) + `www` CNAME → `dkrics.github.io`. Browser work started while you slept.

## Still needs you (can't finish while Cusdis host is down)

- **Cusdis** (`cusdis.com`) still returns HTTP 521. Comments form is in the site but stays disabled until you create a project and set GitHub Actions secret `PUBLIC_CUSDIS_APP_ID` (steps in `STATUS.md`). Then re-run the Deploy workflow.

## When you wake

1. Open https://dkrics.github.io/oldfashioneddoctor/ — confirm it looks right.
2. Check https://oldfashioneddoctor.com — if DNS propagated, it should be the new site (may take minutes–hours; HTTPS may lag).
3. If DNS didn't flip, open Squarespace Domains → DNS and set the A/CNAME records listed in `STATUS.md`.
4. When Cusdis is up: create project + secret, redeploy.
5. After HTTPS is green on the custom domain, retire Blogger custom domain mapping.

## Do not

- Force-push `main` (we deliberately used `site`).
- Import `/workspace/ofd-archive/comments.md` (spam).
