<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import pkg from "../../package.json"

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="app-footer">
    Written by <a href="https://holtwick.de?ref=how">Dirk Holtwick</a> | |
    <a href="https://holtwick.de/imprint?ref=how">Imprint</a> |
    <a href="https://twitter.com/holtwick">Twitter</a> |
    <a href="https://github.com/holtwick">GitHub</a>
    <template v-if="false">
      |
      <a @click="toggleDark()" href="#toggleDarkMode">{{
        isDark ? "Light" : "Dark"
      }}</a>
    </template>
    | <a href="https://github.com/viidoo-it/how">v{{ pkg.version }}</a>
  </div>
</template>
