import { Plugin } from "vite"
import { watchPosts } from "./lib/posts"

export default function PreVite(): Plugin {
  // const virtualFileId = "posts.json"

  return {
    name: "pre-vite-plugin",
    enforce: "pre",

    buildStart() {
      watchPosts()
    },

    // resolveId(id) {
    //   console.log("resolve", id)
    //   if (id === virtualFileId) {
    //     return virtualFileId
    //   }
    // },
    // load(id) {
    //   console.log("load", id)
    //   if (id === virtualFileId) {
    //     return `${JSON.stringify({ hello: 123 })}`
    //   }
    // },
  }
}

export { PreVite }
