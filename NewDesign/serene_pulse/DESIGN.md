---
name: Serene Pulse
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3e4948'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#6f7978'
  outline-variant: '#bec9c7'
  surface-tint: '#076a67'
  primary: '#006765'
  on-primary: '#ffffff'
  primary-container: '#2d807e'
  on-primary-container: '#f3fffd'
  inverse-primary: '#86d4d0'
  secondary: '#9a442d'
  on-secondary: '#ffffff'
  secondary-container: '#fc9174'
  on-secondary-container: '#742814'
  tertiary: '#326556'
  on-tertiary: '#ffffff'
  tertiary-container: '#4b7e6e'
  on-tertiary-container: '#f5fff9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a1f0ec'
  primary-fixed-dim: '#86d4d0'
  on-primary-fixed: '#00201f'
  on-primary-fixed-variant: '#00504e'
  secondary-fixed: '#ffdbd2'
  secondary-fixed-dim: '#ffb4a1'
  on-secondary-fixed: '#3c0800'
  on-secondary-fixed-variant: '#7c2e19'
  tertiary-fixed: '#b8eeda'
  tertiary-fixed-dim: '#9cd1be'
  on-tertiary-fixed: '#002018'
  on-tertiary-fixed-variant: '#1b4f41'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Manrope
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 22px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: -0.005em
  body-lg:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-md:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 19px
  body-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 17px
  label-lg:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
  label-md:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-sm:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
  mono-metric:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: -0.02em
  mono-code:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 15px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-2xs: 2px
  space-xs: 4px
  space-sm: 8px
  space-md: 12px
  space-base: 16px
  space-lg: 20px
  space-xl: 24px
  space-2xl: 32px
  space-3xl: 40px
  window-sidebar-width: 220px
  window-min-width: 740px
  window-default-width: 860px
  window-max-content-width: 640px
  window-padding: 24px
  card-padding: 16px 18px
  card-gap: 12px
---

## Brand & Style

This design system establishes a focused, tactile, and tranquil native desktop experience tailored for personal wellness and sustained productivity. Balancing mindful calm with technical precision, the aesthetic merges the refined simplicity of modern macOS human interface principles with clean contemporary software architecture. 

The visual demeanor is intentional and calm: it avoids alarmist interruptions and sensory overload, adopting gentle rhythmic interactions that encourage healthy computer habits. The design relies on soft-elevated panel architecture, micro-textured borders, restrained surface layering, and crisp geometric legibility. The interface feels natural inside a desktop workspace—unobtrusive when running in the background, yet tactile, rewarding, and satisfying when configured.

## Colors

The color palette centers on therapeutic, refreshing oceanic teals supported by balancing slate neutrals and warm organic signals. 

### Light Mode Foundations
- **Base Window Canvas**: `#F8FAFA` — A clean, ultra-soft tinted slate white providing zero eye strain.
- **Sidebar & Inset Canvas**: `#EFF3F3` — Subtle background contrast for navigational anchors.
- **Surface Elevation 1 (Card Default)**: `#FFFFFF` — Pure crisp white for primary configurable card panels.
- **Surface Elevation 2 (Sub-card / Input Base)**: `#F1F5F5` — Recessed or active child groupings.
- **Primary Accent**: `#3A8B88` — Restorative teal for primary actions, active states, and progressive meters.
- **Primary Hover / Focus**: `#2D6F6D` — Deepened teal for crisp feedback.
- **Secondary (Break Alert / Energy)**: `#E07A5F` — Warm terracotta peach for micro-breaks, notifications, and prompts.
- **Tertiary (Long Break / Deep Focus)**: `#5B8E7D` — Sage forest green for milestone breaks and health stats.
- **Border Subtle**: `rgba(45, 111, 109, 0.08)` — Delicate structural definition.
- **Border Default**: `rgba(30, 41, 59, 0.12)` — Tactile container boundaries.
- **Text High Contrast**: `#0F172A` — Slate 900 for razor-sharp typography.
- **Text Muted**: `#475569` — Slate 600 for descriptions, secondary timestamps, and parameter keys.
- **Text Sub-label**: `#64748B` — Slate 500 for inline helper cues and disabled hints.

### Dark Mode Adaptations
- **Base Window Canvas**: `#121818` — Deep obsidian teal, soothing in low-light environments.
- **Sidebar & Inset Canvas**: `#0E1313` — Recessed dark baseline.
- **Surface Elevation 1 (Card Default)**: `#1A2222` — Luminous slate-charcoal panel surface.
- **Surface Elevation 2 (Sub-card / Input Base)**: `#222D2D` — Interactive inset and component track baseline.
- **Primary Accent**: `#4EABA7` — Radiant soft teal calibrated for dark surface contrast.
- **Primary Hover**: `#63BBB7` — Brightened seafoam response.
- **Secondary Accent**: `#F28E74` — Soft coral alert.
- **Tertiary Accent**: `#74B49F` — Crisp mint eucalyptus.
- **Border Subtle**: `rgba(255, 255, 255, 0.07)` — Crisp specular edge highlighting.
- **Border Default**: `rgba(255, 255, 255, 0.13)` — Structural boundaries.
- **Text High Contrast**: `#F1F5F9` — Luminous off-white headline text.
- **Text Muted**: `#94A3B8` — Mid-tone slate for descriptions.
- **Text Sub-label**: `#64748B` — Subordinate text metadata.

## Typography

Typography prioritizes fast scanning, visual comfort, and native desktop hierarchy.

- **Primary Typeface (`Manrope`)**: Delivers geometric structure softened by open counters and rounded apexes, producing a friendly yet disciplined user experience across window panes.
- **Monospaced Utility (`JetBrains Mono`)**: Applied strategically for duration settings (`20m 00s`, `15s`), schedule intervals, keyboard shortcuts (`⌘,`, `⌥⇧B`), and countdown metrics to avoid numerical jitter and convey precision.
- **Editorial Balance**: Section titles use tight letter tracking (`-0.015em` to `-0.02em`) to anchor desktop panels, while body sizes preserve generous line heights for instant readability during quick breaks.

## Layout & Spacing

The layout is built for native desktop constraints (Electron/macOS standard settings dimensions), employing an asymmetric two-pane architecture:

1. **Window Scaffolding**: 
   - A persistent left utility navigation sidebar (`220px` width) housing primary break preferences, schedule controls, audio sets, and system preferences.
   - An active right content pane with a constrained maximum width of `640px` to maintain optimal line lengths and prevent settings cards from stretching awkwardly on maximized displays.
2. **Spacing Grid**:
   - Built on a strict 4px base rhythm, with standard spacing tokens stepping along 4px, 8px, 12px, 16px, 20px, 24px, and 32px increments.
   - Vertically stacked settings groups maintain a `24px` separation, while child setting rows within a card stack with an `8px` or `12px` cadence.
3. **Responsive Behaviors**:
   - At widths below `740px`, the sidebar condenses into an icon-only rail (`64px` width) or an adaptive top-bar segment, preserving central panel focus.

## Elevation & Depth

Visual hierarchy avoids generic drop shadows, prioritizing tactile surfaces, frosted translucency, and precision boundaries that feel native to macOS:

- **Surface Level 0 (App Shell Background)**: Flat base canvas (`#F8FAFA` / `#121818`) with zero elevation.
- **Surface Level 1 (Primary Setting Cards)**: 
  - Light mode: Solid pure white background with a micro border `1px solid rgba(15, 23, 42, 0.08)` and an ambient, low-spread soft glow: `0 1px 3px rgba(15, 23, 42, 0.04), 0 4px 12px rgba(45, 111, 109, 0.03)`.
  - Dark mode: Elevated charcoal tile with a distinct top highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.06)` combined with `0 4px 16px rgba(0, 0, 0, 0.35)`.
- **Surface Level 2 (Floating Popovers & Audio Previews)**: 
  - Floating status pill or playback drawer uses `0 8px 24px rgba(15, 23, 42, 0.12)`, augmented with `backdrop-filter: blur(16px)` for native frosted glass integration.
- **Interactive State Elevation**:
  - Clicked states drop elevation by `1px` alongside an inset shadow: `inset 0 1px 2px rgba(0, 0, 0, 0.1)`.
  - Focused interactive elements display an accessible outer glow: `0 0 0 3px rgba(58, 139, 136, 0.28)`.

## Shapes

A roundedness scale of `2` (0.5rem base) sets a friendly and welcoming tone without compromising desktop efficiency.

- **Primary Cards & Containers**: `12px` to `14px` border-radius (`rounded-xl` standard), creating approachable grouping regions.
- **Segmented Controls & Inputs**: `8px` (`rounded-md`), aligning with standard desktop OS form-control expectations.
- **Toggle Switches & Status Chips**: Pill-shaped (`9999px`), emphasizing tactile completion and continuous state.
- **Theme Color Swatches**: `8px` squircle geometry, outlined by a 2px offset border when selected.

## Components

### 1. Toggle Switches
- **Track**: `40px × 22px` rounded pill.
- **Unchecked**: Background `#E2E8F0` (light) or `#2A3535` (dark).
- **Checked**: Solid Primary Accent Teal (`#3A8B88`).
- **Thumb**: `18px × 18px` pure white circle with a `0 1px 3px rgba(0,0,0,0.2)` physical drop shadow, translating smoothly with a 150ms cubic-bezier transition.

### 2. Segmented Controls
- Recessed container finished in Surface Elevation 2 with a 3px interior inset.
- Active segment elevated with white fill (light mode) or luminous slate (dark mode), bounded by subtle borders and crisp typography to clearly highlight the chosen interval (e.g., `Micro-break` vs `Long break`).

### 3. Settings Cards & Row Groups
- Cards cluster related settings (e.g., *Break Duration*, *Strict Mode*, *Do Not Disturb integration*).
- Individual rows feature high-contrast title text, a helper explanation in `body-sm`, and action controls aligned right.
- Separated internally by hairline divider borders (`1px solid rgba(0, 0, 0, 0.05)`).

### 4. Audio Preview Card
- Compact interactive row containing:
  - Mini play/stop circular icon button (`32px` diameter) with tactile feedback.
  - Waveform or audio title preview (`Bell`, `Gong`, `Chime`, `Rain`).
  - Subtle volume slider with a teal fill bar and a circular thumb.

### 5. Theme Color Swatches
- Horizontal selection row featuring rounded color squares (`28px × 28px`).
- Selected swatch displays an active inner white dot or an animated offset halo (`2px` teal ring with `2px` transparent gap).

### 6. Stepper & Time Duration Inputs
- Monospaced numerical values flanked by compact chevron or minus/plus buttons.
- Supports direct manual numerical entry alongside keyboard up/down micro-adjustments.

### 7. Buttons
- **Primary**: Solid teal background, white text, subtle hover lift.
- **Secondary / Ghost**: Transparent fill, muted slate text, hover tint (`rgba(58, 139, 136, 0.08)`).
- **Destructive**: Low-saturation red background with clean crimson text for reset or break skipping settings.