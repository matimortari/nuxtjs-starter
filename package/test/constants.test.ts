import { describe, expect, it } from "vitest"
import { PRESET_EXTRA_PACKAGES, PRESET_EXTRA_SCRIPTS, REPO_URL } from "../src/helpers/constants"

describe("constants", () => {
  it("should have a valid REPO_URL", () => {
    expect(REPO_URL).toBe("https://github.com/matimortari/nuxtjs-starter.git")
  })

  it("should have scripts for 'with-tests'", () => {
    expect(PRESET_EXTRA_SCRIPTS["with-tests"]).toHaveProperty("test")
    expect(PRESET_EXTRA_SCRIPTS["with-tests"]).toHaveProperty("coverage")
  })

  it("should have devDependencies for 'with-tests'", () => {
    expect(PRESET_EXTRA_PACKAGES["with-tests"].devDependencies).toHaveProperty("vitest")
  })
})
