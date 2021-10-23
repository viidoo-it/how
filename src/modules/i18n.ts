import { createI18n } from "vue-i18n"
import { Logger } from "zeed"
import { UserModule } from "../types"

const log = Logger("i18n")

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../../locales/*.json")).map(
    ([key, value]) => [key.slice(14, -5), value.default]
  )
)

var i18n: any

export function switchLocale(lang: string) {
  log(`locale from ${i18n.global.locale.value} to ${lang}`)
  i18n.global.locale.value = lang
}

export const install: UserModule = ({ app }) => {
  log("messages", messages)

  i18n = createI18n({
    legacy: false,
    locale: "en",
    messages,
  })

  app.use(i18n)
}
