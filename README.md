# Venus Productions — website

The Venus Productions homepage (film, television and live entertainment, Sri Lanka & Australia), built with **Vite + React**.

## Run it locally

Requires Node.js 18 or newer.

```sh
npm install
npm run dev       # development server at http://localhost:5173
```

## Build for production

```sh
npm run build     # outputs the static site to dist/
npm run preview   # serves dist/ locally to check the build
```

`dist/` is a plain static site (HTML, CSS, JS and images). Upload its contents to any web host, or publish it with GitHub Pages. Asset paths are relative, so it also works from a sub-folder.

### GitHub Pages

1. Run `npm run build`.
2. Publish the `dist/` folder, for example with a GitHub Actions workflow that uses `actions/upload-pages-artifact` (path: `dist`) and `actions/deploy-pages`. Or push `dist/` to a `gh-pages` branch.
3. In the repository's **Settings → Pages**, choose that source.

## Project layout

```
index.html              page shell, fonts, meta tags
public/images/          logos, curtains, posters, video thumbnails, mandala art
src/
  main.jsx, App.jsx     entry point and page order
  data.js               shows, videos, stats and links (edit content here)
  styles.css            all styles; desktop first, mobile rules at ≤ 760px
  hooks/
    useHeroScroll.js    scroll-driven hero: closed curtains → reveal → text zooms away
    useCountUp.js       count-up for the highlight numbers
    useMediaQuery.js
  components/           one file per section (Header, Hero, About, … Footer)
```

## The hero

On desktop the hero is a pinned stage. It loads with the velvet curtains closed and swaying, with the gold logo on top. As you scroll, the logo rises, the curtains part to reveal the headline, then the text zooms toward the viewer and fades before "About us" scrolls in. Visitors who prefer reduced motion get no sway or zoom. On phones (≤ 760px) the hero is a simple stacked layout with narrow curtains at the sides.

## Still to fill in

Text in square brackets is placeholder copy:
- Teledrama and Red Soil descriptions
- Red Soil teaser and behind-the-scenes images
- CEO photo
- Address, email, phone and ABN
- Artist names for Sathsara Miyasiya

The contact form doesn't send yet. Connect it to a form service (Formspree, Netlify Forms) or your own backend in `src/components/Contact.jsx`.
