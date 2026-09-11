# Old Fashioned Doctor — go-live status

The site in this repo is ready for **https://oldfashioneddoctor.com** on GitHub Pages. Essay prose was not rewritten. All 24 posts remain. Old Blogger comments were **not** imported (the archive is almost all spam).

`npm run build` succeeded (Astro static build + Pagefind indexed 24 pages).

## What landed

- Custom domain config: `site: https://oldfashioneddoctor.com`, `base: '/'`, `public/CNAME` = `oldfashioneddoctor.com`.
- Every post has a real `hero` (no gradient placeholders). Generated covers live in `public/images/covers/`; default OG image is `public/images/og-default.jpg`.
- SEO: titles, descriptions, canonicals, OG/Twitter, sitemap, robots.txt, RSS, JSON-LD `Blog` / `BlogPosting` with author **Old Fashioned Doctor** only.
- Drinks nav (`/cocktails/` → `/drinks/`), Pagefind search, Blogger path redirects under `public/2017`, `public/2018`, `public/p`.
- Feedback CTA via X only: [@OldFashionedDr](https://x.com/OldFashionedDr). No public email, no identity-exposing contact form.
- **Comments** on every post (`src/components/Comments.astro`): name + **email required** + body. Submissions go to **Cusdis** and stay **unpublished until you approve**. Commenter email is never rendered on the page. Empty thread on day one (no Blogger import).

## Comments: what Homey must finish (blocked here)

Cusdis hosted (`cusdis.com`) returned **HTTP 521 (origin down)** while this was wired. Signup could not be completed from the agent. The UI and API client are in the repo; they activate as soon as `PUBLIC_CUSDIS_APP_ID` is set and the site is rebuilt.

Hosted Cusdis does **not** double-opt-in the comment itself. Email is required in our form (valid address). Optional “email me if there is a reply” sends Cusdis’s **confirmation link** (that is the only verification step they offer). New comments are **not public** until you approve them in the dashboard or via the Quick Approve link in the notification email.

### Click-path (Chrome, after cusdis.com is up)

1. Open [https://cusdis.com](https://cusdis.com) → **Start for free**.
2. Sign in with the private Google/GitHub account you already use for this work. Do **not** put a real name on the public journal; the dashboard login stays off-site.
3. **+ New website** (or **New project**):
   - Name: `Old Fashioned Doctor`
   - Domain: `oldfashioneddoctor.com`
4. Open the project. Copy the **App ID**:
   - From **Embed** / **Embeded Code**: the `data-app-id="…"` value, **or**
   - From the URL: `https://cusdis.com/dashboard/project/<APP-ID>`
5. In the project settings, turn **on email notification** for new comments (Quick Approve). That mail goes to your private login inbox, not the public site.
6. GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**:
   - Name: `PUBLIC_CUSDIS_APP_ID`
   - Value: the app id from step 4
   - Optional secret `PUBLIC_CUSDIS_HOST` only if you self-host; default is `https://cusdis.com`
7. Locally you can copy `.env.example` to `.env` and paste the same id, then `npm run build`.
8. Redeploy (push or **Actions → Deploy to GitHub Pages → Run workflow**). After that, each post shows the live form. Approve from the Cusdis dashboard (or the email link). **Do not** use “import from Disqus” and do **not** paste anything from `/workspace/ofd-archive/comments.md`.

Until step 6–8, readers see the comments heading and a disabled form, plus the X handle.

## Today’s cutover (Squarespace DNS → GitHub Pages)

Do **not** point DNS until a Pages deploy of this branch looks right. Keep Blogger on the domain until HTTPS on the new site is confirmed.

1. **Commit and push `main`** (do not force-push). This environment has no git `user.name` / `user.email` and `gh` is **not** logged in, so the commit was left uncreated. Stage is populated.
2. GitHub **Settings → Pages**: source **GitHub Actions** (`.github/workflows/deploy.yml` builds `dist` and injects `PUBLIC_CUSDIS_APP_ID` from secrets).
3. After a green Actions run, preview the Pages URL.
4. Squarespace DNS for `oldfashioneddoctor.com`:
   - Apex **A** records to GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Optional `www` **CNAME** to `<user>.github.io`
5. GitHub **Settings → Pages → Custom domain** = `oldfashioneddoctor.com`, wait for DNS check, enable **HTTPS**.
6. Keep Blogger live until `https://oldfashioneddoctor.com` serves this site with a valid certificate, then retire Blogger.
7. Add the Cusdis secret (above) and redeploy so comments submit.

This session did not change live DNS.

## Cover files

```
public/images/covers/near-death-experience.jpg
public/images/covers/whiskey-healthcare.jpg
public/images/covers/martini-monday.jpg
public/images/covers/barrel-aging.jpg
public/images/covers/health-weight-loss.jpg
public/images/covers/heres-to-21.jpg
public/images/covers/cocktail-fail.jpg
public/images/covers/misinformed-patients.jpg
public/images/covers/waiting-on-doctor.jpg
public/images/covers/rosh-hashana.jpg
public/images/covers/good-doctors.jpg
public/images/covers/medicare-plan.jpg
public/images/og-default.jpg
```

## Blocked on Homey

| Item | Status |
|---|---|
| Cusdis app id + email notify | Blocked: hosted origin was down; paste secret after signup |
| git commit identity | Blocked: no `user.name` / `user.email` here |
| `gh` auth / push | Blocked: `gh auth status` is logged out |
| Squarespace DNS | Intentionally not touched |
| GitHub Pages custom domain + HTTPS | After push + DNS |

## GitHub CLI

`gh` is **not authenticated**. Use `gh auth login` or an existing git remote. Do not force-push.
