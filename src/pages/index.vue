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
    <p>
      {{ t("description") }}
    </p>
    <ul>
      <li v-for="post in currentPosts">
        <router-link :to="`/${locale}${post.href}`">{{
          post.title
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
