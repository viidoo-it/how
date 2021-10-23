import { UserModule } from "../types"
import AppImage from "../components/app-image.vue"

export const install: UserModule = ({ app, router, isClient }) => {
  app.component("AppImage", AppImage)
}
