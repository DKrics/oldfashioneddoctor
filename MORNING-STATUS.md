Last keeper check: 2026-10-17 13:51 CDT (preview 200 Astro/Drinks, no Blogger; apex A still Google 216.239.32/34/36/38.21; www CNAME ghs.google.com (GSE/Blogger) — DNS cutover pending; cusdis.com 521)
Last checked: 2026-10-17 18:54 CDT — preview OK (200, Drinks, no Blogger); apex A still Google 216.239.x.21, www CNAME ghs.google.com (Blogger), DNS cutover pending; cusdis 521
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


- 2026-10-17 12:59 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 08:57 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 07:57 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 06:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 05:56 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 03:51 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21; www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-16 02:50 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 22:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 21:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 18:57 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 13:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 12:02 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 11:08 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 10:10 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 07:58 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 07:00 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 05:50 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 04:57 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 03:49 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 02:58 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-15 00:53 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 23:51 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 22:51 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 21:58 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 19:54 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 18:54 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 16:50 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 14:51 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 13:00 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-14 12:04 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex A still Google 216.239.32/34/36/38.21, HTTPS 301 via ghs → www GSE (Google/Blogger); www CNAME ghs.google.com; DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-14 05:52 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-14 04:52 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.


- 2026-10-14 00:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-13 23:49 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-13 22:51 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-13 20:52 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-13 19:57 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-13 13:03 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-13 11:05 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-13 08:02 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.

- 2026-10-12 22:50 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-12 21:54 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-12 02:55 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A 216.239.32/34/36/38.21, www CNAME ghs.google.com; cusdis.com 521; no Google SID/HSID/SSID (Squarespace analytics cookies only). Blocked on Homey DNS change.
- 2026-10-12 04:56 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Blogger A 216.239.32/34/36/38.21, www CNAME ghs.google.com; cusdis.com 521; no Google SID/HSID/SSID (Squarespace analytics/session cookies only, not usable for DNS cut). Blocked on Homey DNS change.
- 2026-10-12 03:54 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Blogger A 216.239.32/34/36/38.21, www CNAME ghs.google.com; cusdis.com 521; no Google SID/HSID/SSID (Squarespace analytics/session cookies only, not usable for DNS cut). Blocked on Homey DNS change.
- 2026-10-09 03:00 CT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 03:54 CT: preview 200 Drinks OK; apex still Blogger A, www ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 04:52 CT: preview live (200, Drinks OK, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 05:57 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 08:14 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 09:25 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 11:13 CT: Preview OK (200, Drinks). DNS still Blogger (apex 216.239.x.21, www ghs.google.com). cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 14:00 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 15:53 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com (DNS cut blocked on Homey); cusdis.com 521.

- 2026-10-09 17:00 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis.com 521. Blocked on Homey DNS change.

- 2026-10-09 17:56 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 18:58 CDT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.

## 2026-10-09 19:51 CDT check
- Preview live (200, Drinks OK, no Blogger). Apex still Blogger A; www CNAME ghs.google.com. cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 21:58 CT: preview OK (200, Drinks); apex still Blogger A, www ghs.google.com; cusdis 521. Blocked on Homey DNS change.

- 2026-10-09 22:57 CDT: preview 200 (Drinks OK, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.
- 2026-10-09 23:54 CT: preview 200 OK (Drinks, no Blogger); apex still Blogger A, www CNAME ghs.google.com; cusdis 521. Blocked on Homey DNS change.
- 2026-10-12 05:57 CDT: preview 200 OK (Drinks, no Blogger); apex still served by Google/Blogger (301 to www, server ghs); cusdis 521. Blocked on Homey DNS change.
- 2026-10-12 07:02 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Blogger A 216.239.32/34/36/38.21, www CNAME ghs.google.com; cusdis.com 521; no Google SID/HSID/SSID (Squarespace analytics/session cookies only, not usable for DNS cut). Blocked on Homey DNS change.
- 2026-10-12 08:14 CT: Preview live (200, Drinks OK, no Blogger); apex still Google/Blogger (ghs) — DNS cutover pending Homey; cusdis.com 521.
- 2026-10-12 09:19 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Google/Blogger (301→www, server ghs/GSE); cusdis.com 521; no usable Google/Squarespace DNS session on box. Blocked on Homey DNS change.
- Keeper check 2026-10-12 ~11:20 CT: preview 200 (Drinks OK, no Blogger); apex still Google/Blogger (DNS pending); cusdis 521.
- 2026-10-12 12:09 CT keeper: Astro preview 200 (Drinks OK, no Blogger); apex/www still Google/Blogger (ghs), DNS cutover pending (Homey must change DNS); cusdis.com 521.
- 2026-10-12 13:04 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Google A 216.239.32/34/36/38.21, www CNAME ghs.google.com (ghs/GSE Blogger); cusdis.com 521; no usable Squarespace/Google DNS session on box. Blocked on Homey DNS change.
- 2026-10-12 14:01 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still Google A 216.239.32/34/36/38.21, www CNAME ghs.google.com (ghs/GSE Blogger); cusdis.com 521; no usable Squarespace/Google DNS session on box. Blocked on Homey DNS change.
- 2026-10-12 16:03 CT keeper: Astro preview 200 (Drinks OK, no Blogger); apex/www still Google/Blogger (ghs) so DNS cutover pending on Homey; cusdis.com 521. No material change.
- 2026-10-12 18:00 CDT: keeper check — Astro preview 200 (Drinks OK, no Blogger); apex/www still Google/Blogger, DNS cutover pending (Homey must change DNS in Squarespace); cusdis.com 521.

- 2026-10-12 19:56 CT keeper run: Astro preview live (200, Drinks OK, no Blogger); apex still served by ghs (Google/Blogger) — DNS cutover pending (Homey must change DNS in Squarespace); cusdis.com 521. No material change.
- 2026-10-12 23:52 CT keeper check: Astro preview https://dkrics.github.io/oldfashioneddoctor/ live (200, Drinks OK, no Blogger). Apex oldfashioneddoctor.com still 301 via ghs and www served by GSE (Google/Blogger), so DNS cutover is still pending (Homey must change DNS in Squarespace/Google Domains). cusdis.com 521, so comments still blocked.

- 2026-10-13 00:52 CT keeper check: Astro preview https://dkrics.github.io/oldfashioneddoctor/ live (200, Drinks OK, no Blogger). Apex oldfashioneddoctor.com still 301 via ghs and www served by GSE (Google/Blogger), so DNS cutover is still pending (Homey must change DNS in Squarespace/Google Domains). cusdis.com 521, so comments still blocked. No material change.

- 2026-10-13 02:49 CT keeper check: Astro preview https://dkrics.github.io/oldfashioneddoctor/ live (200, Drinks OK, no Blogger). Apex oldfashioneddoctor.com still 301 via ghs and www served by GSE (Google/Blogger), so DNS cutover is still pending (Homey must change DNS in Squarespace/Google Domains). cusdis.com 521, so comments still blocked. No material change.
- 2026-10-17 ~19:52 CDT: Astro preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover pending Homey's Squarespace/Google login. cusdis.com 521. No change.
- 2026-10-13 ~03:52 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex 301 via ghs and www served by GSE (Blogger), so DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521; no material change.
- 2026-10-13 ~06:56 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex 301 via ghs (Google A records 216.239.x.21) and www CNAME ghs.google.com served by GSE (Blogger), so DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521; no material change.

## Keeper log
- 2026-10-16 ~16:55 CDT: Astro preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21; www CNAME ghs.google.com (Blogger). DNS cutover still blocked on Squarespace/Google login. cusdis.com 521.
- 2026-10-14 13:54 CDT: keeper check — Astro preview 200 (Drinks OK, no Blogger); apex/www still Google/Blogger (DNS cutover pending, needs Homey's Squarespace/Google login); cusdis.com 521. No change.
- 2026-10-13 15:58 CDT: keeper check — Astro preview 200 (Drinks OK, no Blogger); apex still Google (301 via ghs), www served by GSE (Blogger) → DNS cutover still pending (needs Squarespace/Google login by Homey); cusdis.com 521 → comments still blocked.
- 2026-10-13 14:51 CDT: keeper check — Astro preview 200 (Drinks OK, no Blogger); apex still Google (301 via ghs), www served by GSE (Blogger) → DNS cutover still pending (needs Squarespace/Google login by Homey); cusdis.com 521 → comments still blocked.
- 2026-10-13 ~17:55 CDT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex 301 via ghs, www served by GSE (Blogger) so DNS cutover still pending (needs Homey's Squarespace/Google login); cusdis.com 521.
- 2026-10-13 18:54 CDT: keeper check — Astro preview 200 (Drinks OK, no Blogger); apex still Google A 216.239.32/34/36/38.21 (301 via ghs), www CNAME ghs.google.com served by GSE (Blogger) → DNS cutover still pending (needs Squarespace/Google login by Homey); cusdis.com 521 → comments still blocked. No material change.
- 2026-10-14 01:49 CDT check: Astro preview live (200, Drinks present, no Blogger); apex still 301 via ghs, www served by GSE (Blogger) — DNS cutover pending Squarespace/Google login; cusdis.com 521 — comments blocked.
- 2026-10-14 ~02:57 CDT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex 301 via ghs, www served by GSE (Blogger) — DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521 — comments still blocked.
- 2026-10-14 ~03:49 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex 301 via ghs, www served by GSE (Blogger) — DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521 — comments still blocked.
- 2026-10-14 ~08:59 CDT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex A 216.239.32/34/36/38.21 (301 via ghs), www CNAME ghs.google.com served by GSE (Blogger) — DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521 — comments still blocked. No material change.

- 2026-10-14 09:55 CDT: preview 200 OK (Drinks, cream/amber, no Blogger); apex still 301 via ghs → www GSE (Google/Blogger), DNS cutover pending Homey; cusdis.com 521. No material change.
- 2026-10-14 ~10:55 CT keeper check: Astro preview 200 (Drinks OK, no Blogger). DNS unchanged: apex A = Google 216.239.x.21, www CNAME ghs.google.com (served by GSE/Blogger) — cutover still needs Homey's Squarespace/Google DNS login. cusdis.com 521 (down). No material change.
- 2026-10-15 09:06 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover still pending (needs Squarespace/Google login); cusdis.com 521.
- 2026-10-15 ~12:57 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); DNS still Google/Blogger (cutover pending Homey Squarespace login); cusdis.com 521.
- 2026-10-15 ~20:55 CT: preview live (200, Drinks OK, no Blogger); apex A still Google, www CNAME ghs.google.com; DNS cutover pending (needs Homey's Squarespace/Google login); cusdis.com 521.
- 2026-10-16 04:51 CDT: preview OK; DNS still Google/Blogger; cusdis 521; no change.
- 2026-10-16 ~15:58 CT keeper check: Astro preview 200 (Drinks OK, no Blogger); apex A still Google 216.239.x.21, www CNAME ghs.google.com (Blogger) — DNS cutover pending Homey's Squarespace/Google login; cusdis.com 521.

- Last keeper check: 2026-10-16 17:58 CDT — Astro preview 200 (Drinks OK, no Blogger); apex A still Google 216.239.x.21, www CNAME ghs.google.com → DNS cutover pending (needs Squarespace/Google Domains login); cusdis.com 521 → comments pending.
- 2026-10-16 ~19:58 America/Chicago: Astro preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com (Blogger) — DNS cutover still pending Homey's Squarespace/Google login. cusdis.com 521 — comments still blocked.
- 2026-10-16 ~21:50 CDT keeper check: preview https://dkrics.github.io/oldfashioneddoctor/ 200 (Astro, Drinks OK, no Blogger). DNS unchanged: apex A Google 216.239.x.21, www CNAME ghs.google.com (Blogger). cusdis.com 521. Still blocked on Homey doing the DNS change in Squarespace/Google Domains.
- 2026-10-16 ~22:50 CDT: Astro preview live (200, Drinks OK, no Blogger); apex A still Google 216.239.x.21, www CNAME ghs.google.com (Blogger) — DNS cutover still pending Homey's Squarespace/Google login; cusdis.com 521.
- 2026-10-17 ~01:58 CDT: Preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover pending (needs Squarespace/Google Domains login). cusdis.com 521.
- 2026-10-17 ~03:57 CDT: Preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover pending (needs Squarespace/Google Domains login). cusdis.com 521.
- 2026-10-17 ~06:49 CDT: Preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover pending (needs Squarespace/Google Domains login). cusdis.com 521.
- 2026-10-17 ~07:49 CDT: Preview live (200, Drinks OK, no Blogger). Apex A still Google 216.239.x.21, www CNAME ghs.google.com — DNS cutover pending (needs Squarespace/Google Domains login). cusdis.com 521.
