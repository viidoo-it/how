<script setup lang="ts">
import { useHead } from "@vueuse/head"
import AppFooter from "./components/app-footer.vue"
import AppHeader from "./components/app-header.vue"
import { DESCRIPTION, ICON_URL } from "./config"

useHead({
  title: "How we do it. Developer diary.",
  meta: [
    { property: "og:title", content: "Anthony Fu" },
    { property: "og:image", content: ICON_URL },
    {
      name: "description",
      content: DESCRIPTION,
    },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@holtwick" },
  ],
})
</script>

<template>
  <app-header></app-header>
  <div class="app-content">
    <router-view></router-view>
  </div>
  <app-footer></app-footer>
</template>
