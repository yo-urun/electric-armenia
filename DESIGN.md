# DESIGN.md — Electric Armenia

The single design contract for every page. Reuse these tokens verbatim; do not
re-pick fonts or colors per page (that is design-system drift, catalog `X1`).

## Direction

**Panel — a working spec-sheet.** The subject's world is copper conductors,
colour-coded cores, breaker panels with labeled circuits, hazard signage,
multimeter readouts and single-line wiring diagrams. The page borrows that
world's artifacts instead of the SaaS template: a light concrete ground, hairline
rules like a schedule, one signal colour taken from safety signage, and a
single-line diagram as the hero. Deliberately *not* the dark/blue "trustworthy"
gradient hero with three icon cards.

Second-order defaults explicitly rejected: cream + terracotta (`SD1`),
near-black + acid accent (`SD2`), all-caps eyebrows / mono chrome (`SD4`),
one accented headline word (`SD5`), decorative `01/02/03` (`SD6`).

## Tokens

```yaml
color:
  ground:      "#F3F4F2"   # cool concrete white — dominant (~60%)
  surface:     "#FFFFFF"   # panels, ~30%
  ink:         "#15181C"   # text, rules on dark — true near-black, cool
  muted:       "#5B636E"   # secondary text (AA on ground, 4.6:1)
  line:        "#D9DCD6"   # hairlines — the schedule grid
  signal:      "#E9A200"   # safety amber — the ONE accent (~10%). Action + live path only
  signalHover: "#D69400"
  onSignal:    "#15181C"   # ink on amber (9:1)
  status:      "#2F7D5B"   # semantic only: "ok/certified" dot. Never decorative
type:
  family:  "Noto Sans, Noto Sans Armenian, system-ui, sans-serif"  # one coherent system: the only family set that covers hy + ru + en
  mono:    "Noto Sans Mono, ui-monospace, monospace"               # REAL data only (numbers, refs a reader scans)
  scale:   "display clamp(2rem,5vw,3.25rem)/1.08 · h2 1.5–2rem · body 1rem/1.65 · small .8125rem"
  weights: "400 / 500 / 600 / 700 / 800"
radius:
  "0,2,6,8px"   # sharp. Buttons 4px, panels 8px. Never a global 16px
elevation:
  none   # hierarchy comes from hairlines + ground/surface shifts, not shadows
space:
  scale: "4,8,12,16,24,32,48,64,96px; vary by section role, not uniform"
```

## Moves

- **Layout.** A spec-sheet: labeled rows separated by hairlines, a 2-column
  hero (argument + single-line diagram), left-aligned, asymmetrical.
- **Signature.** The single-line wiring diagram (mains → meter → panel →
  labeled circuits), drawn as SVG, revealed once on load by drawing the
  conductor. On mobile it sits under the copy, not beside it.
- **Services** are a **panel schedule** (name / scope rows), not six identical
  icon cards. No icon-in-a-rounded-square chips.
- **Motion.** One entrance per page (the diagram draws). Hovers change colour,
  not position. `prefers-reduced-motion` → no draw.
- **Copy.** Concrete; no invented metrics, no stat strip, no vague superlatives.

## Do not

Indigo/violet (`C1`), gradient headline text (`C6`), colored glow shadows
(`C5`), glassmorphism (`K3`), dark SaaS cards (`K9`), `rounded-2xl + shadow` on
every surface (`K2`), stat strips (`L4`), arrow glyphs on CTAs (`CP3`),
fade-up on every section (`M1`).
