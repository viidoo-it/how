<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"

import { Logger } from "zeed"
const log = Logger("header")

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()

const lang = computed(() => {
  return locale.value
  // if (route.path.startsWith("/de")) {
  //   return "de"
  // }
  // return "en"
})

const otherLangRoute = computed(() => {
  const newPrefix = `/${lang.value === "de" ? "en" : "de"}`
  let newPath = `${newPrefix}${route.path.slice(3)}`

  // fixes trailing slash; depends on: ssgOptions: {dirStyle: "nested"}
  if (newPath.endsWith("/")) newPath = newPath.slice(0, -1)

  // log("newPath", newPath)
  if (
    router
      .getRoutes()
      .map((r) => r.path)
      .includes(newPath)
  ) {
    return newPath
  }
  return newPrefix
})
</script>

<template>
  <div class="app-header">
    <div class="app-header-title">
      <router-link :to="`/${lang}`">
        <img src="/icon-small.png" srcset="/icon-small@2x.png 2x" />
        how.viidoo.it
      </router-link>
    </div>
    <router-link class="app-header-menu" :to="`/${lang}`"> BLOG </router-link>
    <router-link class="app-header-menu" :to="`/${lang}/projects`">
      PROJECTS
    </router-link>
    <router-link class="app-header-locale" :to="otherLangRoute">
      <span :class="{ active: lang === 'de' }">de</span>
      |
      <span :class="{ active: !lang || lang === 'en' }">en</span>
    </router-link>
  </div>
</template>
