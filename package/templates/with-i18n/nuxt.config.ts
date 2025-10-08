import { fileURLToPath } from "node:url"
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2025-09-05",
  modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxtjs/color-mode", "@nuxtjs/i18n", "@pinia/nuxt", "nuxt-auth-utils"],
  imports: { dirs: ["lib/**"] },
  alias: {
    "#server": fileURLToPath(new URL("./server", import.meta.url)),
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    },
  },
  vite: { plugins: [tailwindcss()] },
  css: ["~/assets/styles.css"],
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
    storageKey: "nuxt-color-mode",
  },
  i18n: {
    restructureDir: "app/lib",
    baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
    locales: [
      { code: "en-US", language: "en-US", file: "en-US.json" },
      { code: "fr-FR", language: "fr-FR", file: "fr-FR.json" },
    ],
    defaultLocale: "en-US",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: "nuxt-lang",
      alwaysRedirect: true,
      redirectOn: "root",
      fallbackLocale: "en-US",
    },
  },
  icon: {
    mode: "svg",
    clientBundle: { scan: true },
  },
})
