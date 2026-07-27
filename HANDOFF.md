# Handoff: Advanced Action Sports — Jekyll Site

## Project Overview

Rebuild of https://www.advancedactionsports.com from Wix to a static Jekyll site. The site is an action sports venue (airsoft, paintball, VR, etc.) with two MA locations.

## Architecture

- **Framework**: Jekyll (static site generator, chosen for simplicity, stability, no Node dependency)
- **Hosting**: GitHub Pages via `amelv/advanced-action-sports` repo
- **Base URL**: `/advanced-action-sports`
- **Theme**: Purple (`#7440a3` primary, `#9b6fcc` light, `#5c2d80` dark), dark backgrounds with texture overlays

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `main` | Production — current Jekyll base after migration |
| `purple` | Purple theme branch (merged from purple-lab) |
| `purple-lab` | Active development branch (all work done here first) |

All three branches are at the same commit (`2a32a49`).

## File Structure

```
/
├── _config.yml                 # Jekyll config (baseurl, defaults)
├── _layouts/
│   └── default.html            # Main layout — all CSS, head, HTML shell
├── _includes/
│   ├── header.html             # Logo + nav + dropdown + menu-toggle
│   ├── footer.html             # Two locations + social links
│   ├── drawer.html             # Mobile slide-out nav
│   └── page-hero.html          # Reusable hero section (param: hero_title, hero_btn_url, hero_btn_text, hero_bg_img)
├── assets/
│   └── images/                 # All site images (logos, textures, hero slides, cards)
├── index.html                  # Homepage — hero slideshow + activity grid + locations
├── airsoft/index.html
├── paintball/index.html
├── gel-blaster/index.html
├── nerf-battles/index.html
├── virtual-reality/index.html
├── milsim/index.html
├── memberships/index.html
├── jobs/index.html
├── rules/index.html
└── .gitignore                  # Excludes _site/, *.bak
```

## Page Patterns

Most subpages follow this section order:
1. `{% include page-hero.html ... %}` — hero banner with title and CTA button
2. `<section class="page-content">` — unique content (h2/p combos or custom layouts)
3. `<section class="page-actions">` — action button bar
4. `<section class="page-faq">` — FAQ accordion (present on all pages except rules)

**Exceptions:**
- **Homepage** — unique sections (hero slideshow, activity grid, locations, email CTA)
- **VR** — unique sections (vr-intro, vr-escape with escape-grid, vr-games with games-grid, vr-hardware with hardware-grid)
- **Memberships** — tier cards (m-tier-grid) + benefits grid (benefits-grid)
- **Rules** — no FAQ section, long rule lists with pdf-notice

## CSS Architecture

All CSS lives in `_layouts/default.html` inside a `<style>` tag. Uses CSS custom properties (`:root`) for theming. Texture backgrounds use `url()` with `relative_url` filter for correct paths from any page depth.

Key texture assets: `tex-carbon-fibre.png`, `tex-asfalt-dark.png`, `tex-dark-leather.png`, `tex-gun-metal.png`

## Key Design Decisions

- Nav links use `{{ site.baseurl }}/airsoft/` etc. for Jekyll directory-style paths
- Asset paths use `{{ 'assets/images/file.webp' | relative_url }}` in CSS, `{{ site.baseurl }}/assets/images/` in HTML
- All pages are content-only (front matter + sections) — the layout provides the HTML shell
- Page-hero include supports optional `hero_bg_img` parameter for pages with hero background images (paintball, gel-blaster, nerf)
- Jobs page uses `hero_btn_target="self"` for the mailto link

## What Needs to Be Done Next

### Phase 1: Content Audit (page by page)
Compare each page against the live Wix site at https://www.advancedactionsports.com and ensure all content, links, pricing, descriptions, and details are accurate. Pages to audit in order:

1. Homepage — hero text, activity grid labels, locations/hours, email CTA
2. Airsoft — content paragraphs, FAQ answers, action button URLs
3. Paintball — content, FAQ, action button URLs
4. Gel Blaster — content, FAQ, action button URLs
5. Nerf Battles — content, FAQ, action button URLs
6. VR — escape room details, game library, hardware descriptions
7. Milsim — content, FAQ
8. Memberships — pricing tiers, benefits, FAQ
9. Jobs — job listings, FAQ
10. Rules — safety, equipment, gameplay, conduct lists

### Phase 2: Polish
- Remove unused CSS from default layout
- Verify all image assets exist and match what's referenced
- Test responsive breakpoints
- Check color contrast meets WCAG AA
- Set `robots: "index"` when ready for production

## Development Commands

```bash
jekyll serve              # Dev server at http://127.0.0.1:4000/advanced-action-sports/
jekyll build              # Static build to _site/
git push origin <branch>  # Deploy (GitHub Pages auto-builds from main)
```

## Git Workflow

1. Work on `purple-lab` branch
2. Commit changes
3. Merge into `purple` then `main`:
   ```bash
   git checkout purple && git merge purple-lab
   git checkout main && git merge purple
   git push origin main purple purple-lab
   ```

## Known Issues / Gotchas

- Must use `jekyll serve` (not open HTML files directly) — baseurl paths won't resolve on `file://`
- `_site/` is gitignored — rebuilt fresh on each deploy
- The `.gitignore` already handles `_site/` and `.bak` files
- Default layout includes two LD+JSON schema blocks for LocalBusiness and WebSite