import { ViteSSGContext } from "vite-ssg"

export type UserModule = (ctx: ViteSSGContext) => void

declare global {
  function $t(v: string): string
}
