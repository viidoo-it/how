import CheapWatch from "cheap-watch"
import fs from "fs"
import matter from "gray-matter"
import path, { resolve, basename } from "path"

const postsFolder = resolve(process.cwd(), "src/posts")
const metadataPath = resolve(process.cwd(), "src/metadata.json")

const cache = new Map()

function getPost(file: string, postDir: string, asFeed: boolean = false) {
  const fullPath = path.join(postDir, file)
  const timestamp = fs.statSync(fullPath).mtimeMs

  const cached = cache.get(fullPath)
  if (cached && timestamp === cached.timestamp) {
    return cached.post
  }

  const src = fs.readFileSync(fullPath, "utf-8")

  const { data, excerpt, content } = matter(src, { excerpt: true })
  const name = basename(file).replace(/\.md$/, "")
  const slug = data.slug || name
  const post = {
    title: data.title,
    slug,
    name,
    href: `/posts/${slug}`,
    date: formatDate(data.date),
    excerpt,
    data,
    content,
  }
  cache.set(fullPath, {
    timestamp,
    post,
  })
  return post
}

export function getPosts(asFeed = false) {
  const postDir = postsFolder
  return fs
    .readdirSync(postDir)
    .filter((path) => path.endsWith(".md"))
    .map((file) => getPost(file, postDir, asFeed))
    .sort((a, b) => b.date.time - a.date.time)
}

function formatDate(date: any) {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }
}

function genMetadata() {
  fs.writeFileSync(
    path.resolve(metadataPath),
    JSON.stringify(getPosts(), null, 2)
  )
}

export async function watchPosts() {
  console.log("watch")
  genMetadata()

  if (process.env.NODE_ENV === "production") {
    return
  }

  // @ts-ignore
  const watcher = new CheapWatch({
    dir: postsFolder,
    filter: ({ path }) => path.endsWith(".md"),
    debounce: 50,
  })
  await watcher.init()
  watcher.on("+", genMetadata)
  watcher.on("-", genMetadata)
}
