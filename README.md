# Ming Lee — Developer Portfolio

A single-page, HUD/code-editor inspired developer portfolio. Pure HTML/CSS/JS — no build step, no framework, ready to host on GitHub Pages.

## Files

- `index.html` — page structure and content
- `styles.css` — all styling (colors, layout, animations)
- `script.js` — live clock, GitHub activity bars, active-section nav highlighting, scroll reveal

## Customize

- **Your info**: edit the text directly in `index.html` (name, tagline, stats, project cards, tech stack list).
- **CV download**: put your PDF at `assets/Ming-Lee-CV.pdf` (create the `assets` folder), or change the `href` on the "DOWNLOAD CV" button.
- **Links**: update the GitHub/LinkedIn/email `href`s in the header and the "VIEW PROFILE" / "GET IN TOUCH" buttons.
- **Colors**: all colors are CSS variables at the top of `styles.css` under `:root` (`--cyan`, `--green`, `--panel`, etc.) — change them there to re-theme the whole site.
- **GitHub stats**: the contribution bars and numbers (125 contributions / 23 repos) are static placeholders in `index.html` / `script.js`. Swap in real numbers, or wire up the GitHub REST API if you want them live.

## Deploy to GitHub Pages

1. Create a new repository (or use an existing one), e.g. `ming-lee.github.io` for a user site, or any name for a project site.
2. Add these three files (`index.html`, `styles.css`, `script.js`) to the repo root.
3. Commit and push:
   ```bash
   git init
   git add .
   git commit -m "Add portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
4. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `root`** → Save.
5. Your site will be live at `https://<your-username>.github.io/<repo-name>/` (or `https://<your-username>.github.io/` if the repo is named `<username>.github.io`) within a minute or two.

## Notes

- Fonts (Orbitron, Rajdhani, JetBrains Mono) load from Google Fonts via CDN — no local font files needed.
- Fully responsive down to mobile; respects `prefers-reduced-motion`.
- No external JS dependencies.
