import path from "node:path"
import fs from "fs-extra"
import inquirer from "inquirer"

export function getProjectNameFromArgs() {
  const args = process.argv.slice(2)
  const nIndex = args.findIndex(a => a === "-n" || a === "--name")
  if (nIndex !== -1 && args.length > nIndex + 1) {
    return args[nIndex + 1]
  }
  return null
}

export async function promptForProjectName() {
  let projectName = getProjectNameFromArgs()
  if (!projectName) {
    const { projectName: answerName } = await inquirer.prompt({
      type: "input",
      name: "projectName",
      message: "Enter your new project folder name:",
      default: "my-nuxt-app",
      validate: input => (input ? true : "Project folder name cannot be empty"),
    })
    projectName = answerName
  }
  return projectName
}

export async function validateTargetDirectory(projectName: string) {
  const targetDir = path.resolve(process.cwd(), projectName)
  const exists = await fs.pathExists(targetDir)
  if (exists) {
    const { overwrite } = await inquirer.prompt({
      type: "confirm",
      name: "overwrite",
      message: `Directory "${projectName}" already exists. Overwrite?`,
      default: false,
    })

    if (!overwrite)
      return null

    await fs.remove(targetDir)
  }

  return targetDir
}
