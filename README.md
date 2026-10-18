# Venus Productions — website design

Homepage design for Venus Productions (film, television and live entertainment, Sri Lanka & Australia).

The live, editable design is a Claude design canvas:
https://claude.ai/artifact/KRgg55A6rwjybquzL4Kgsq

## What's here

- `design/project/` — the canvas source: one `.dc.html` file per artboard plus `canvas.json` (layout and pages).
  - `Main.dc.html` — desktop homepage
  - `Mobile.dc.html` — mobile homepage
  - `Hero*.dc.html`, `Art*.dc.html`, `HeroArt*.dc.html`, `HeroShell.dc.html`, `VenusSection.dc.html` — earlier option and preview boards
- `design/assets/` — source images used by the design (logos, posters, curtains, video thumbnails, line art).

Images in the `.dc.html` files are referenced as `/_blob/<id>`; these are assets stored in the canvas itself.
The originals are in `design/assets/`.

## Rolling back

Each approved milestone is tagged. To restore a version of the design files:

```sh
git checkout v1-hero-approved -- design/
```

then republish the restored files to the canvas.
