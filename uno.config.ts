import { defineConfig, presetUno, presetTypography, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetIcons()],

  theme: {
    colors: {
      ground: "#F3F4F2",
      surface: "#FFFFFF",
      ink: "#15181C",
      muted: "#5B636E",
      line: "#D9DCD6",
      signal: "#E9A200",
      "signal-hover": "#D69400",
      "on-signal": "#15181C",
      status: "#2F7D5B",
    },
    fontFamily: {
      sans: "'Noto Sans','Noto Sans Armenian',ui-sans-serif,system-ui,-apple-system,'Segoe UI',sans-serif",
      mono: "'Noto Sans Mono',ui-monospace,SFMono-Regular,Menlo,monospace",
    },
  },

  shortcuts: {
    container: "mx-auto w-full max-w-6xl px-5 sm:px-8",
    btn: "inline-flex items-center justify-center gap-2 rounded-sm px-5 min-h-11 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ground",
    "btn-primary":
      "btn bg-signal text-on-signal hover:bg-signal-hover focus-visible:ring-ink",
    "btn-outline":
      "btn bg-surface text-ink ring-1 ring-line hover:bg-ground focus-visible:ring-ink",
    "link-ink":
      "text-ink underline decoration-line decoration-1 underline-offset-4 transition-colors hover:decoration-signal",
    rule: "border-t border-line",
  },
});
