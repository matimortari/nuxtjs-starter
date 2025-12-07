<template>
  <Navbar />

  <div class="min-h-screen">
    <main>
      <slot />
    </main>

    <footer>
      <div class="container mx-auto py-4 text-center">
        <p class="text-sm text-muted-foreground">
          &copy; {{ new Date().getFullYear() }} Nuxt.js Starter. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
