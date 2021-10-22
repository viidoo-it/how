<script setup lang="ts">
import { DESCRIPTION } from "../config"
import posts from "../metadata.json"
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
