#!/usr/bin/env node
import fs from "fs-extra"
import inquirer from "inquirer"
import ora from "ora"
import { PRESET_EXTRA_PACKAGES, PRESET_EXTRA_SCRIPTS, REPO_URL } from "./helpers/constants.js"
import { cloneRepoToTemp, promptAndInitGit } from "./helpers/git.js"
import { installDependencies, promptForPackageManager, updatePackageJson } from "./helpers/package-manager.js"
import { copyPresetFiles, copyRootTemplate } from "./helpers/template.js"
import { promptForProjectName, validateTargetDirectory } from "./helpers/utils.js"

async function run() {
  let tmpDir
  try {
    const projectName = await promptForProjectName()
    if (!projectName) {
      console.log("\nProject name is required. Please provide a valid name.\n")
      process.exit(1)
    }
    const targetDir = await validateTargetDirectory(projectName)
    if (!targetDir) {
      console.log(`\nFolder "${projectName}" already exists. Please choose another name or remove it.\n`)
      process.exit(1)
    }

    const spinnerClone = ora("Creating project root...").start()
    tmpDir = cloneRepoToTemp(REPO_URL)
    if (!tmpDir) {
      spinnerClone.fail("Failed to clone repository.")
      process.exit(1)
    }
    const rootTemplateDir = await copyRootTemplate(tmpDir, targetDir)
    spinnerClone.succeed()

    type Preset = "standard" | "with-i18n" | "with-tests"
    const { preset } = await inquirer.prompt<{ preset: Preset }>({
      type: "list",
      name: "preset",
      message: "Select a preset:",
      choices: [
        { name: "Standard", value: "standard" },
        { name: "With i18n", value: "with-i18n" },
        { name: "With Tests", value: "with-tests" },
      ],
    })

    await copyPresetFiles(tmpDir, preset, targetDir)
    await updatePackageJson(rootTemplateDir, targetDir, preset, {
      dependencies: PRESET_EXTRA_PACKAGES[preset]?.dependencies || {},
      devDependencies: PRESET_EXTRA_PACKAGES[preset]?.devDependencies || {},
      scripts: PRESET_EXTRA_SCRIPTS[preset] || {},
    })

    const { installDeps } = await inquirer.prompt({
      type: "confirm",
      name: "installDeps",
      message: "Install dependencies now?",
      default: true,
    })
    if (installDeps) {
      const pkgManager = await promptForPackageManager()
      const spinnerInstall = ora("Installing dependencies...").start()
      await installDependencies(targetDir, pkgManager)
      spinnerInstall.succeed("Dependencies installed!")
    }

    const { initGit } = await inquirer.prompt({
      type: "confirm",
      name: "initGit",
      message: "Initialize a Git repository?",
      default: true,
    })
    if (initGit) {
      const spinnerGit = ora("Initializing Git repo...").start()
      promptAndInitGit(targetDir)
      spinnerGit.succeed(`Git repository initialized for ${projectName}`)
    }

    console.log(`
  ✅ Project setup complete!

  Next steps:
    1. Navigate to your project:
     cd ${projectName}

     2. Migrate or push database schemas:
     npm run db:migrate
     npm run db:push

     3. Start the development server:
      npm run dev
  `)
  }
  catch (error) {
    console.error("Error:", error)
    process.exit(1)
  }
  finally {
    if (tmpDir && await fs.pathExists(tmpDir)) {
      await fs.remove(tmpDir)
    }
  }
}

run()
