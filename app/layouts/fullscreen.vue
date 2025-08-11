<template>
  <div class="flex min-h-screen w-full justify-center border-t-4 border-t-primary py-10">
    <nuxt-link to="/" class="flex size-10 items-center justify-center rounded-full hover:bg-muted">
      <icon name="ph:arrow-left" size="20" />
    </nuxt-link>

    <main class="container max-w-4xl pt-14">
      <slot />
    </main>
  </div>
</template>
