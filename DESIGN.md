---
version: alpha
name: Soundings
description: Personal music portfolio for Adrian Furlan — homepage listening, a releases catalog, an about page, and an outbound blog link.

colors:
  primary: "#4D7298"
  primary-strong: "#33547D"
  secondary: "#77A6B6"
  tertiary: "#B3D89C"
  surface: "#F8FBF4"
  surface-hover: "#EEF4E8"
  surface-live: "#D0EFB1"
  on-surface: "#142227"
  on-surface-muted: "#566D78"
  border: "#9DC3C2"
  error: "#924229"

typography:
  display:
    fontFamily: Newsreader
    fontSize: 80px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: -0.03em
    fontVariation: "'opsz' 72"
  headline-lg:
    fontFamily: Newsreader
    fontSize: 50px
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: -0.025em
    fontVariation: "'opsz' 48"
  headline-md:
    fontFamily: Newsreader
    fontSize: 38px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.015em
  track-title:
    fontFamily: Newsreader
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.3
  body-lg:
    fontFamily: Newsreader
    fontSize: 19px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Archivo
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.005em
  label-caps:
    fontFamily: Archivo
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.12em
    fontFeature: "'case' 1"
  label-md:
    fontFamily: Archivo
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.005em
  data-time:
    fontFamily: Archivo
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1
    letterSpacing: 0.01em
    fontFeature: "'tnum' 1"
  data-catalog:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0.06em
    fontFeature: "'tnum' 1, 'case' 1"
  caption:
    fontFamily: Archivo
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.45

rounded:
  none: 0px
  sm: 2px
  full: 9999px

spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  xxl: 96px
  gutter: 24px
  margin: 40px
  columns: 12

components:
  page:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
  track-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.track-title}"
    rounded: "{rounded.none}"
    padding: "{spacing.md}"
  track-row-hover:
    backgroundColor: "{colors.surface-hover}"
    textColor: "{colors.on-surface}"
  track-row-playing:
    backgroundColor: "{colors.surface-live}"
    textColor: "{colors.on-surface}"
  transport:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
    size: 44px
  transport-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.surface}"
  scrubber-track:
    backgroundColor: "{colors.border}"
    height: 2px
    rounded: "{rounded.none}"
  scrubber-elapsed:
    backgroundColor: "{colors.secondary}"
    height: 2px
    rounded: "{rounded.none}"
  time-readout:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.data-time}"
  chip-format:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs}"
  release-entry:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.none}"
    padding: "{spacing.lg}"
  release-meta:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.data-catalog}"
  nav-link:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-caps}"
  nav-link-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-strong}"
    typography: "{typography.label-caps}"
  link-external:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-strong}"
    typography: "{typography.body-md}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.surface}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary-strong}"
    typography: "{typography.label-caps}"
    rounded: "{rounded.sm}"
    padding: "{spacing.md}"
  divider:
    backgroundColor: "{colors.border}"
    height: 1px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  input-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  tooltip:
    backgroundColor: "{colors.on-surface}"
    textColor: "{colors.surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
---

# Soundings

## Overview

A personal music portfolio: you land on it, you press play without deciding to, and the
rest of the site is a catalog you can browse while the audio keeps running. Four surfaces
— a homepage that is mostly a playable track list, a releases catalog, an about page, and
an outbound link to a blog hosted elsewhere.

The visitor is someone who followed a link from a release, a show listing, or a friend.
They are here for two minutes, on a phone, deciding whether to keep listening. The design
has one job in that window: make the tracks obviously playable and get out of the way.
Everything that isn't a track, a title, or a play control is subordinate.

The register is **editorial print, in a marine palette** — the structural discipline of a
record sleeve's inner spread (large serif display, hairline rules, asymmetric columns,
wide outer margins, zero radius) carrying a soft green-to-blue color ramp. The pairing is
deliberate and load-bearing in both directions. Left alone, this palette drifts toward
wellness-brand calm and becomes forgettable; the rigid editorial armature is what keeps it
from going soft. Left alone, the editorial structure is austere; the palette is what makes
it feel like something you'd want to sit inside for an album's length.

**This is a light-mode-only system, and that is a decision, not an omission.** All five
brand colors sit between L 0.54 and L 0.91 in OKLCH. On a dark ground the greens turn
sickly and Rich Cerulean falls below the surface entirely. Building a dark variant would
mean replacing the palette, so the system commits to paper instead. Most music sites are
dark; being light is the cheapest distinctiveness available here.

**What this system gives up:** dark mode, information density, shadows of any kind, any
sense of speed, and a second accent color. It is a reading-and-listening aesthetic, not a
working one.

## Colors

The five brand colors were supplied as a set, and they turned out to have a structure
worth building on. Converted to OKLCH, lightness descends monotonically — 0.914, 0.840,
0.789, 0.697, 0.540 — while hue sweeps cleanly from green at 130° to blue at 250°. That is
precisely how a **bathymetric chart** encodes water depth: pale green in the shallows,
darkening through teal into deep blue as the seabed drops away.

So the palette is treated as a depth scale, and every color's job derives from that one
idea. **Shallow means near, present, happening now. Deep means committed, structural,
actionable.** A designer inheriting this file and needing a color that isn't tokenized
should ask where the element sits on that scale, not which color looks nice.

- **Sleeve (`surface`, #F8FBF4)** — a faint celadon-white extrapolated one step above the
  palette's light end, carrying a trace of its green (OKLCH chroma 0.010 at hue 126). Not
  `#FFFFFF`, which would sit outside the family and read as a hole in the page.
- **Shoal (`surface-live`, #D0EFB1)** — the shallowest green, and the single most important
  color in the system. It washes the **currently playing** track row and nothing else. This
  is how the site indicates state without a spinner, a bar, or an icon: the row you're
  hearing is the row that's in shallow water.
- **Foam (`surface-hover`, #EEF4E8)** — a derived half-step between sleeve and shoal, so
  hovering a track row reads as a preview of the playing state rather than an unrelated
  effect.
- **Celadon (`tertiary`, #B3D89C)** — classification, not action. Format and genre chips
  (`LP`, `SINGLE`, `LIVE`) sit on it. Adjacent to shoal on the ramp, so a tagged row and a
  playing row are legibly related but never confusable.
- **Light Blue (`border`, #9DC3C2)** — every hairline in the system: rules between tracks,
  the underline beneath section heads, input borders, and the unplayed portion of the
  scrubber. It is structure, never content.
- **Steel Blue (`secondary`, #77A6B6)** — the _elapsed_ portion of the scrubber, and any
  meter or waveform showing consumed time. This gives the scrubber a genuinely nice
  property: as a track plays, the bar descends the depth ramp from light blue into steel
  blue. Progress is rendered in the palette's own logic rather than bolted on.
- **Rich Cerulean (`primary`, #4D7298)** — the deepest supplied color, and the anchor of
  **the only interactive hue in the system**. It is used as a _fill_: the transport button,
  the primary button. At 4.81:1 on sleeve it is the only supplied color that clears WCAG AA
  at all, and that margin is thin enough that it is not trusted with small text.
- **Deep Water (`primary-strong`, #33547D)** — cerulean continued one step down the ramp,
  and the cerulean that gets _set as type_: links, the active nav item, outline-button
  labels, and every hover and pressed state. At 7.43:1 it clears AA with room to spare,
  where `primary` would sit on the floor at 4.81:1. The split is a deliberate rule —
  **cerulean fills use `primary`, cerulean text uses `primary-strong`** — and it doubles as
  the interaction logic, since hovering a filled control moves it to the same depth the
  links already occupy.
- **Sounding Ink (`on-surface`, #142227)** — all body text and headings. A very dark
  desaturated teal-slate at hue 225, pulled toward the _middle_ of the palette rather than
  its blue end, specifically so it does not land on the navy-slate near-black that every
  framework ships. 15.6:1 on sleeve.
- **Chart Grey (`on-surface-muted`, #566D78)** — timecodes, catalog numbers, dates,
  credits. Carries the family's blue tint (chroma 0.032 at hue 228); there are no true
  greys anywhere in this system. 5.21:1, so metadata stays legible rather than decorative.
- **Rust (`error`, #924229)** — the family's complement at matched chroma discipline
  (OKLCH 0.480 / 0.115 / 38°) rather than a stock alert red. In a palette this cool, warmth
  _is_ the alarm signal, so it needs no saturation boost to register.

**Accent scarcity is the rule this system will lose first if nobody defends it.** Cerulean
should cover well under 5% of any screen. On the homepage that means the play controls and
the nav — nothing else.

## Typography

Two faces, split by job, differing by classification: a transitional serif carries the
**voice**, a neo-grotesque carries the **apparatus**. Both are open-source and variable, so
there is no licensing exposure and no need for a third face.

- **Newsreader** — display, headings, track titles, and all body prose. Chosen over the
  more obvious editorial serifs for two reasons: it has a genuine `opsz` optical-size axis,
  so the 80px display is drawn for 80px rather than scaled up from text metrics, and its
  character is restrained enough not to fight a cool palette. Fraunces was the alternative
  and was rejected as too warm and too quirky against these greens. Fallback stack:
  `Newsreader, "Iowan Old Style", Georgia, serif`.
- **Archivo** — every label, timecode, catalog number, date, caption, and piece of UI
  chrome. Its job is machine-facing information, and the reader-facing/machine-facing split
  is what makes two faces legible as a decision rather than an accident. Fallback stack:
  `Archivo, "Helvetica Neue", Arial, sans-serif`.

**Two weights only: 400 and 700.** No 500, no 600. Intermediate weights produce steps too
close to distinguish, which adds noise without adding hierarchy. Where a small label needs
presence it gets 700 plus heavy tracking rather than a middle weight — that is what
`label-caps` is.

The scale is generated from a 17px body at a 1.333 perfect-fourth ratio (17 → 23 → 30 → 40
→ 53 → 71), then hand-tuned and **broken at the top**: `display` is pushed to 80px so the
jump from body to display reads as a jump rather than a progression. That gap is the
primary hierarchy device on the homepage, where an artist name at 80px over a track list at
21px needs no other decoration to establish rank.

Optical settings carry real information at every level:

- **Tracking varies with size** — −0.03em at display, easing to 0 at body, then positive
  again at small sizes, and +0.12em on `label-caps`. Uppercase set at default tracking looks
  broken rather than emphatic; `'case' 1` is enabled on the caps levels so punctuation sits
  at the right height.
- **Line-height moves inversely to size** — 1.0 at display, 1.6–1.65 for body, 1.3–1.45 for
  labels. `body-lg` at 19px/1.65 is the blog and about-page setting and is the most
  generous level in the system, because those are the only two surfaces meant for extended
  reading.
- **Tabular figures (`tnum`) are mandatory on `data-time` and `data-catalog`.** Durations
  in a track list are a column of numbers; proportional figures make that column jitter as
  the timecode ticks, which is the single most visible typographic failure a music site can
  ship.

**Measure is capped at 68 characters** for all body copy. Set it explicitly; do not let the
container decide.

## Layout

**Asymmetric, on a 12-column grid with a 24px gutter and a 40px outer margin** — and the
asymmetry is a system-level commitment, not a garnish. Content sits flush-left in columns
1–8. Columns 9–12 are the margin rail, carrying release dates, catalog numbers, credits,
and running times. Nothing is centered. If a future screen tempts you to center it, the
answer is to put something in the rail instead.

The spacing scale is 8px-based with a 4px half-step, and everything lands on it. The named
steps exist so that vertical rhythm is chosen rather than typed: `md` (16px) inside a track
row, `lg` (32px) between entries in the release catalog, `xl` (64px) between sections,
`xxl` (96px) above a major section head.

**Density varies on purpose.** The homepage track list is deliberately dense — 16px padding,
hairline-separated, many rows visible at once — because a track list is a thing you scan.
The about page and blog are deliberately sparse, single-column, wide-margined, because they
are things you read. Uniform generosity across both would make the track list feel padded
and the prose feel cramped.

**Space above a heading is larger than space below it.** A heading belongs to the content
that follows it; getting this backwards is the most visible rhythm error available.

The audio player is **persistent**. It docks to the bottom of the viewport and survives
navigation between the homepage, releases, and about, because the core promise is that
audio keeps running while you browse. It is a full-bleed bar with a 1px top rule in Light
Blue — not a floating card, and not shadowed.

## Elevation & Depth

**There are no shadows in this system. None, at any level, for any element.**

This is not asceticism, it is consistency: the palette already encodes depth, in hue. A
bathymetric chart conveys three dimensions without a single drop shadow, and so does this.
Rank is expressed by three devices, in order of preference:

1. **Position on the color ramp.** A surface that is nearer or more active moves toward the
   shallow green end (`surface-hover`, `surface-live`). A surface that is deeper or more
   committed moves toward cerulean. This is the primary mechanism and should be reached for
   first.
2. **Hairline rules in Light Blue**, at 1px. Rules separate; they do not decorate. A rule
   between two things means those things are peers.
3. **Space.** Most apparent depth problems are grouping problems, and grouping is solved
   with the spacing scale.

The persistent player bar is the only element that genuinely floats above other content,
and it is distinguished by a 1px rule and a full-bleed background — not by elevation. If a
future element seems to need a shadow, it is almost certainly a grouping problem; use space.

## Shapes

Radius is **hierarchical and nearly zero**, with exactly three values, each with one job:

- **`none` (0px)** — everything structural: track rows, release entries, images, cover art,
  the player bar, section blocks, dividers, and the scrubber. This is the default. Cover art
  is never rounded; a record sleeve has corners.
- **`sm` (2px)** — controls only: buttons, inputs, format chips. Just enough to read as
  pressable against an otherwise square page. Never applied to a container.
- **`full` (9999px)** — reserved for a **single** element: the circular play/pause transport
  at 44px. On a page where nothing else is round, the one circle is unmistakably the thing
  you press, and it quietly echoes a record label. 44px is the minimum comfortable touch
  target, which matters because most visitors arrive on a phone.

Do not add a fourth radius. If something feels like it needs one, it belongs in one of the
three existing classes.

**Motion.** Three durations, and a short list of what moves. `120ms ease-out` for hover and
focus state changes. `160ms ease-out` for the playing-row wash moving into `surface-live`.
The scrubber animates linearly and continuously, because it represents real elapsed time
and easing it would be a lie.

**What does not animate:** nothing fades or slides up on scroll, ever. Page transitions are
instant. The release grid does not stagger in. Cover art does not zoom on hover. Motion in
this system exists only to confirm an action the visitor just took or to represent audio
playback — never to decorate an arrival.

## Components

Components reference tokens rather than literal values, and every component that renders
text defines its background and text color together so the pair is contrast-checkable.

**The track row is the most important component on the site** and has three states.
`track-row` is the resting state on sleeve. `track-row-hover` lifts to foam. And
`track-row-playing` washes to shoal — the loudest signal the system produces, and the only
place `surface-live` appears. State is never indicated by the accent color here; it is
indicated by depth.

**The scrubber is two components, not one.** `scrubber-track` is Light Blue at 2px;
`scrubber-elapsed` is Steel Blue at the same height. Both are square-ended. Together they
walk the elapsed portion one step down the depth ramp as the track plays. Neither takes a
text color, so `time-readout` is a separate component in Chart Grey with tabular figures.

**`transport`** is the circular play control — the system's only round object — filled in
cerulean with a sleeve-colored glyph, descending to `primary-strong` on hover.

**`release-entry`** is not a card. It is a bordered-by-nothing block on sleeve with 32px of
padding and a 1px rule beneath it, with `release-meta` (catalog number, year, format) set in
Chart Grey and pushed to the margin rail. Resist making this a card; cards are for discrete
comparable objects, and a discography is a list.

**`divider`** models a 1px rule as a background with a height, which is accurate — a hairline
_is_ a filled rectangle — and keeps the border color tokenized rather than stranded.

**`button-secondary`** is an outline button: sleeve background, Deep Water text, and a 1px
Deep Water border applied in CSS. Border color is not expressible as a component sub-token,
so it is specified here in prose and must be honored.

**`nav-link-active`** is distinguished by Deep Water text alone. Do not add an underline, a
pill, or a background; the color change is the whole affordance.

## Do's and Don'ts

- **Do** treat the palette as a depth scale. When you need a color the tokens don't cover,
  ask whether the element is shallow (near, active, now) or deep (committed, structural)
  and pick the neighboring ramp step.
- **Don't** introduce a second accent color. Rich Cerulean is the only interactive color in
  the system. If something needs emphasis, use size, weight, or space.
- **Don't** use Rich Cerulean for anything that isn't clickable. An accent on headings,
  borders, and icons as well as buttons emphasizes nothing.
- **Do** reserve `surface-live` (#D0EFB1) exclusively for the currently playing track. It is
  the site's only "now" signal and it stops working the moment it appears anywhere else.
- **Don't** add a shadow, a glow, a glassmorphic panel, or a gradient. Depth is hue and
  hairlines. This rule has no exceptions.
- **Don't** build a dark variant of this palette. These five colors do not survive on a dark
  ground; a dark mode would require a different palette and should be treated as a separate
  design decision, not a toggle.
- **Do** use tabular figures on every duration, timecode, year, and catalog number. A
  jittering timecode column is the most visible defect this site can ship.
- **Don't** use Tea Green, Celadon, Light Blue, or Steel Blue as a text color on sleeve.
  They compute to 1.21:1, 1.52:1, 1.82:1, and 2.54:1 respectively — all far below AA. They
  are fills, washes, and rules only.
- **Do** pair the playing state with a non-color cue (a pause glyph in the transport, an
  `aria-current` announcement). Roughly 8% of men have a color vision deficiency; the green
  wash must never be the only indication of what's playing.
- **Don't** center body copy, or let a paragraph exceed 68 characters. Content is flush-left
  in columns 1–8; metadata goes in the margin rail.
- **Don't** use font weights other than 400 and 700 anywhere.
- **Don't** round cover art or any container. Radius is 0 by default, 2px on controls, and
  `full` on the single transport button.
- **Do** keep the player persistent across navigation. If audio stops when someone clicks
  through to Releases, the site has failed at its one job.
- **Don't** animate anything on scroll. Motion confirms an action or represents playback;
  it never decorates an arrival.
