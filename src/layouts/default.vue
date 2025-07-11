<template>
  <div>
    <Navbar />

    <main class="min-h-screen">
      <slot />
    </main>

    <footer class="py-16 lg:py-4 text-center text-sm">
      <p>© {{ new Date().getFullYear() }} - {{ t("site.name") }}</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

useLocaleHead({
  dir: true,
  key: "id",
  seo: true,
  lang: true,
})
</script>
