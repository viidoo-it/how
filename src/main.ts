// register vue composition api globally
import { ViteSSG } from "vite-ssg"
import App from "./app.vue"
import AppImage from "./components/app-image.vue"
import { routes } from "./router"
import { setIsClient } from "./config"

import "./styles/main.styl"

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  const { app, isClient, router, routes, initialState } = ctx

  setIsClient(isClient)

  // register global
  app.component("AppImage", AppImage)

  // install all modules under `modules/`
  // Object.values(import.meta.globEager("./modules/*.ts")).map((i) =>
  //   i.install?.(ctx)
  // )
})
