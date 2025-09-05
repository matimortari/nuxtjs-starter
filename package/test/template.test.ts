import fs from "fs-extra"
import { describe, expect, it, vi } from "vitest"
import * as template from "../src/helpers/template"

vi.mock("fs-extra")

describe("template helpers", () => {
  it("copyRootTemplate should throw if path doesn't exist", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as unknown as (path: string) => Promise<boolean>)
    pathExistsMock.mockResolvedValue(false)

    await expect(template.copyRootTemplate("tmp", "target")).rejects.toThrow()
  })

  it("copyPresetFiles should throw if preset not found", async () => {
    const pathExistsMock = vi.mocked(fs.pathExists as unknown as (path: string) => Promise<boolean>)
    pathExistsMock.mockResolvedValue(false)

    await expect(template.copyPresetFiles("tmp", "standard", "target")).rejects.toThrow()
  })
})
