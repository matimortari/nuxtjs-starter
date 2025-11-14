# Nuxt.js Starter 💚🏔️

This is a monorepo setup for a Nuxt.js starter project, which includes a web application and shared packages.

#### Table of Contents

- [📦 What's Inside?](#whats-inside)
- [🛠️ Key Features](#key-features)
- [🏁 Getting Started](#getting-started)
- [📜 Scripts](#scripts)
- [🔐 Environment Variables](#environment-variables)
- [📬 Contact](#contact)

## What's Inside?

#### Web Application (`web/`)

- The web app that demonstrates the project’s capabilities.

#### Command Line Interface (`package/`)

- The CLI tool, packaged as a npm module, to scaffold new projects using this starter.

## Key Features

This starter includes multiple templates to kick-start different project types:

#### Standard Template

- **Nuxt 4** with **Vue** composition API and **Nitro** server engine.
- **TypeScript 6**.
- **ESLint 9**.
- **Tailwind CSS 4**.
- **Fonts** support via **@nuxt/fonts**.
- **Icons** support via **@nuxt/icon**.
- **OAuth** authentication with Google and GitHub via **nuxt-auth-utils**.
- **Pinia** for state management via **@pinia/nuxt**.
- **Prisma** for database management.
- **Vercel Analytics**.

#### i18n Template

- **Internationalization** support via **@nuxtjs/i18n**.

#### Test Template

- **Vitest** for unit and integration testing.
- **Playwright** for end-to-end testing.

## Getting Started

- Create a new project using the starter script:

```bash
npx @matimortari/nuxtjs-starter
```

- Navigate to the project directory and install dependencies:

```bash
cd <project-name>
npm install
```

- Migrate or push the database schema:

```bash
npm run db:migrate
# or
npm run db:push
```

- Start the development server:

```bash
npm run dev
```

> ⚠️ Ensure your `.env` file is properly configured before running database commands.

## Scripts

The following scripts are available to manage the application:

```bash
npm run dev         # Run the app in development mode
npm run build       # Build the app for production
npm run postinstall # Create the .nuxt directory and generate types
npm run lint        # Run ESLint to check for code quality issues
npm run lint:fix    # Run ESLint and automatically fix issues
npm run db:push     # Push schema changes directly to the database
npm run db:migrate  # Apply migrations to the database and generate the Prisma client
npm run db:studio   # Open Prisma Studio in the browser for database management
```

## Environment Variables

Be sure to configure the necessary environment variables for the application.
For a list of required environment variables and instructions, refer to the `.env.example` file included in the project template.

## Contact

Feel free to reach out to discuss collaboration opportunities or to say hello!

- [**My Email**](mailto:matheus.felipe.19rt@gmail.com)
- [**My LinkedIn Profile**](https://www.linkedin.com/in/matheus-mortari-19rt)
- [**My GitHub Profile**](https://github.com/matimortari)

## License

This project is licensed under the [**MIT License**](./LICENSE).
