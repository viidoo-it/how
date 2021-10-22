import Vue from "@vitejs/plugin-vue"
import LinkAttributes from "markdown-it-link-attributes"
import Prism from "markdown-it-prism"
import { defineConfig } from "vite"
import Markdown from "vite-plugin-md"
import "vite-ssg"
import PreVite from "./plugins/vite-plugin-pre"
import { onFinished } from "./plugins/vite-ssg-after"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    PreVite(),

    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/antfu/vite-plugin-md
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      // wrapperClasses: markdownWrapperClasses,
      // headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          pattern: /^https?:\/\//,
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        })
      },
    }),
  ],

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "prettify", //"minify",
    dirStyle: "nested", // nice pageName/index.html for less server config to strip .html
    onFinished,
  },

  optimizeDeps: {
    include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
    exclude: [],
  },
})
