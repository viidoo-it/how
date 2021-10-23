import { createI18n } from "vue-i18n"
import { UserModule } from "../types"

const messages = Object.fromEntries(
  Object.entries(import.meta.globEager("../../locales/*.json")).map(
    ([key, value]) => [key.slice(14, -5), value.default]
  )
)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages,
  })

  app.use(i18n)
}
