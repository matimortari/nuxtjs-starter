<template>
  <nav class="flex w-full flex-row items-center justify-between gap-2 p-4">
    <div class="flex flex-row items-center gap-2">
      <NuxtLink to="/">
        <Icon name="simple-icons:nuxt" size="35" class="text-primary" />
      </NuxtLink>

      <div v-if="userStore.user" class="flex flex-row items-center gap-2">
        <p class="text-sm">
          {{ t("pages.index.greeting") }},
          <span class="font-semibold text-primary">{{ userStore.user?.name }}</span>
        </p>
        <button class="btn" @click="signOut">
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
import { useUserStore } from '~/lib/stores/user-store'

const { t } = useI18n()
const { clear } = useUserSession()
const { toggleTheme, themeIcon } = useTheme()
const userStore = useUserStore()

onMounted(async () => {
  try {
    await userStore.getUser()
  }
  catch (error) {
    console.error("Failed to fetch user:", error)
  }
})

function signOut() {
  clear()
  window.location.href = "/"
}
</script>
