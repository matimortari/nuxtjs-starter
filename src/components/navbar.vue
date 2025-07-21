<template>
  <nav class="flex w-full flex-row items-center justify-between gap-2 p-4">
    <div class="flex flex-row items-center gap-2">
      <NuxtLink to="/">
        <Icon name="simple-icons:nuxt" size="35" class="text-primary" />
      </NuxtLink>

      <div v-if="session" class="flex flex-row items-center gap-2">
        <p class="text-sm">
          {{ t("pages.index.greeting") }},
          <span class="font-semibold text-primary">{{ session.user?.name }}</span>
        </p>
        <button class="btn" @click="() => signOut({ callbackUrl: '/' })">
          {{ t("pages.index.logout") }}
        </button>
      </div>

      <div v-else class="flex flex-row items-center gap-2">
        <p class="text-sm">
          {{ t("pages.index.unauthenticated") }}
        </p>
        <NuxtLink to="/sign-in" class="btn">
          {{ t("pages.index.signIn") }}
        </NuxtLink>
      </div>
    </div>

    <div class="flex flex-row items-center gap-2">
      <a href="https://github.com/matimortari/nuxtjs-boilerplate" class="btn">
        <Icon name="simple-icons:github" size="20" />
      </a>

      <button class="btn" @click="toggleTheme">
        <Icon :name="themeIcon" size="20" />
      </button>

      <LanguageSelector />
    </div>
  </nav>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { data: session, signOut } = useAuth()
const { toggleTheme, themeIcon } = useTheme()
</script>
