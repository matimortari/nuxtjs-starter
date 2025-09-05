import { describe, expect, it } from "vitest"
import { PRESET_EXTRA_PACKAGES, PRESET_EXTRA_SCRIPTS, REPO_URL } from "../src/helpers/constants"

const presets = ["standard", "with-i18n", "with-tests"] as const

describe("repository", () => {
  it("has a valid REPO_URL", () => {
    expect(REPO_URL).toBe("https://github.com/matimortari/nuxtjs-starter.git")
  })
})

describe.each(presets)("preset %s", (preset) => {
  it("has a valid scripts object", () => {
    expect(PRESET_EXTRA_SCRIPTS[preset]).toBeTypeOf("object")
  })

  it("has a valid packages object", () => {
    expect(PRESET_EXTRA_PACKAGES[preset]).toBeTypeOf("object")
  })
})
