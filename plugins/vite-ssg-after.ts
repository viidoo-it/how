import { genRssFeed } from "./lib/feed"

export function onFinished() {
  console.log("Generate RSS Feeds...")
  genRssFeed()
}
