import fs from "fs-extra"
import inquirer from "inquirer"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import * as utils from "../src/helpers/utils"

vi.mock("fs-extra")
vi.mock("inquirer")

describe("utils", () => {
  let originalArgv: string[]

  beforeEach(() => {
    originalArgv = process.argv
  })

  afterEach(() => {
    process.argv = originalArgv
    vi.clearAllMocks()
  })

  it("getProjectNameFromArgs returns correct name with -n", () => {
    process.argv = ["node", "cli.js", "-n", "my-project"]
    expect(utils.getProjectNameFromArgs()).toBe("my-project")
  })

  it("getProjectNameFromArgs returns correct name with --name", () => {
    process.argv = ["node", "cli.js", "--name", "my-project"]
    expect(utils.getProjectNameFromArgs()).toBe("my-project")
  })

  it("getProjectNameFromArgs returns null if no name provided", () => {
    process.argv = ["node", "cli.js"]
    expect(utils.getProjectNameFromArgs()).toBeNull()
  })

  it("promptForProjectName returns name from args", async () => {
    process.argv = ["node", "cli.js", "-n", "arg-project"]
    const name = await utils.promptForProjectName()
    expect(name).toBe("arg-project")
  })

  it("promptForProjectName prompts if no args", async () => {
    process.argv = ["node", "cli.js"]
    const promptMock = vi.mocked(inquirer.prompt)
    promptMock.mockResolvedValue({ projectName: "prompted-project" })

    const name = await utils.promptForProjectName()
    expect(name).toBe("prompted-project")
  })

  it("validateTargetDirectory returns null if path exists and user declines overwrite", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as any)
    pathExistsMock.mockResolvedValue(true)
    const promptMock = vi.mocked(inquirer.prompt as any)
    promptMock.mockResolvedValue({ overwrite: false })

    const result = await utils.validateTargetDirectory("exists")
    expect(result).toBeNull()
  })

  it("validateTargetDirectory removes existing directory if user confirms overwrite", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as any)
    pathExistsMock.mockResolvedValue(true)
    const removeMock = vi.mocked(fs.remove as any)
    removeMock.mockResolvedValue(undefined)
    const promptMock = vi.mocked(inquirer.prompt as any)
    promptMock.mockResolvedValue({ overwrite: true })

    const result = await utils.validateTargetDirectory("exists")
    expect(removeMock).toHaveBeenCalled()
    expect(result).toContain("exists")
  })

  it("validateTargetDirectory returns path if not exists", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as any)
    pathExistsMock.mockResolvedValue(false)

    const result = await utils.validateTargetDirectory("new-dir")
    expect(result).toContain("new-dir")
  })
})
