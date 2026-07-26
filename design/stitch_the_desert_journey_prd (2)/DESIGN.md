---
name: Desert Alchemist
colors:
  surface: '#fff8f6'
  surface-dim: '#e0d8d7'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf2f0'
  surface-container: '#f4eceb'
  surface-container-high: '#eee6e5'
  surface-container-highest: '#e8e1df'
  on-surface: '#1e1b1a'
  on-surface-variant: '#504442'
  inverse-surface: '#33302f'
  inverse-on-surface: '#f7efee'
  outline: '#827472'
  outline-variant: '#d3c3c0'
  surface-tint: '#745853'
  primary: '#271310'
  on-primary: '#ffffff'
  primary-container: '#3e2723'
  on-primary-container: '#ae8d87'
  inverse-primary: '#e3beb8'
  secondary: '#77574d'
  on-secondary: '#ffffff'
  secondary-container: '#fed3c7'
  on-secondary-container: '#795950'
  tertiary: '#3b0002'
  on-tertiary: '#ffffff'
  tertiary-container: '#620006'
  on-tertiary-container: '#ff5d54'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#e3beb8'
  on-primary-fixed: '#2b1613'
  on-primary-fixed-variant: '#5b403c'
  secondary-fixed: '#ffdbd0'
  secondary-fixed-dim: '#e7bdb1'
  on-secondary-fixed: '#2c160e'
  on-secondary-fixed-variant: '#5d4037'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb4ac'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#93000e'
  background: '#fff8f6'
  on-background: '#1e1b1a'
  surface-variant: '#e8e1df'
  background-sand: '#F5F1E8'
  surface-aged-paper: '#EBE5D9'
  text-clay: '#5D4037'
  muted-dust: '#A1887F'
  accent-cinnabar: '#C62828'
  code-gold: '#8e7338'
typography:
  display-hero:
    fontFamily: EB Garamond
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Space Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.75'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-xs:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '400'
    letterSpacing: 0.15em
  drop-cap:
    fontFamily: EB Garamond
    fontSize: 72px
    fontWeight: '600'
    lineHeight: '0.8'
spacing:
  container-max: 700px
  margin-site: 24px
  gutter-md: 32px
  section-gap: 64px
  unit: 4px
---

## Brand & Style

The brand identity is "The Desert Journey"—a scholarly, meditative, and archival experience. It evokes the feeling of an explorer’s field journal or an ancient alchemical manuscript. The style blends **Brutalism** (raw layouts, sharp edges, monospaced fonts) with **Classical Editorial** (high-contrast serif headlines, drop caps, and meticulous white space).

The target audience consists of engineers and thinkers who appreciate depth over speed. The UI should feel tactile, aged, and intentional, using a "digital parchment" aesthetic that rejects modern rounded-corner trends in favor of a timeless, structured, and intellectual atmosphere.

## Colors

The palette is derived from natural earth pigments and archival materials. 

- **Primary (Deep Umber):** Used for headlines and critical interactive elements. It provides the high-contrast "ink" against the paper.
- **Secondary (Dried Clay):** The main body text color, softer than pure black to reduce eye strain on the warm background.
- **Tertiary (Cinnabar):** An accent color used sparingly for emphasis, warnings, or distinct call-to-actions, reminiscent of a seal or a marginal correction.
- **Surface (Aged Paper):** Used for containers, code blocks, and UI chrome to create subtle depth without relying on shadows.

A global **noise texture overlay** (SVG fractal noise at 4-5% opacity) must be applied to the entire viewport to simulate the grain of physical paper.

## Typography

The system utilizes a deliberate tension between the organic, literary feel of **EB Garamond** and the rigid, technical structure of **Space Mono**.

- **Serif Roles:** Reserved for titles, pull quotes, and drop caps. It should frequently use italic weights to emphasize the "handwritten" or "literary" quality.
- **Monospace Roles:** Used for all functional body text, labels, and metadata. This reinforces the "engineering journal" theme.
- **Drop Caps:** The first letter of major chapters should be styled as a large, floating serif character that spans roughly three lines of text.
- **Rhythm:** Line heights for body text are generous (1.75) to ensure high legibility and a sense of "air" on the page.

## Layout & Spacing

The layout follows a **Fixed-Width Editorial** model. The primary reading column is strictly constrained to a maximum width of 700px to maintain optimal character-per-line counts for monospaced text.

- **Asymmetric Grid:** On desktop, use a three-column grid where the center column holds the primary text, and the right column is used for marginalia (side notes).
- **Marginalia:** Footnotes and side notes should be aligned to the left border of the right-hand gutter, providing context without interrupting the vertical flow.
- **Horizontal Rules:** Use single-pixel lines in `muted-dust` to separate major logical sections (Header, Article, Footer).
- **Breaks:** Use geometric separators (e.g., em-dashes and symbols like the infinity sign) to denote the end of chapters.

## Elevation & Depth

This system avoids shadows entirely. Depth is communicated through **Tonal Layers** and **Structural Outlines**.

- **Base Layer:** `background-sand` (#F5F1E8).
- **Secondary Layer:** `surface-aged-paper` (#EBE5D9). This is used for code blocks, cards, and pull-out sections.
- **Dividers:** Fine 1px borders using `muted-dust` at 20-30% opacity create definition. 
- **Active States:** Instead of elevation, active states use color inversion (e.g., text becomes `background-sand` on a `primary` background) or subtle background shifts.

## Shapes

The shape language is strictly **Sharp (0px)**. There are no rounded corners in the design system. This reinforces the brutalist, architectural feel and the concept of paper edges.

- **Buttons & Inputs:** Must be perfect rectangles.
- **Images:** Should be contained within 1px borders. Apply a subtle grayscale or high-contrast filter to photography to match the archival aesthetic.
- **Selection:** Use a solid rectangular block for text selection with no rounding.

## Components

### Buttons
Buttons are text-based with a bottom border or fully contained rectangles. 
- **Default:** Transparent background, `primary` text, 1px border.
- **Hover:** Background fills with `primary`, text becomes `background-sand`.

### Code Blocks
Contained in a `surface-aged-paper` container with a 1px `muted-dust` border. A small uppercase label (e.g., "TYPESCRIPT") should sit in a box overlapping the top-right border.

### Marginalia (Side Notes)
Small text components in the right gutter. They feature a 1px left-border accent in `muted-dust` to visually anchor them to the line of text they reference.

### Pull Quotes
Centered, oversized serif text. They are bracketed by top and bottom 1px horizontal rules, often featuring a decorative "quote" icon centered on the line.

### Navigation
A sticky top bar that uses a 95% opaque background blur of the `background-sand` color to maintain context while scrolling. Links use the `label-xs` typography style.