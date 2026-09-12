# Halo Design System

A light, greyscale, product-render-led visual system for technology brands: soft white panels on a pale grey page, oversized light-weight grotesk headlines, and small pill chips floating over masked imagery.

## Where this came from

The system was derived from four landing-page design concepts supplied as images. **No codebase, Figma file, brand book, font binary or image asset was provided** — the screenshots are the only source.

| File | Surface shown |
|---|---|
| `uploads/original-ff82d5bab9b0af8fc4042352bc8edd4a.webp` | Full corporate site (pharmacy-robotics concept): masthead, hero, about split, awards marquee, benefit rows, project detail |
| `uploads/download (2).jfif` | Crop of the same site |
| `uploads/Tech Product Landing Design Concept.jfif` | Consumer product landing (portable energy station): statement blocks, ecosystem grid, solutions grid, spec section |
| `uploads/Your Daily Weather Forecast_ Check It Now!.jfif` | Consumer weather product: photographic hero, service carousel, mobile app section |

The concepts carry different names in the artwork. Because none of them is an identified client brand with supplied assets, this system is published under the neutral name **Halo** and reproduces the shared *visual language*, not any company's identity. Do not rebrand it without direction from the owner. **There is no logo**: the wordmark is the brand name set in display type (`Wordmark`); never draw a mark.

## Products represented

1. **Corporate / marketing site** — long-scroll, section-labelled, image-heavy. → `ui_kits/site/`
2. **Consumer product landing** — same language, warmer accent, spec dials and product renders. Covered by the same kit's ecosystem and solutions sections.
3. **Mobile app** — light gradient forecast UI with pill chips and card rows. → `ui_kits/app/`

---

## CONTENT FUNDAMENTALS

**Voice.** Plain, declarative, confident without being loud. Sentences are short and end in a full stop even when they are headline fragments: *"Providing stored energy to take anywhere." "Ever-growing ecosystem." "Charge at home."* The full stop is part of the style — headlines are statements, not labels.

**Person.** Company copy is **we** ("We help pharmacy teams spend less time counting pills"). Product copy addresses **you** ("Precise weather, precisely for you", "Designed so you can take power anywhere"). Never "our customers" or third person.

**Casing.** Three registers, used consistently:
- Headlines: sentence case, display weight ("Customised energy management.")
- Section eyebrows and numbered rows: UPPERCASE, letterspaced ("● ABOUT US", "STREAMLINE HEALTHCARE PROCESSES AND WORKFLOWS")
- Chips, buttons and micro-labels: **lowercase** ("read more", "view all specs", "details", "work with us", "efficiency")

**Emphasis.** Inline **bold** inside a paragraph carries the one phrase that matters — "assist healthcare workers in **repetitive tasks**", "accurate daily **weather data**". Never italics, never colour, never all-caps for emphasis.

**Numbers and units.** Figures are set large and bare: "500W", "0-80% in 50 min", "1-3kWh", "10°", "3.4 km/h". Units shrink next to the numeral rather than getting their own line.

**Micro-copy conventions.** Parenthetical descriptors under a hero, in lowercase: *(pharmacy automation system)*. Section indices as superscripts: `about[01]`, `OUR PURPOSE 01`. Calls to action are two words, lowercase, with a circular arrow: "read more →", "explore ↗", "more info".

**Emoji.** None. Not in any source. Weather glyphs are line icons, never emoji.

**Vibe.** Engineered calm. The page reads like a product spec sheet that has been art-directed — precise, spacious, quietly premium, with all the energy in the typography and the product photography rather than in colour or decoration.

---

## VISUAL FOUNDATIONS

**Palette.** Greyscale first. Page `#f6f6f5`, cards pure white, ink near-black `#0a0a09`. Accents appear once per surface and are always carried by the *photography*: warm ember (`--ember-500`) from product renders, cool sky (`--sky-400`) from the weather imagery. UI chrome itself is never coloured — no coloured buttons, no coloured borders, no status colours in the sources.

**Type.** A single neutral grotesk does everything. Display sizes run 44-104px at weight 300-400 with tracking around −0.04em and leading below 1.0 — headlines are set tight and stacked in two or three short lines. Uppercase headings switch to weight 600 at 30-32px. Body is 15px/1.45; captions 11-13px in grey. Mono appears only for timers, indices and coordinates.

**Layout.** Content runs almost to the viewport edge (12px page padding) with 12px gutters, so cards nearly touch. Asymmetric grids dominate: 2fr/1fr/1fr, 1fr/1fr splits with a hairline rule between halves. Section rhythm is eyebrow → oversized centred statement → dense grid. Full-bleed bands (the marquee, the numbered rows) break the grid deliberately.

**Backgrounds.** No gradients as decoration — the only gradients are photographic or the soft radial haze behind a circular panel. No patterns, no textures, no illustrations. Depth comes from product renders on white sweeps.

**Imagery.** Studio product renders and editorial photography, cool and desaturated, high-key, with soft shadows on white. Images are never bare rectangles: they are masked to a 24px rounded rectangle, a circle, a pill, or an organic blob (`--blob`). Portraits get the blob; hardware gets the rounded rectangle; hero images get an extra-large 32px radius or an asymmetric bottom-rounded sweep.

**Cards.** White, 24px radius, 24px padding, no border, and usually **no shadow** — separation comes from tone against the grey page. Shadow (`--shadow-md`) appears only when a card genuinely floats over imagery.

**Shadows.** Extremely soft, low-opacity, large-radius. `--shadow-float` (0 10px 30px / .10) is the strongest value in the system.

**Transparency and blur.** Used only over photography: frosted pills (`--glass-fill` + 14px blur) for nav clusters, floating labels and overlay toolbars. Over a photo, white text is protected by a bottom scrim gradient (`--scrim-bottom`), never by a solid capsule; text on a light card is protected by a small frosted capsule instead. Never blur over flat colour.

**Borders.** Hairline `1px` in `--grey-200` for structural rules (section dividers, split columns) and `inset 0 0 0 1px` for outline pills and hairline circles. No thick borders, no coloured borders, no left-accent borders.

**Corner radii.** 6/10/16/24/32 plus pill and circle. Every interactive control is a pill or a circle — there are no square buttons anywhere in the sources.

**Iconography inside layout.** Circular icon buttons (28/38/52px) are the navigation vocabulary: menu, search, prev/next, and the recurring "explore ↗" disc that overlaps the corner of an image.

**Motion.** Restrained. Long soft easing (`cubic-bezier(.16,1,.3,1)`), 220ms for state changes, 700ms for reveals. One constant-speed linear marquee. Fades and small translations only — no bounce, no spring, no parallax gimmicks.

**Hover.** Controls lift 1px and circular buttons scale to 1.06; list rows shift to a light grey fill; inactive filter chips return to full opacity. Colour does not change on hover.

**Press.** Scale to 0.97, no colour change.

**Disabled / inactive.** Opacity, never greying out: inactive filter chips sit at 38% opacity with their fill intact.

**Fixed elements.** A frosted app-download or cookie strip pinned bottom-left; a vertical social-icon rail pinned right; a back-to-top circular button bottom-right; a site-URL pill bottom-right of the hero. All float over content, all pill-shaped.

---

## ICONOGRAPHY

The sources contain **no extractable icon set** — they are flattened images. What they show is a consistent style: monoline, ~1.5-1.75px stroke, rounded joins, no fill, no duotone, drawn at 13-22px and set in circles far more often than left free.

- **Substitution (flagged):** the system links **Lucide** (`unpkg.com/lucide@0.460.0`) from CDN as the closest match for stroke weight and geometry. Every icon in the components and kits is a Lucide name. Swap in the real set when it is supplied.
- **The arrow is the brand's icon.** Three forms recur: `arrow-up-right` (explore / external), `arrow-right` (read more / next), and an oversized black `arrow-up-right` used as a graphic element inside hero imagery.
- Icons live inside circles: a 26px knob at the end of a button, a 28-52px `IconButton`, or a hairline circle for counters and spec dials.
- Small filled dots (5-6px) act as punctuation in chips, eyebrows and buttons ("● ABOUT US", "work with us ●").
- **No emoji, ever.** No unicode glyphs used as icons apart from the `/` separator in the marquee and superscript index brackets.
- No icon font and no sprite sheet is used; icons are inline SVG produced by Lucide at runtime.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link; `@import` list only.
- `thumbnail.html` — homepage tile.
- `SKILL.md` — Agent-Skill wrapper for use outside this project.
- `readme.md` — this file.

**Tokens** (`tokens/`): `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`.

**Foundation cards** (`guidelines/`): neutral ramp, accents, surfaces, text tones, display scale, headings, body & caption, labels & mono, spacing scale, grid in use, corner radii, media masks, shadows, glass & scrim, motion.

**Components**
- `components/core/` — **Button**, **IconButton**, **Chip**, **SectionLabel**, **NumberBadge**, **Wordmark**, **Icon**
- `components/surfaces/` — **Card**, **MediaFrame**, **GlassPanel**, **StatDial**
- `components/navigation/` — **NavBar**, **Ticker**, **ListRow**, **FloatingDock**

Each directory carries a `@dsCard` HTML specimen; each component has a `.d.ts` contract and a `.prompt.md` usage note.

**Intentional additions** (not literally named in the source, added because the language requires them):
- **Icon** — a wrapper for the substituted Lucide set, so glyph usage stays consistent.
- **Wordmark** — the brand name as type, standing in for the absent logo.
- **StatDial**, **NumberBadge**, **Ticker**, **FloatingDock**, **ListRow** — each is a literal, repeatedly-used element in the sources, named here for the first time.

**UI kits**
- `ui_kits/site/` — corporate / product marketing site, three interactive views.
- `ui_kits/app/` — mobile weather app, two screens plus feature rail.

## Known gaps

- **No fonts.** Archivo (Google Fonts) substitutes for the Helvetica-class grotesk in the artwork; JetBrains Mono substitutes for the mono. Supply real binaries and replace `tokens/fonts.css`.
- **No imagery.** Photography and product renders cannot be extracted from screenshots; `MediaFrame` renders tonal placeholders everywhere.
- **No icon assets.** Lucide substitutes; see ICONOGRAPHY.
- **No logo.** By design — see above.
- **No dark theme, no form controls, no data display.** None appear in the sources, so none were invented.
