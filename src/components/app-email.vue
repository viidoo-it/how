<template>
  <div class="prose email">
    <h1 class="post-title">{{ r?.meta?.post?.title }}</h1>
    <div class="post-body"><router-view></router-view></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import { useHead } from "@vueuse/head"

const r = useRoute()

// import meta from "./metadata.json"
useHead({
  title: r?.meta?.post?.title,
})

// console.log(r?.meta?.post)
// const { title, slug } = r?.meta?.post as any
// const slug = computed(() => r?.meta?.post?.slug || "")
</script>
