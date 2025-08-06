<template>
  <div ref="dropdownRef" class="w-auto">
    <button class="btn" @click="isOpen = !isOpen">
      <Icon name="ph:translate" size="20" />
      <span>{{ t(`locale.${$i18n.locale}`) }}</span>
      <Icon name="ph:caret-down" size="20" class="transition-all duration-500" :class="{ 'rotate-180': isOpen }" />
    </button>

    <ul v-if="isOpen" class="overlay absolute right-4 mt-1">
      <li v-for="language in $i18n.availableLocales" :key="language" class="btn" @click="() => setLanguage(language)">
        {{ t(`locale.${language}`) }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

const isOpen = ref(false)

const dropdownRef = ref<HTMLElement | null>(null)

function setLanguage(language: string) {
  locale.value = language
  localStorage.setItem("nuxt-lang", language)
  isOpen.value = false
  document.documentElement.dir = t("locale.dir")
}

onMounted(() => {
  const savedLang = localStorage.getItem("nuxt-lang")
  if (savedLang) {
    locale.value = savedLang
    document.documentElement.dir = t("locale.dir")
  }

  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as Node
    if (dropdownRef.value && !dropdownRef.value.contains(target)) {
      isOpen.value = false
    }
  })
})
</script>
