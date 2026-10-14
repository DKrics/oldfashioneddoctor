Last keeper check: 2026-10-14 12:04 CDT (preview 200 Astro/Drinks, no Blogger; apex A still Google 216.239.32/34/36/38.21, apex HTTPS 301 via ghs → www; www CNAME ghs.google.com served by GSE/Blogger — DNS cutover pending; cusdis.com 521)
Last checked: 2026-10-14 05:52 CDT — preview OK (200, Drinks, no Blogger); apex HTTPS 301 via ghs → www; www served by GSE (Google/Blogger), DNS cutover pending; cusdis 521

# OFD cutover status (keeper, 2026-10-08 ~11:55 PM CT)
Last check: 2026-10-09 10:22 CDT — preview OK; apex still Blogger; cusdis 521

Done:
- Astro preview live at https://dkrics.github.io/oldfashioneddoctor/ (200, Drinks present, no Blogger).
- GitHub Pages: status built, html_url project site, cname null (expected pre-cutover), https_enforced true, build_type workflow.

Blocked (Homey action needed):
- DNS not cut. Apex oldfashioneddoctor.com still Blogger/Google A (216.239.32/34/36/38.21); www CNAME still ghs.google.com.
  Apex HTTPS: 301 → https://www.oldfashioneddoctor.com/ (ghs/Blogger), not Astro.
  Needed in Squarespace/Google Domains: apex A -> 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; www CNAME -> dkrics.github.io.
  After that, keeper restores public/CNAME + astro site/base and enables Pages custom domain HTTPS.
  Box browser: no SID/HSID/SSID (or equivalent) for Google/Squarespace — cannot change DNS from here.
- Comments: cusdis.com returns 521 (down), so PUBLIC_CUSDIS_APP_ID not set yet; Web3Forms remains fallback.

- 2026-10-14 12:04 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.

-