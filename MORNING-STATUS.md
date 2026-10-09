Last checked: 2026-10-09 06:59 CDT — preview OK; DNS still Blogger; cusdis 521
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

- 2026-10-09 03:00 CT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 03:54 CT: preview 200 Drinks OK; apex still Blogger A, www ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 04:52 CT: preview live (200, Drinks OK, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 05:57 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 08:14 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 09:25 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 11:13 CT: Preview OK (200, Drinks). DNS still Blogger (apex 216.239.x.21, www ghs.google.com). cusdis.com 521. Blocked on Homey DNS change.
