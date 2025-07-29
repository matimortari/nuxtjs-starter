<template>
  <div class="flex flex-col items-center justify-center gap-8">
    <header class="my-4 flex flex-col items-center justify-center gap-2">
      <h2>{{ t("pages.signIn.title") }}</h2>
    </header>

    <div class="my-4 flex flex-col items-center gap-4">
      <p class="text-lg font-semibold text-muted-foreground">
        {{ t("pages.signIn.chooseProvider") }}
      </p>
      <div class="flex flex-row items-center gap-4">
        <button v-for="provider in providers" :key="provider.label" class="btn" @click="provider.click">
          <Icon :name="provider.icon" size="25" />
          <span>{{ provider.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { loggedIn } = useUserSession()
const router = useRouter()

const providers = [
  {
    label: "GitHub",
    icon: "simple-icons:github",
    click: async () => {
      await navigateTo("/api/auth/github", { external: true })
    },
  },
  {
    label: "Google",
    icon: "logos:google-icon",
    click: async () => {
      await navigateTo("/api/auth/google", { external: true })
    },
  },
]
useHead({
  title: t("pages.signIn.meta.title"),
  meta: [{ name: "description", content: t("pages.signIn.meta.description") }],
})

useSeoMeta({
  title: t("pages.signIn.meta.title"),
  description: t("pages.signIn.meta.description"),
})

watchEffect(async () => {
  if (loggedIn) {
    await router.push("/")
  }
})
</script>
