<template>
  <div class="flex flex-col items-center p-4 md:p-12">
    <header class="flex flex-col items-center gap-4 text-center">
      <icon name="simple-icons:nuxt" size="50" class="text-primary" />
      <h1>
        Nuxt.js Starter
      </h1>

      <p class="max-w-2xl text-lg text-primary">
        A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly.
      </p>
    </header>

    <hr class="my-8 w-full md:w-4/5">

    <section class="flex flex-col items-center text-center">
      <p class="mb-4 max-w-2xl border-b border-primary pb-4 text-center text-sm">
        The Base Package includes everything you need to start a Nuxt project: TypeScript, ESLint, Tailwind CSS, Pinia, OAuth authentication, Prisma, and analytics integration. It's the perfect foundation to build upon.
      </p>

      <p class="my-2 text-center text-lg font-semibold text-muted-foreground">
        Extend your project with these additional options:
      </p>

      <div class="flex w-full flex-col items-center gap-4 text-sm md:flex-row md:justify-between md:gap-12">
        <div class="flex flex-col items-center border-b border-primary py-4 text-center">
          <h4>
            i18n Support
          </h4>
          <span>Internationalization via @nuxtjs/i18n.</span>
        </div>

        <div class="flex flex-col items-center border-b border-primary py-4 text-center">
          <h4>
            Testing Suite
          </h4>
          <span>Vitest for unit and integration tests.</span>
          <span>Playwright for end-to-end testing.</span>
        </div>
      </div>
    </section>

    <hr class="my-8 w-full md:w-4/5">

    <section class="flex flex-col items-center gap-2 text-center">
      <h2>
        Getting Started
      </h2>
      <p class="max-w-2xl">
        Quickly scaffold your project using our CLI tool and start building.
      </p>

      <div class="relative w-full max-w-2xl">
        <button class="absolute right-2 top-2 text-[#d4d4d4] hover:text-primary" @click="copyToClipboard">
          <icon name="ph:copy" size="20" />
        </button>
        <pre class="font-mono overflow-auto rounded-md bg-secondary p-4 text-left text-sm text-[#d4d4d4]">
npx @matimortari/nuxtjs-starter
cd &lt;project-name&gt;
npm install
npm run db:migrate  <span class="text-[#6b7280]"># or npm run db:push</span>
npm run dev
</pre>
      </div>
    </section>

    <hr class="my-8 w-full md:w-4/5">
  </div>
</template>

<script setup lang="ts">
const commands = `npx @matimortari/nuxtjs-starter
cd <project-name>
npm install
npm run db:migrate
npm run dev`

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(commands)
  }
  catch (error: any) {
    console.error("Failed to copy text: ", error)
  }
}

useHead({
  title: "Nuxt.js Starter",
  link: [{ rel: "canonical", href: "https://matimortari-nuxtjs-starter.vercel.app" }, { rel: "icon", href: "/favicon.ico" }],
  meta: [
    { name: "description", content: "A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly." },
    { property: "og:title", content: "Nuxt.js Starter" },
    { property: "og:description", content: "A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly." },
    { property: "og:type", content: "website" },
    { property: "og:image", content: "https://matimortari-nuxtjs-starter.vercel.app/og-image.png" },
    { property: "og:url", content: "https://matimortari-nuxtjs-starter.vercel.app" },
    { name: "google-site-verification", content: "2j0bcfhh8FCYPpzFylzbiPjl3Pa0X7lMuG060ctsCsA" },
  ],
})

useSeoMeta({
  title: "Nuxt.js Starter",
  description: "A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly.",
  ogTitle: "Nuxt.js Starter",
  ogDescription: "A full-stack starter setup for Nuxt 4. Built with modern tools and best practices to help you get up and running quickly.",
  ogImage: "https://matimortari-nuxtjs-starter.vercel.app/og-image.png",
  ogUrl: "https://matimortari-nuxtjs-starter.vercel.app",
})
</script>
