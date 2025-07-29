<template>
  <div class="flex min-h-screen w-full justify-center border-t-4 border-t-primary py-10">
    <NuxtLink to="/" class="flex size-10 items-center justify-center rounded-full hover:bg-muted">
      <Icon name="ph:arrow-left" size="20" />
    </NuxtLink>

    <main class="container max-w-4xl pt-14">
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
