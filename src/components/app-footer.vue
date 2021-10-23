<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { useI18n } from "vue-i18n"
import pkg from "../../package.json"

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { t, locale, availableLocales } = useI18n()
</script>

<template>
  <div class="app-footer">
    {{ t("madeBy") }} <a href="https://holtwick.de?ref=how">Dirk Holtwick</a> |
    <a href="https://holtwick.de/imprint?ref=how">{{ t("imprint") }}</a> |
    <a href="https://twitter.com/holtwick">Twitter</a> |
    <a href="https://github.com/holtwick">GitHub</a>
    <template v-if="false">
      |
      <a @click="toggleDark()" href="#toggleDarkMode">{{
        isDark ? "Light" : "Dark"
      }}</a>
    </template>
    | {{ locale }} |
    <a href="https://github.com/viidoo-it/how">v{{ pkg.version }}</a>
  </div>
</template>
