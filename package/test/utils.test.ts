import fs from "fs-extra"
import { beforeEach, describe, expect, it, vi } from "vitest"
import * as utils from "../src/helpers/utils"

vi.mock("fs-extra")
vi.mock("inquirer")

describe("utils", () => {
  let originalArgv: string[]

  beforeEach(() => {
    originalArgv = process.argv
  })

  it("getProjectNameFromArgs returns correct name", () => {
    process.argv = ["node", "cli.js", "-n", "my-project"]
    expect(utils.getProjectNameFromArgs()).toBe("my-project")
    process.argv = originalArgv
  })

  it("validateTargetDirectory returns null if path exists", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as unknown as (path: string) => Promise<boolean>)
    pathExistsMock.mockResolvedValue(true)

    const result = await utils.validateTargetDirectory("exists")
    expect(result).toBeNull()
  })

  it("validateTargetDirectory returns path if not exists", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as unknown as (path: string) => Promise<boolean>)
    pathExistsMock.mockResolvedValue(false)

    const result = await utils.validateTargetDirectory("new-dir")
    expect(result).toContain("new-dir")
  })
})
