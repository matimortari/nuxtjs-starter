<template>
  <div class="p-4">
    <h1>
      Minimal Page
    </h1>

    <main class="my-4 text-muted-foreground [&>*]:mb-4">
      <p v-for="index in 3" :key="index">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque iste atque, hic porro officiis fugit quae deserunt nobis dolorum odit dignissimos consequatur esse maiores repellat impedit. Quae dolorum id rem?
      </p>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Minimal Page",
  meta: [{ name: "description", content: "Minimal page using fullscreen layout" }],
})

useSeoMeta({
  title: "Minimal Page",
  description: "Minimal page using fullscreen layout",
})

definePageMeta({
  layout: "fullscreen",
})
</script>
