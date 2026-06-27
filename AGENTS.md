# Project Rules & Conventions

## Golden Ratio (`phi ≈ 1.618034`)

All sizing, spacing, padding, border-radius, and animation durations **must** derive from the golden ratio. Calculate values via CLI — never hardcode magic numbers.

```sh
python3 -c "import math; phi=(1+5**0.5)/2; print(f'phi={phi}  1/phi={1/phi}  1/phi²={1/phi**2}  1/phi³={1/phi**3}')"
```

### Recurring values

| Token | Value | Usage |
|---|---|---|
| `phi` | `1.618034` | Base multiplier |
| `1/phi` | `0.618034` | Animation durations, inverse spacing |
| `1/phi²` | `0.381966` | Short durations, small spacing |
| `1/phi³` | `0.236068` | Micro-interactions, transition durations |
| `16.180340px` | `10 * phi` | Grid gap, card border-radius |
| `26.180340px` | `16.180340 * phi` | Card padding |
| `calc(X * phi)` / `calc(X * 1.618)` | — | Arbitrary component sizing |

Always express golden-ratio values in CSS as `calc(... * phi)` or use the pre-calculated pixel value (e.g. `16.180340px`). Never round to a "nice" number.

## WCAG AAA+ Contrast

All text must meet **WCAG AAA (7:1 minimum contrast ratio)**. Muted/decorative text may fall back to **AA (4.5:1)** only when AAA is impossible without visual distortion. Verify with:

```sh
python3 -c "
def l(h):
    r,g,b=[int(h[i:i+2],16)/255 for i in (0,2,4)]
    def lin(c): return c/12.92 if c<=0.03928 else ((c+0.055)/1.055)**2.4
    return 0.2126*lin(r)+0.7152*lin(g)+0.0722*lin(b)
def cr(a,b):
    la,lb=l(a),l(b); return (max(la,lb)+0.05)/(min(la,lb)+0.05)
print(f'{cr(\"100e0c\",\"f2ebe0\"):.1f}:1')
"
```

## Theme System

Two themes: `dark` (default) and `light`. Toggled via `data-theme` attribute on `<html>`.

- CSS custom properties in `src/styles/globals.css` under `:root` (light) and `[data-theme="dark"]`
- Components reference via `var(--color-*)` in Tailwind arbitrary values: `bg-[var(--color-bg-primary)]`
- State managed by `ThemeProvider` in `src/lib/theme-context.tsx` — lazy `useState` initializer reads `localStorage` then `prefers-color-scheme`
- Flash prevention via `<Script strategy="beforeInteractive">` in root layout
- `setTheme` / `toggleTheme` exposed via `useTheme()` hook

### CSS Variable Naming

```
--color-bg-{primary|secondary|card|hover|raised}
--color-text-{primary|secondary|muted|link|link-hover}
--color-border{|-hover}
--color-orb-{1|2}
--color-hero-{from|via|to}
```

### Theme Checklist

- [ ] Every new color is added to both `:root` and `[data-theme="dark"]`
- [ ] Contrast ratios verified with CLI for **both** themes
- [ ] Background/text transitions use `0.236068s ease` (1/phi³)

## i18n / Translations

The custom `I18nProvider` in `src/lib/i18n-context.tsx` handles localization.

### Adding a new key

1. Add the key-value pair to `src/locales/en.json` (source of truth)
2. Translate it in `src/locales/ru.json` (and any future locale files)
3. Use via `t("key.name")` — the `t` function supports `{param}` interpolation
4. Run `node scripts/build-locales.js` to regenerate the manifest

### Locale structure

- Files are flat JSON: `{ "key.name": "translated string" }`
- Use dot-separated namespaced keys: `theme.light`, `projects.source`, `footer.copyright`
- The `I18nProvider` persists the choice in `localStorage` under key `"lang"`

## Icon Policy

- **Globe** icon in `LanguagePicker` for language switching
- **Moon / sun** icon in `ThemeSwitcher` for theme selection (current theme dictates which)
- No other icons unless the user explicitly requests them
- All icons are 16×24px viewBox SVGs with `strokeWidth="2"` matching the LanguagePicker style

## No Em Dashes

Em dashes (`—`) create visual clash with the warm minimal aesthetic. Use en dashes (`–`) or plain text instead.

## No `translateY` Hover Effects

Card hovers use border-color, background-color, and color transitions only. No lift/card float patterns. If the user explicitly asks, follow their spec.

## No Glows

No `box-shadow` or `drop-shadow` glows unless the user explicitly requests them. Background "orb" effects are CSS-only radial blurs, not shadows.

## Mobile Support

- Touch targets must be at least `44px` in one dimension
- Footer layout stacks vertically on mobile via `sm:flex-row`
- Use `sm:`, `md:` breakpoints for responsive adjustments
- `Dropdown` panel opens above the trigger (`bottom-full`) so it doesn't overflow the viewport
- On mobile, an invisible native `<select>` (`opacity-0 absolute inset-0`) is layered over the styled trigger button. Taps hit the native select → OS picker opens. The styled trigger stays visible underneath. Never replace the trigger with a native `<select>`.
- Background orbs are hidden below `md` breakpoint via `max-md:hidden`

## Apple Design Guidelines

- Warm-toned color palettes inspired by Apple's system aesthetics
- 7:1 contrast ratio (AAA) for all custom foreground/background color pairs
- Theme toggle follows the HIG principle of giving users clear control
- No over-designed UI — prefer subtle borders and background tints over bold color blocks

## Component Architecture

All shared UI components live in `src/components/`. Current catalog:

| Component | Path | Description |
|---|---|---|
| `Footer` | `src/components/Footer.tsx` | Site footer with copyright, nav links, LanguagePicker, ThemeSwitcher |
| `BackgroundOrbs` | `src/components/BackgroundOrbs.tsx` | Decorative gradient orb blurs for page backgrounds |
| `PrivacySection` | `src/components/PrivacySection.tsx` | Reusable privacy-policy card with icon, title, body, and optional children |
| `Dropdown` | `src/components/Dropdown.tsx` | Generic typed dropdown with mobile `<select>` overlay |
| `LanguagePicker` | `src/components/LanguagePicker.tsx` | Language switcher wrapping `Dropdown` with locale data |
| `ThemeSwitcher` | `src/components/ThemeSwitcher.tsx` | Theme toggle wrapping `Dropdown` with moon/sun icons |
| `ConsentBanner` | `src/components/ConsentBanner.tsx` | Fixed-bottom localStorage consent banner |

- `BackgroundOrbs` is **not** a client component — it has no hooks, only static markup
- `Footer` and `PrivacySection` are client components (`"use client"`) because they use `useI18n()`
- When a privacy section needs extra content after the body (e.g. contact email link), pass it as `children`

## Code Style

- **No comments** in source code unless the user asks
- Follow existing component patterns (see `Footer`, `LanguagePicker`, `page.tsx`)
- Use `"use client"` for any component using hooks (i18n, theme, state)
- Tailwind v4 arbitrary values for dynamic values: `bg-[var(--color-x)]`, `rounded-[calc(16.180340px*1.618)]`
- Colors that change with theme must use CSS custom properties, never hardcoded Tailwind classes
- Static colors (e.g., `text-violet-500` for `.ink`) are fine

## Verification

Before marking complete, run:

```sh
npm run check
```

This runs `next lint` → `tsc --noEmit` → `node scripts/doctor.mjs`. All three must pass with **0 errors, 0 warnings** — including any warnings introduced by dependency upgrades. Every warning must be resolved, never ignored.
