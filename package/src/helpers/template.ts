import path from "node:path"
import fs from "fs-extra"

export async function copyRootTemplate(tmpDir: string, targetDir: string) {
  const rootTemplateDir = path.join(tmpDir, "package", "templates", "base")
  if (!(await fs.pathExists(rootTemplateDir))) {
    throw new Error(`Root template directory "${rootTemplateDir}" not found in the repo.`)
  }
  await fs.copy(rootTemplateDir, targetDir)
  return rootTemplateDir
}

export async function copyPresetFiles(tmpDir: string, preset: string, targetDir: string) {
  const presetDir = path.join(tmpDir, "package", "templates", preset)
  if (!(await fs.pathExists(presetDir))) {
    throw new Error(`Preset directory "${presetDir}" not found in the repo.`)
  }

  const presetRootFiles = await fs.readdir(presetDir)
  for (const file of presetRootFiles) {
    if (file === "app")
      continue
    await fs.copy(path.join(presetDir, file), path.join(targetDir, file), { overwrite: true })
  }

  const presetAppDir = path.join(presetDir, "app")
  if (await fs.pathExists(presetAppDir)) {
    fs.copy(presetAppDir, path.join(targetDir, "app"), { overwrite: true })
  }
}
