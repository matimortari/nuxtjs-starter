<template>
  <Navbar />

  <div class="min-h-screen">
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
useLocaleHead({
  dir: true,
  seo: true,
  lang: true,
})
</script>
