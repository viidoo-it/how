import { ViteSSG } from "vite-ssg"
import App from "./app.vue"
import { setIsClient } from "./config"
import { switchLocale } from "./modules/i18n"
import { routes } from "./router"
import "./styles/main.styl"

import { Logger } from "zeed"
const log = Logger("main")

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, { routes }, (ctx) => {
  const { app, isClient, router, routes, initialState } = ctx

  router.beforeEach((to) => {
    log(`lang = ${to.meta.lang}`)
    switchLocale((to?.meta?.lang as any) || "en")
  })

  setIsClient(isClient)

  // install all modules under `modules/`
  Object.values(import.meta.globEager("./modules/*.ts")).map((i) =>
    i.install?.(ctx)
  )
})
