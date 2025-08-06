<template>
  <div class="p-4">
    <h1>
      {{ t("pages.minimal.title") }}
    </h1>

    <main class="my-4 text-muted-foreground [&>*]:mb-4">
      <p v-for="index in 3" :key="index">
        {{ t("pages.minimal.paragraph") }}
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t("pages.minimal.meta.title"),
  meta: [{ name: "description", content: t("pages.minimal.meta.description") }],
})

useSeoMeta({
  title: t("pages.minimal.meta.title"),
  description: t("pages.minimal.meta.description"),
})

definePageMeta({
  layout: "fullscreen",
})
</script>
