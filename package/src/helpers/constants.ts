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
      "@nuxtjs/i18n": "10.2.0",
    },
  },
  "with-tests": {
    devDependencies: {
      "@nuxt/test-utils": "3.19.2",
      "@vitest/coverage-v8": "4.0.8",
      "@vue/test-utils": "3.20.0",
      "happy-dom": "13.7.6",
      "@playwright/test": "1.56.1",
      "vitest": "4.0.8",
    },
  },
}
