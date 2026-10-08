# OFD cutover status (keeper, 2026-10-08 ~2:47 PM CT)

Done:
- Astro preview live at https://dkrics.github.io/oldfashioneddoctor/ (200, Drinks present, no Blogger).

Blocked (Homey action needed):
- DNS not cut. Apex oldfashioneddoctor.com still Blogger/Google A (216.239.32/34/36/38.21); www CNAME still ghs.google.com.
  Needed in Squarespace/Google Domains: apex A -> 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; www CNAME -> dkrics.github.io.
  After that, keeper restores public/CNAME + astro site/base and enables Pages HTTPS.
- Comments: cusdis.com returns 521 (down), so PUBLIC_CUSDIS_APP_ID not set yet.
