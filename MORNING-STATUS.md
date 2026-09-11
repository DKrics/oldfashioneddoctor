# Morning status — Old Fashioned Doctor cutover (updated ~4:41 AM UTC)

You went to sleep asking me to finish as much as possible autonomously.

## Done overnight

1. **Astro site polished** — all 24 posts, covers, SEO, X-only feedback, moderated comments UI (no Blogger spam imported).
2. **Pushed** to branch `site` on `DKrics/oldfashioneddoctor` (left the older simpler HTML alone on `main`).
3. **GitHub Pages Actions** deploy from `site` — **green**.
4. **Preview live:** https://dkrics.github.io/oldfashioneddoctor/  
   (Drinks nav, cover images, new layout — not Blogger.)
5. **Custom domain configured in GitHub Pages:** `oldfashioneddoctor.com` (HTTPS waits on DNS).

## Blocked — needs you when you wake (~2 minutes)

**Squarespace DNS cutover did not complete.** The box browser had no logged-in Squarespace/Google session; Google sign-in asked for email/phone. No DNS records were changed.

Current public DNS still Blogger:
- Apex A: `216.239.32.21`, `.34.21`, `.36.21`, `.38.21`
- www → Google (`ghs.google.com`)

### What to set in Squarespace → Domains → oldfashioneddoctor.com → DNS

1. Remove/replace apex **A** records that point at `216.239.*` with these four GitHub Pages IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. Set **www** **CNAME** → `dkrics.github.io`
3. Keep MX/TXT/email records untouched.
4. After DNS propagates, GitHub Pages → enable HTTPS for `oldfashioneddoctor.com` (cname is already set).
5. Then remove the custom domain from Blogger so it stops claiming the domain.

Login wall screenshot (overnight): `/workspace/ofd-screenshots/07-squarespace-login-wall.png`

## Also still open

- **Cusdis** (`cusdis.com`) still HTTP 521. Comments UI is in the site but disabled until you create a project and set Actions secret `PUBLIC_CUSDIS_APP_ID` (see `STATUS.md`), then re-run Deploy.

## Quick wake checklist

1. https://dkrics.github.io/oldfashioneddoctor/ — confirm look.
2. Squarespace DNS flip (above).
3. Wait for https://oldfashioneddoctor.com to show the new site + HTTPS.
4. Cusdis secret when their host is back.
5. Retire Blogger custom domain.
