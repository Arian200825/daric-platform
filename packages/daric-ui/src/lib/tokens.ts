/**
 * Design tokens — the shared theming contract for all Daric templates.
 * Each template supplies concrete values; `themeCss()` injects them as CSS
 * variables so the whole site re-themes from config, with no component edits.
 */

export interface ThemeColors {
  background: string;
  surface: string;
  foreground: string;
  muted: string;
  primary: string;
  /** Text/icon color that sits on top of `primary`. */
  onPrimary: string;
  accent: string;
  border: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  /** Corner radius (rem) applied to cards/buttons/inputs. */
  radius: number;
  /** Font-family variable names, e.g. { display: "--font-display", body: "--font-body" }. */
  fonts?: { display?: string; body?: string };
}

/** Build the CSS that maps a theme onto the shared CSS variables. */
export function themeCss(theme: ThemeConfig): string {
  const c = theme.colors;
  return `:root{
  --background:${c.background};
  --surface:${c.surface};
  --foreground:${c.foreground};
  --muted:${c.muted};
  --primary:${c.primary};
  --on-primary:${c.onPrimary};
  --accent:${c.accent};
  --border:${c.border};
  --radius:${theme.radius}rem;
}`;
}
