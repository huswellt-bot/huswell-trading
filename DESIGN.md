# Design.md — Project Design Specification (Brand Layer)

**Priority:** This file OVERRIDES `UNSLOP.MD` where they conflict. Follow it for all UI work.

---

## 1. Brand Essentials

- **Brand Name:** Huswell Trading
- **Industry:** Premium packaging manufacturer and box convertor — rigid boxes, offset & digital print, corrugated packaging, shredded paper fillers. Serving retail, e-commerce, and corporate brands across the Philippines since 2015.
- **One-Line Brand Story:** "Packaging that mirrors the quality of the product inside — engineered in a Quezon City factory, trusted by brands nationwide."
- **Design Model:** UNIQLO / LifeWear-clean. Near-white ground, black text, hairline structure, photography-led heroes, and a single red accent used strictly for interactive intent. Calm at scale: dense grids, generous whitespace, zero decoration that doesn't earn its pixels.
- **Tone of Voice:** Direct, confident, pragmatic. Numbers and facts over adjectives. No fluff, no exclamation marks. B2B voice: we don't market to readers, we answer buyers.
- **Audience:** Brand owners, procurement, e-commerce sellers, trade retailers, corporate/events clients.

---

## 2. Color Palette

The regime is *one* system — a white-first ground with a single charcoal anchor. No alternation of heavy dark sections: only the final CTA band is dark, and it never contains small secondary text below 14px that fails contrast. The footer is light (canvas + hairline), closing the page like any Uniqlo footer.

**Primary (light / 60% of any screen):**

| Role          | Token         | Hex       | Usage                                             |
| ------------- | ------------- | --------- | ------------------------------------------------- |
| Canvas        | `--canvas`    | `#F5F6FC` | Page ground, primary sections                           |
| Canvas alt    | `--canvas-alt`| `#EDEFF5` | Alternating section bands (odd/even rhythm across light sections) |
| Surface       | `--surface`   | `#FFFFFF` | Cards, tiles, wells, image frames, dropdowns      |
| Ink           | `--ink`       | `#17171D` | Headings and strong text on light (≈16:1)         |
| Mute          | `--mute`      | `#5C5C66` | Secondary text, metadata, captions on light (≈5.9:1) |
| Line          | `--line`      | `#E3E4EC` | 1px hairlines, dividers, tile borders (non-text)  |

**Dark anchor (final CTA band only — the footer is light):**

| Role            | Token         | Hex       | Usage                                      |
| --------------- | ------------- | --------- | ------------------------------------------ |
| Canvas          | `--canvas-dark` | `#1B1B21` | CTA band ground                          |
| Surface         | `--surface-dark`| `#24242C` | Dark elevated blocks                       |
| Grease          | `--grease`    | `#F1F1F6` | Headings on dark (≈14:1)                   |
| Mute            | `--mute-dark` | `#A9A9B4` | Secondary text on dark (≈7:1)              |
| Line            | `--line-dark` | `#3E3E48` | Hairlines on dark                          |

**Accent (5% of any screen — interactive and display intent only):**

Red is the only chromatic color. Never use it for body copy or long text.

| Token            | Hex       | Usage                                                        |
| ---------------- | --------- | ------------------------------------------------------------ |
| `--accent`       | `#DB4439` | Brand red. Large text only (≥24px, 3:1 on white), hairlines, underlines, focus rings, decorative flourishes |
| `--accent-hover` | `#C22B20` | Interactive red (the "deep red"). ALL clickable text ≤14px, icons, CTA button fills — white text on it = 5.5:1 |

**Rules:**
- Text on text must pass WCAG AA: 4.5:1 body, 3:1 large. Approved body pairs: `ink` on `canvas`/`surface`, `grease`/`mute-dark` on `canvas-dark`, `white` on photography and on `accent-hover` fills.
- `accent` is decoration; `accent-hover` is interaction. Never put `accent` on a button or a link under 14px. Never use `accent` for body paragraphs.
- Dark never interrupts the light rhythm outside the CTA band and footer.
- White (`#FFFFFF`) may overlay photography for text/CTAs over a scrim (≥ 40% black gradient).
- Never introduce colors outside this table without updating this file.

## 3. Typography

Single family: **Space Grotesk** (`next/font/google`), 400/500/600.

| Role | Weight | Size | Line-Height | Tracking |
| ---- | ------ | ---- | ----------- | -------- |
| Micro | 500 | 0.75rem (12px) | 1.3 | +0.12em, uppercase |
| Overline | 500 | 0.75rem | 1.3 | +0.18em, uppercase |
| H1 (display) | 600 | clamp(2.25rem, 4.5vw, 4rem) | 1.02 | -0.025em |
| H2 | 600 | clamp(1.75rem, 3.2vw, 2.5rem) | 1.08 | -0.02em |
| H3 (tile title) | 500 | 1.25rem | 1.25 | -0.01em |
| Body | 400 | 1rem (16px) | 1.6 | 0 |
| UI (buttons, nav) | 500 | 0.8rem (12.8px) | 1 | +0.14em, uppercase |

**Rules:**
- Display heads are compact and confident (600, tight tracking). Uppercase only for micro-labels, nav, and buttons.
- Long-form copy 45–75 chars/line (`max-w-2xl`–`max-w-3xl`).
- Numerals in stats/prices stand alone at 600 weight.

## 4. Spacing, Grid & Rhythm

| Token | Value |
| ----- | ----- |
| Section Y-padding | `py-20 md:py-28` |
| Container | `max-w-6xl` (1152px); editorial prose `max-w-3xl` |
| Tile gutter | `gap-x-6 gap-y-12` (dense, Uniqlo product-grid feel) |
| Page gutter | `px-5 / md:px-8` |
| Border system | 1px hairline everywhere (`border-line` / `border-line-dark`); no heavy strokes, no shadows |

**Rhythm:** photo hero → light sections alternate `canvas` / `canvas-alt` like paired white bands → dark CTA band → light footer. Exactly one dark surface per page. Top of section = `border-t border-line` hairline.

**Grid:**
- Section header pattern: `Overline / H2 / hairline` — two-column when paired with a link ("View all →").
- Editorial rows: 12-col, 7/12 text + 4-5/12 media, or 6/6.
- No ghost numerals, no decorative giant text. Numbers exist as small red step labels (Process) and stat values only.
- Radius lock: `rounded-none` — no pill, no squircle. Only the video frame may use `rounded` (6px).

## 5. Components

| Component | Spec |
| --------- | ---- |
| Buttons | Square (`rounded-none`), `inline-flex gap-2 px-6 py-3 text-ui uppercase`. **Solid** = `bg-accent-hover text-white`, hover deepens to `#B32A1F`, `active:translate-y-px`. **Line (light)** = `border-ink/25 text-ink`, hover `bg-ink text-white`. **Line (dark)** = `border-grease/40 text-grease`, hover `bg-grease text-canvas-dark`. Focus ring `accent`. Disabled `opacity-50`. |
| Nav | Sticky white bar (`bg-canvas/95 backdrop-blur`), `border-b line`. Links: `text-micro uppercase text-ink`, active `text-accent-hover`. Dropdowns: white `surface` panels with hairline borders. "Get a free quote" = solid red. Mobile menu: white sheet, ink links, red active. |
| Hero | Full-bleed photography with a ≥40% black scrim: white heading + `white/85` body + solid red CTA (+ line CTA). No ghost numeral. |
| Section header | Micro overline (red `accent-hover` only when paired with a link CTA; else mute) + H2 ink + body mute. Bottom hairline when closing a section. |
| Product / project tile | Bordered square (`border line bg-surface`), cover photo, name (ink H3), one-line meta (mute), red arrow; hover: frame darkens to `line`+ title stays, arrow shifts `translate-x-1`. |
| Category chooser | Uniqlo "search by category" grid: text-primary tiles — label + count, hover red underline, arrow red. |
| Process | Hairline-divided row/col of white tiles; step number = `micro-label text-accent-hover`; title ink, body mute. |
| FAQ | `details/summary`, hairline rows, `+` toggles, open-state title `text-accent-hover`. Answers are images with captions. |
| Testimonials | One quote at a time, H2 ink, hairline prev/next buttons, mute meta; no quote-mark decoration. |
| Footer | Light: `bg-canvas`, `border-t border-line`. Logo bare (dark logo reads on light). Labels `mute`, links `ink` hover `accent-hover`, legal row `mute`. |
| Forms | `bg-transparent` on `canvas`, `border-b line` only, focus `accent`, placeholder `mute`. |
| Video | Bordered frame (canvas bg), poster first, play overlay = 40% black scrim + circle play (white border, red fill on hover). |
| Lightbox | Full-screen `black/95` overlay for project/filler photos. Image `object-contain` centered, square white-line ‹ › buttons + × close (white fill on hover), caption = project name + `n / m` counter bottom-center, keyboard ← → Esc, body scroll locked, `role="dialog"`. |

## 6. Copy Tone

- Short sentences. Factual: "Offset & digital box printing — from small runs to thousands."
- Numbers over adjectives: "20 filler colors", "est. 2015", "66 unique projects".
- Active voice. No exclamation marks. No emoji. No slogans.
- Real customer text on testimonials.

## 7. Overrides vs. UNSLOP.MD

This brand file wins on conflict:
- Single-font system (Space Grotesk) — no serif pairing.
- Radius: `rounded-none` covers everything except the 6px video frame.
- Motion stack: `transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]` everywhere interactive.
- White-first rhythm: no dark hero, no dark process slabs — dark exists only in the CTA band + footer.
- Red duality rule (§2): decorative `accent` vs interactive `accent-hover` — binding for contrast.
- No ghost numerals, no decorative text.
- If a section is empty here, fall back to `UNSLOP.MD`.