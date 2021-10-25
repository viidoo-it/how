<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { useI18n } from "vue-i18n"
import AppFooter from "./components/app-footer.vue"
import AppHeader from "./components/app-header.vue"
import { DESCRIPTION, ICON_URL } from "./config"

const { t } = useI18n()

const title = t("title")

useHead({
  title,
  meta: [
    { property: "og:title", content: title },
    { property: "og:image", content: ICON_URL },
    {
      name: "description",
      content: DESCRIPTION,
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@holtwick" },
  ],
})

// const rr = useRouter()
//   .getRoutes()
//   .map((r) => r.path)
</script>

<template>
  <template v-if="$route.meta.pure">
    <router-view></router-view>
  </template>
  <template v-else>
    <app-header></app-header>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </template>
</template>
