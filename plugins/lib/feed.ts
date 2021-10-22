import { Feed } from "feed"
import fs from "fs"
import { resolve } from "path"
import { parseDate } from "zeed"
import { parseHTML } from "zeed-dom"
import { ICON_URL, BASE_URL } from "../../src/config"
import { getPosts } from "./posts"

const rssPath = resolve(process.cwd(), "dist/feed")

export function genRssFeed() {
  const feed = new Feed({
    title: "how.viidoo.it",
    description: "Developer diary for viidoo.it and other projects.",
    id: BASE_URL,
    link: BASE_URL,
    language: "en",
    image: ICON_URL,
    favicon: ICON_URL,
    copyright: "Copyright (c) Dirk Holtwick <dirk.holtwick@gmail.com>",
    feedLinks: {
      json: `${BASE_URL}/feed.json`,
      atom: `${BASE_URL}/feed.atom`,
      rss: `${BASE_URL}}/feed.xml`,
    },
  })

  getPosts(true).forEach((post) => {
    const file = resolve(process.cwd(), `dist${post.href}/index.html`)
    const rendered = fs.readFileSync(file, "utf-8")
    const dom = parseHTML(rendered)
    const content = dom.querySelector(".post-body")?.outerHTML
    feed.addItem({
      title: post.title,
      id: `${BASE_URL}${post.href}`,
      link: `${BASE_URL}${post.href}`,
      description: post.description,
      content,
      author: [
        {
          name: "Dirk Holtwick", //post.data.author,
          email: "dirk.holtwick@gmail.com",
          link: "https://holtwick.de", // post.data.twitter
        },
      ],
      date: parseDate(post.data.date),
    })
  })

  fs.writeFileSync(`${rssPath}.xml`, feed.rss2(), "utf-8")
  fs.writeFileSync(`${rssPath}.atom`, feed.atom1(), "utf-8")
  fs.writeFileSync(`${rssPath}.json`, feed.json1(), "utf-8")
}
