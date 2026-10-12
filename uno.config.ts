import { defineConfig, presetUno, presetTypography, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetTypography(), presetIcons()],

  theme: {
    fontFamily: {
      sans: "'Noto Sans','Noto Sans Armenian',ui-sans-serif,system-ui,-apple-system,'Segoe UI',Roboto,sans-serif",
    },
    boxShadow: {
      soft: "0 1px 2px rgba(15,23,42,.04), 0 12px 32px -12px rgba(15,23,42,.16)",
      glow: "0 18px 60px -18px rgba(37,99,235,.55)",
    },
  },

  shortcuts: {
    btn: "inline-flex items-center justify-center gap-2 rounded-xl px-6 min-h-12 text-base font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "btn-primary":
      "btn bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 focus-visible:ring-blue-500",
    "btn-glass":
      "btn bg-white/10 text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15 focus-visible:ring-white",
    "btn-light":
      "btn bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:ring-blue-500",
    "pill": "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium ring-1 transition-colors",
    card: "rounded-2xl bg-white p-6 ring-1 ring-slate-900/5 shadow-soft",
    "card-hover": "transition duration-200 ease-out hover:-translate-y-1 hover:shadow-glow",
    "section-x": "mx-auto w-full max-w-7xl px-5 sm:px-8",
    "eyebrow": "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em]",
  },
});
