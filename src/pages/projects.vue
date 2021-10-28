<script setup lang="ts">
import { computed } from "vue"
import { useI18n } from "vue-i18n"
import { useRoute, useRouter } from "vue-router"
import { toHumanReadableUrl } from "zeed"
import { projects } from "../data"
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
    <div class="project-list">
      <template v-for="p in projects">
        <div class="project-card" :data-project="p.name">
          <div class="project-title">{{ p.title }}</div>
          <div class="project-description">{{ p.description }}</div>
          <div class="project-url">
            <a :href="p.url">{{ toHumanReadableUrl(p.url) }}</a>
          </div>
          <div class="project-tags" v-if="p.tags">
            <template v-for="tag in p.tags">
              <span class="project-tags-item">{{ tag }}</span>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
