import fs from "fs-extra"
import { describe, expect, it, vi } from "vitest"
import * as pkgMgr from "../src/helpers/package-manager"

vi.mock("fs-extra")
vi.mock("inquirer")

describe("package-manager helpers", () => {
  it("should return correct npm commands", () => {
    const commands = (pkgMgr as any).createPackageManagerCommands("npm")
    expect(commands.installCmd).toBe("npm install")
    expect(commands.runScript("test")).toBe("npm run test")
  })

  it("should merge dependencies correctly", async () => {
    const writeFileMock = vi.mocked(fs.writeFile)
    const readFileMock = vi.mocked(fs.readFile as unknown as (path: string, encoding: string) => Promise<string>)
    writeFileMock.mockResolvedValue()
    readFileMock.mockResolvedValue(JSON.stringify({ dependencies: { a: "1" }, devDependencies: {}, scripts: {} }))

    await pkgMgr.updatePackageJson("rootDir", "targetDir", "standard", { dependencies: { b: "2" }, devDependencies: {}, scripts: {} })
    expect(writeFileMock).toHaveBeenCalled()
  })
})
