import en from "~/lib/locales/en-US.json"
import fr from "~/lib/locales/fr-FR.json"

export default defineI18nConfig(() => {
  const config = useRuntimeConfig()

  return {
    legacy: false,
    langDir: "./locales",
    messages: { "en-US": en, "fr-FR": fr },
    baseUrl: config.public.baseUrl,
    locales: [
      {
        code: "en",
        iso: "en-US",
        isCatchallLocale: true,
      },
      {
        code: "fr",
        iso: "fr-FR",
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "nuxt-lang",
      redirectOn: "root",
    },
  }
})
