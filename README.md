# Nuxt.js Boilerplate 🚀

A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly.

#### Table of Contents

- [🛠️ Key Features](#-key-features)
- [🏁 Getting Started](#-getting-started)
- [🛢️ Database](#-database)
- [🛡️ Linting](#-linting)
- [🔐 Environment Variables](#-environment-variables)
- [📬 Contact](#-contact)

## 🛠️ Key Features

- **Nuxt 4** with **Vue** composition API and **Nitro** server engine.
- **TypeScript 6**.
- **ESLint 9**.
- **Tailwind CSS** via **@nuxtjs/tailwindcss"**.
- **Google Fonts** via **@nuxtjs/google-fonts**.
- **Iconify Icons** via **@nuxt/icon**.
- **OAuth** authentication with Google and GitHub via **nuxt-auth-utils**.
- **Pinia** for state management via **@pinia/nuxt**.
- **@nuxtjs/i18n** for internationalization.
- **Prisma** for database management.
- **Vercel Analytics**.

## 🏁 Getting Started

- Create a new project using the starter script:

```bash
npx @matimortari/nuxtjs-starter
```

- Navigate to the project directory and install dependencies:

```bash
cd <project-name>
npm install
```

- Use the following scripts to develop, build, and manage the project:

```bash
npm run dev         # Run Nuxt app in development mode
npm run build       # Build the app for production
npm run preview     # Preview the generated static site
npm run start       # Start production server (after build)
npm run postinstall # Nuxt internal prepare script (auto-run)
```

## 🛢️ Database

Use the following commands to manage your Prisma schema and development database:

```bash
npm run db:push     # Push schema changes to the database without generating migrations
npm run db:dev      # Run development migrations and generate the Prisma client
npm run db:deploy   # Apply migrations in a production environment (.env.production)
npm run db:studio   # Open Prisma Studio to inspect and edit data
```

## 🛡️ Linting

- To lint your codebase for style issues and ensure code quality, use the following commands:

```bash
npm run lint        # Check code style with ESLint
npm run lint:fix    # Auto-fix linting issues
```

## 🔐 Environment Variables

Be sure to configure the necessary environment variables for the application.
For a list of required environment variables and instructions, refer to the [ENVIRONMENT.md](ENVIRONMENT.md) file.

## 📬 Contact

Feel free to reach out to discuss collaboration opportunities or to say hello!

- [**My Email**](mailto:matheus.felipe.19rt@gmail.com)
- [**My LinkedIn Profile**](https://www.linkedin.com/in/matheus-mortari-19rt)
- [**My GitHub Profile**](https://github.com/matimortari)
