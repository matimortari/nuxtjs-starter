interface Extras {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  scripts?: Record<string, string>
}

type Preset = "standard" | "with-i18n" | "with-tests"

export const REPO_URL = "https://github.com/matimortari/nuxtjs-starter.git"

export const PRESET_EXTRA_SCRIPTS: Record<Preset, Record<string, string>> = {
  "standard": {},
  "with-i18n": {},
  "with-tests": {
    "test": "vitest",
    "test:e2e": "playwright test",
    "coverage": "vitest --coverage",
  },
}

export const PRESET_EXTRA_PACKAGES: Record<Preset, Extras> = {
  "standard": {},
  "with-i18n": {
    dependencies: {
      "@nuxtjs/i18n": "10.0.6",
    },
  },
  "with-tests": {
    devDependencies: {
      "@nuxt/test-utils": "3.19.2",
      "@vitest/coverage-v8": "3.2.4",
      "@vue/test-utils": "2.4.6",
      "happy-dom": "18.0.1",
      "@playwright/test": "1.55.0",
      "vitest": "3.2.4",
    },
  },
}
