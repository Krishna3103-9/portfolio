# Krishna Kumar Maurya — Portfolio

**Live:** <https://krishna3103-9.github.io/portfolio/>  
**Repository:** <https://github.com/Krishna3103-9/portfolio>

A static portfolio site for a UI/UX & Product Design Intern role: hand-written HTML, CSS and
vanilla JavaScript. No build step, no framework, no dependencies — open `index.html` and it runs.

**Live content:** three case studies (IBM learning paths, AI Company Simulator, AI Email Assistant),
two internships, education, certifications and a contact section with a copy-to-clipboard email.

---

## Run it locally

Because the site uses `fetch`-free ES5+/ES2017 JavaScript and relative assets, you can simply open:

```
index.html
```

…or serve it (recommended, so the résumé download and the browser history API behave exactly as
they will in production):

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

Then visit <http://localhost:8080>.

---

## Structure

```
portfolio/
├── index.html                 # single page: hero, work, approach, experience, toolkit, contact
├── favicon.svg                # monogram mark
├── netlify.toml               # Netlify build + redirect rules
├── vercel.json                # Vercel config
├── robots.txt
└── assets/
    ├── Krishna_Kumar_Maurya_Resume.pdf   # one-page ATS-friendly résumé
    ├── css/style.css          # design tokens → base → components → sections → responsive
    ├── js/main.js             # vanilla JS: reveals, tabs, case-study overlay, nav, toast
    └── img/
        ├── og-cover.html       # source for the social share card
        └── og-cover.png        # 1200×630 Open Graph / Twitter card
```

---

## Deploy

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir .
```
`netlify.toml` is already configured. No build command is required.

### Vercel
```bash
npm i -g vercel
vercel --prod
```

### GitHub Pages
Push the folder to a repository and enable **Settings → Pages → Deploy from a branch → `/ (root)`**.
The site is entirely relative-path, so it works from a project sub-path (`/repo-name/`) without edits.

### Any static host
Upload the folder as-is. There is nothing to compile.

---

## Notes

- **No JavaScript dependencies.** `assets/js/main.js` is plain ES2017 and runs in every current browser.
- **Progressive enhancement.** With JavaScript disabled the page still reads as a complete résumé:
  content, case-study text and navigation links all live in the HTML.
- **Accessibility.** Keyboard-operable console tabs and case-study overlay, focus trapping, focus
  restoration, `aria-hidden` state on both dialogs, skip link, visible focus rings, and AA contrast
  (all body text ≥ 4.5:1).
- **Reduced motion.** `prefers-reduced-motion: reduce` disables the reveal animations and the
  auto-advancing hero console.
- **Privacy.** No trackers, no analytics, no cookies, no third-party requests other than the Google
  Fonts stylesheet. Self-host the fonts if you need a fully offline-capable page.

---

## Editing content

- **Projects / case studies** — the three case studies live in the `PROJECTS` object at the top of
  `assets/js/main.js`. Each entry drives the overlay, the flow diagram, the decision cards and the
  "next case study" link.
- **Copy and sections** — `index.html`, in document order.
- **Colours and type** — the `:root` block at the top of `assets/css/style.css` holds every token
  (`--paper`, `--ink`, `--blue`, `--lime`, `--serif`, `--mono`, …).
- **Social card** — edit `assets/img/og-cover.html`, then re-render it at 1200 × 630.
- **Résumé** — `assets/Krishna_Kumar_Maurya_Resume.pdf`, one page, ATS-friendly (text-based, not an image).

---

## Social sharing

The `<head>` already carries Open Graph and Twitter Card tags pointing at `assets/img/og-cover.png`.
The paths are **relative**, so they resolve correctly from any host, any domain and any
sub-path (including GitHub Pages project sites).

If you later attach a custom domain and want maximum compatibility with scrapers that only
accept absolute URLs, change the `og:image` / `twitter:image` values to
`https://your-domain.com/assets/img/og-cover.png`. Nothing else needs to change.

---

## Verification

The shipped build was checked with headless Chrome (DevTools Protocol) at 1440 / 1280 / 768 /
390 / 360 px:

| Check | Result |
| --- | --- |
| Horizontal overflow | 0 px at every breakpoint |
| Console errors / failed requests | 0 / 0 |
| Images without `alt` | 0 |
| Internal anchors that do not resolve | 0 |
| External links missing `rel="noopener"` | 0 |
| Heading order | H1 → H2 → H3, no skipped levels |
| Case-study overlay | `aria-hidden`, `aria-modal`, focus trap, focus restore, deep links and back/forward all correct |
| Mobile menu | Focus moves to the close button, `Escape` closes, focus returns to the toggle |
| Lighthouse (desktop) | Accessibility 100 · Best Practices 100 · SEO 100 |
| Résumé PDF | 1 page, A4, selectable text |
