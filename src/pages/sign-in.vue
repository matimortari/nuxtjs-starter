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
        <button class="btn bg-[#db4437] text-[#ebe8e8]" @click="signIn('google')">
          <Icon name="simple-icons:google" size="20" />
          {{ t("pages.signIn.googleSignIn") }}
        </button>
        <button class="btn bg-[#333333] text-[#ebe8e8]" @click="signIn('github')">
          <Icon name="simple-icons:github" size="20" />
          {{ t("pages.signIn.githubSignIn") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { signIn } = useAuth()

useHead({
  title: t("pages.signIn.meta.title"),
  meta: [{ name: "description", content: t("pages.signIn.meta.description") }],
})

useSeoMeta({
  title: t("pages.signIn.meta.title"),
  description: t("pages.signIn.meta.description"),
})

watchEffect(async () => {
  if (useAuth().data.value) {
    await navigateTo("/")
  }
})
</script>
