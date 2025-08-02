#!/usr/bin/env node

import { existsSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { confirm, input, select } from "@inquirer/prompts"
import simpleGit from "simple-git"

const REPO_URL = "https://github.com/matimortari/nuxtjs-boilerplate.git"

async function cloneRepo(branch, destination) {
  await simpleGit().clone(REPO_URL, destination, ["--branch", branch])
  await simpleGit(destination).removeRemote("origin")
}

async function askVersionChoice() {
  return await select({
    message: "Which version of the boilerplate do you want to clone?",
    choices: [
      { name: "Default", value: "main" },
      { name: "Include Tests", value: "with-tests" },
    ],
  })
}

async function askProjectName() {
  return await input({
    message: "Enter your project name:",
    default: "nuxt-app",
  })
}

async function askInitGit() {
  return await confirm({
    message:
      "Do you want to initialize a local Git repository in this project?",
    default: true,
  })
}

function updatePackageName(destination, newName) {
  const packageJsonPath = join(destination, "package.json")
  const packageData = JSON.parse(readFileSync(packageJsonPath, "utf8"))
  packageData.name = newName.replace(/\s+/g, "-").toLowerCase()
  writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2))
}

async function run() {
  const projectName = await askProjectName()
  const versionChoice = await askVersionChoice()
  const initGit = await askInitGit()
  const destination = join(process.cwd(), projectName)

  if (existsSync(destination)) {
    console.log(`The folder ${projectName} already exists.`)
    return
  }

  await cloneRepo(versionChoice, destination)
  updatePackageName(destination, projectName)

  rmSync(join(destination, ".git"), { recursive: true, force: true })
  if (initGit) {
    await simpleGit(destination).init()
    console.log("Initialized a local Git repository.")
  }
  else {
    console.log("No Git repository initialized.")
  }
}

run().catch((error) => {
  console.error("Error:", error)
  process.exit(1)
})
