import fs from "fs-extra"
import { beforeEach, describe, expect, it, vi } from "vitest"
import * as template from "../src/helpers/template"

vi.mock("fs-extra")

describe("template helpers", () => {
  const tmpDir = "/tmp/mock"
  const targetDir = "/tmp/target"

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("copyRootTemplate throws if path doesn't exist", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as any)
    pathExistsMock.mockResolvedValue(false)

    await expect(template.copyRootTemplate(tmpDir, targetDir)).rejects.toThrow(
      /not found/,
    )
  })

  it("copyRootTemplate copies files if path exists", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as any)
    const copyMock = vi.mocked(fs.copy)

    pathExistsMock.mockResolvedValue(true)
    copyMock.mockResolvedValue()

    const result = await template.copyRootTemplate(tmpDir, targetDir)

    expect(pathExistsMock).toHaveBeenCalledOnce()
    expect(copyMock).toHaveBeenCalledWith(
      expect.stringContaining("base"),
      targetDir,
    )
    expect(result).toContain("base")
  })

  it("copyPresetFiles throws if preset not found", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as unknown as (path: string) => Promise<boolean>)
    pathExistsMock.mockResolvedValue(false)

    await expect(
      template.copyPresetFiles(tmpDir, "standard", targetDir),
    ).rejects.toThrow(/not found/)
  })

  it("copyPresetFiles copies root files and app folder", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists)
    const readdirMock = vi.mocked(fs.readdir as unknown as (path: string) => Promise<string[]>)
    const copyMock = vi.mocked(fs.copy)

    pathExistsMock.mockImplementation(async () => true)
    readdirMock.mockResolvedValue(["file1.txt", "app"])
    copyMock.mockResolvedValue()

    await template.copyPresetFiles(tmpDir, "custom", targetDir)

    expect(readdirMock).toHaveBeenCalledWith(
      expect.stringContaining("custom"),
    )
    expect(copyMock).toHaveBeenCalledWith(
      expect.stringContaining("file1.txt"),
      expect.stringContaining("file1.txt"),
      { overwrite: true },
    )
    expect(copyMock).toHaveBeenCalledWith(
      expect.stringContaining("app"),
      expect.stringContaining("app"),
      { overwrite: true },
    )
  })
})
