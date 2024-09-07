import { defineConfig, presetUno, presetTypography } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  theme: {
    fontFamily: {
      sans: "Poppins",
      mono: "Oswald",
      roboto: "Roboto",
    },
  },
  presets: [presetUno(), presetTypography()],
});
