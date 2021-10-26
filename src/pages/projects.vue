<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"
import posts from "../metadata.json"

const route = useRoute()
const router = useRouter()
// const posts2 = router
//   .getRoutes()
//   .filter((r) => r.path.startsWith(route.path))
//   .map((r) => r.path)

const { t, locale } = useI18n()
const currentPosts = computed(() =>
  posts.filter((p) => (p.lang ?? "en") === locale.value)
)
</script>

<template>
  <div class="prose">
    <h1>{{ t("projects.title") }}</h1>
    <p>To come...</p>
  </div>
</template>
