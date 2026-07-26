# Pilgrim's Journal

A minimal personal website built with Astro, styled after the "Archives" design system, with Keystatic for local content editing.

## Quick start

```bash
npm install
npm run dev
```

- Site: http://localhost:4321
- Keystatic admin (dev only): http://localhost:4321/keystatic

## Writing content

1. Run `npm run dev`
2. Open `/keystatic` in your browser
3. Create or edit entries in **Writings** or **Works**
4. Preview on `/writings` or `/works`
5. Commit the generated `.md` files and push to GitHub

Content is stored as Markdown in:

- `src/content/writings/`
- `src/content/works/`

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

The site deploys to **https://kaleab-ayenew.github.io/** from the `Kaleab-Ayenew.github.io` repository on push to `main`.

## Customize

- Update contact links in `src/pages/signal.astro` and `src/components/Footer.astro`
- Set your `site` URL in `astro.config.mjs` or via the `SITE_URL` env var in CI
