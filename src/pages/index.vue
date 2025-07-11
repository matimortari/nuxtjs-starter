<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <header class="flex w-full flex-col items-center gap-4 p-4">
      <div class="flex flex-col items-center text-center gap-2">
        <Icon name="simple-icons:nuxt" size="50" class="text-primary" />
        <h1>{{ t("pages.index.title") }}</h1>
        <h4 class="text-primary">
          {{ t("pages.index.description") }}
        </h4>
      </div>

      <div class="flex flex-row items-center gap-2">
        <NuxtLink to="/" class="btn">
          {{ t("pages.index.link") }}
        </NuxtLink>
        <NuxtLink to="/minimal" class="btn">
          {{ t("pages.minimal.link") }}
        </NuxtLink>
      </div>
    </header>

    <hr class="w-[80%] border-primary">

    <div class="flex flex-col items-center text-center gap-4">
      <h3>
        {{ t("pages.index.taglineStart") }}
        <span class="text-primary">{{ t("pages.index.taglineHighlight") }}</span>
        {{ t("pages.index.taglineEnd") }}
      </h3>
    </div>

    <div class="flex flex-col items-center gap-2">
      <ul class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <li
          v-for="(feature, index) in features" :key="index"
          class="flex flex-row items-center gap-2 text-xs lg:text-sm font-semibold"
        >
          <Icon :name="feature.icon" :size="20" class="text-primary" />
          <span>{{ t(feature.label) }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("pages.index.meta.title"),
  meta: [{ name: "description", content: t("pages.index.meta.description") }],
})

useSeoMeta({
  title: t("pages.index.meta.title"),
  description: t("pages.index.meta.description"),
})

const features = [
  { icon: "simple-icons:nuxtdotjs", label: "pages.index.features.nuxt3" },
  { icon: "simple-icons:typescript", label: "pages.index.features.typescript" },
  { icon: "simple-icons:tailwindcss", label: "pages.index.features.tailwind" },
  { icon: "simple-icons:iconify", label: "pages.index.features.nuxtIcons" },
  { icon: "ph:text-aa", label: "pages.index.features.googleFonts" },
  { icon: "mdi:fruit-pineapple", label: "pages.index.features.pinia" },
  { icon: "ph:translate", label: "pages.index.features.i18n" },
  { icon: "ph:lock-key-open", label: "pages.index.features.nuxtAuth" },
  { icon: "simple-icons:prisma", label: "pages.index.features.prisma" },
  { icon: "simple-icons:eslint", label: "pages.index.features.eslint" },
  { icon: "simple-icons:vercel", label: "pages.index.features.vercelAnalytics" },
]
</script>
