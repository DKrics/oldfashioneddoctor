# Morning status — Old Fashioned Doctor (quiet overnight → brief you at 7:30 AM Chicago)

Homey: work continues hourly via keeper routine. No chat pings before **7:30 AM America/Chicago**.

## Live preview (FIXED ~4:54 UTC)

**Hard-refresh:** https://dkrics.github.io/oldfashioneddoctor/

Confirmed serving **Astro** (not Blogger): cream/amber palette, `Drinks` nav, `covers/` hero images, CSS 200.

Earlier you saw Blogger because GitHub Pages had a custom-domain CNAME and redirected github.io → oldfashioneddoctor.com (still on Blogger DNS). CNAME cleared for preview; `base` set to `/oldfashioneddoctor/` until DNS cutover.

## Done

- All 24 posts + per-post covers + SEO + moderated comments UI (no spam import)
- Branch `site` pushed; Actions deploys green
- Hourly keeper routine: `ofd-cutover-keeper` (quiet until 7:30 AM Chicago)

## Blocked on you after 7:30

1. **Squarespace DNS** (login required — no session on box overnight)
   - Apex A → `185.199.108.153` `.109.153` `.110.153` `.111.153`
   - www CNAME → `dkrics.github.io`
   - Then we restore custom-domain CNAME + `base: '/'` and enable HTTPS
2. **Cusdis** still down (521) — comments need `PUBLIC_CUSDIS_APP_ID` when host is back

## Color scheme + graphics note

The redesign you previewed earlier (cream paper, dark brown chrome, amber accents, stethoscope hero, per-post covers) is what’s on the Astro preview link above. It was never on Blogger — only looked “missing” while the link redirected to Blogger.

## Keeper check (2026-09-11 04:57 UTC)
- Preview still Astro with covers/Drinks.
- Apex DNS still Blogger (216.239.*).
- Cusdis: host responding with errors (not signup-ready).
- No Homey ping (quiet until 7:30 America/Chicago).
