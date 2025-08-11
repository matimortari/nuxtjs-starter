<template>
  <div>
    <Navbar />

    <main class="min-h-screen">
      <slot />
    </main>

    <footer class="py-16 text-center text-sm lg:py-4">
      <p>© {{ new Date().getFullYear() }} - Nuxt.js Boilerplate</p>
    </footer>
  </div>
</template>
