---
version: alpha
name: Streamtime
description: A playful, high-contrast workspace brand with oversized rounded controls, crisp black type, and a bright yellow accent.
colors:
  primary: "#FFDE3B"
  secondary: "#2F2C29"
  tertiary: "#000000"
  neutral: "#FFFFFF"
  surface: "#FFFFFF"
  on-surface: "#000000"
  muted-surface: "#F3F1ED"
  border: "#E5E7EB"
  error: "#D92D20"
  success: "#2EAD4A"
typography:
  headline-display:
    fontFamily: "Ease Display"
    fontSize: "48px"
    fontWeight: 400
    lineHeight: "1.05"
    letterSpacing: "-0.03em"
  headline-lg:
    fontFamily: "Ease Display"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: "38px"
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Ease Display"
    fontSize: "27px"
    fontWeight: 400
    lineHeight: "31px"
    letterSpacing: "-0.02em"
  headline-sm:
    fontFamily: "Ease Standard"
    fontSize: "23px"
    fontWeight: 400
    lineHeight: "31px"
    letterSpacing: "0em"
  body-lg:
    fontFamily: "Ease Display"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: "1.5"
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "Ease Display"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "31px"
    letterSpacing: "-0.02em"
  body-sm:
    fontFamily: "Ease Standard"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0em"
  label-lg:
    fontFamily: "Ease Standard"
    fontSize: "40px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "0em"
  label-md:
    fontFamily: "Ease Standard"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "0em"
  label-sm:
    fontFamily: "Ease Standard"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "1"
    letterSpacing: "0em"
  caption:
    fontFamily: "Ease Standard"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0.04em"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 24px
  xl: 160px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 56px
  2xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "24px 40px"
    height: "88px"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "24px 40px"
    height: "88px"
  button-tertiary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-md}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xl}"
    padding: "16px 24px"
    height: "56px"
  chip:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
---

# Streamtime

## Overview

Streamtime feels bold, friendly, and a little whimsical, with a strong editorial personality and lots of breathing room. The interface uses oversized rounded controls and playful visual accents to make a productivity/workflow product feel approachable rather than corporate. Overall density is low: content is centered, whitespace is generous, and the page lets a few large statements do most of the work.

## Colors

- **Primary (#FFDE3B):** A vivid sunflower yellow used as the signature accent for the main CTA and playful highlights. It adds energy without overpowering the otherwise minimal canvas.
- **Secondary (#2F2C29):** A warm charcoal used for the strongest filled button treatments and dark UI contrast. It reads softer than pure black while still feeling grounded.
- **Tertiary (#000000):** True black used for the main typography and the highest-contrast marks. It gives the brand its crisp, graphic edge.
- **Surface (#FFFFFF):** Clean white dominates the background and card surfaces, preserving the spacious, airy feel.
- **On-surface (#000000):** Primary text color on light surfaces, ensuring legibility and a stark editorial look.
- **Border (#E5E7EB):** A subtle cool border tone used sparingly to separate cards and button outlines without adding visual weight.
- **Muted surface (#F3F1ED):** A soft off-white for secondary panels or quiet UI areas, if needed.
- **Error (#D92D20):** Reserved for validation and destructive states; it should remain rare in this otherwise optimistic palette.
- **Success (#2EAD4A):** A supportive status color for confirmations and positive feedback.

## Typography

The type system combines two custom families: **Ease Display** for expressive, slightly compressed display and body treatment, and **Ease Standard** for labels, buttons, and utility copy. Headlines lean into large sizes with tight negative letter-spacing, creating a custom, modern, slightly playful rhythm. Button text is unusually large and airy, which reinforces the brand’s confident, poster-like interaction style.

Use `headline-display`, `headline-lg`, and `headline-md` for page-level statements and hero copy. `headline-sm` can support subheads and supporting metadata where a calmer voice is needed. `body-md` and `body-lg` are best for content blocks, while `body-sm`, `label-md`, and `label-lg` handle navigation and CTA surfaces. Keep letter-spacing restrained; the observed style favors compact, smooth word shapes rather than uppercase-tracking systems.

## Layout

The layout is a centered, fixed-feeling hero composition with very large negative space around the main message. Rather than dense columns, the page uses a simple top bar, centered copy, and a large poster-like brand moment below, allowing the interface to feel expansive and expressive. Spacing follows a stepped rhythm from 8px up to 96px, with larger jumps between major sections and relatively tight spacing inside controls.

Use generous section padding and keep content blocks isolated. Cards and smaller surfaces should use modest internal padding, while CTAs and nav pills can afford wide horizontal padding for a prominent, tactile look. The system favors clean alignment and strong centering over complicated grid structures.

## Elevation & Depth

Depth is subtle and mostly achieved through soft shadows on floating UI elements and slight tonal separation, not through layered surfaces or heavy blur. Buttons and utility elements appear lifted with light shadowing, while the background remains flat white. Borders are thin and understated, so hierarchy comes from contrast, scale, and spacing more than from dramatic elevation.

## Shapes

The shape language is highly rounded and friendly. Primary actions use pill-like radii (`160px`/full rounding) that make controls feel soft and touchable, while cards and containers keep a gentler `8px` radius for structure. The overall impression is rounded, optimistic, and approachable rather than sharp or technical.

## Components

Buttons are the dominant interface atom and should feel large, easy to scan, and clearly differentiated by fill and outline treatment. Use `button-primary` for the most important action: dark fill, white text, full pill radius, and generous `24px 40px` padding. Use `button-secondary` for secondary actions: white fill, black outline, black text, same pill geometry, and the same strong sizing. Use `button-tertiary` for lighter inline actions and navigation-style links; keep them transparent, compact, and visually quiet.

Cards should remain simple white surfaces with a light border and `rounded.md`. Keep them lightly padded and avoid heavy shadowing so they do not compete with the oversized hero content. Inputs should mirror the pill-shaped softness of buttons when used in this system, with clear contrast, ample padding, and a calm, uncluttered interior.

Chips and tags should use the bright yellow accent and compact rounded-full geometry to stay playful without becoming noisy. If tooltips, dropdowns, or menus are introduced, they should follow the same light-border, soft-shadow, high-contrast approach. Lists and navigation items should remain typography-led rather than container-heavy, with clear spacing and minimal chrome.

## Do's and Don'ts

- Do keep primary actions large, pill-shaped, and highly legible.
- Do use lots of whitespace to preserve the brand’s airy, poster-like feel.
- Do prefer black text on white surfaces and yellow only for emphasis.
- Do keep borders thin and shadows soft; hierarchy should come from scale and contrast.
- Don't introduce sharp corners for core controls or cards.
- Don't crowd the layout with dense multi-column content unless absolutely necessary.
- Don't overuse the yellow accent outside key CTAs or highlight moments.
- Don't rely on heavy gradients, glossy effects, or complex elevation stacks.
