<script setup lang="ts">
import { useRoute, useRouter } from "vue-router"
import { DESCRIPTION } from "../config"
import posts from "../metadata.json"

const route = useRoute()
const router = useRouter()
// const posts2 = router
//   .getRoutes()
//   .filter((r) => r.path.startsWith(route.path))
//   .map((r) => r.path)
</script>

<template>
  <div class="prose">
    <p>
      {{ DESCRIPTION }}
    </p>
    <ul>
      <li v-for="post in posts">
        <router-link :to="post.href">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
