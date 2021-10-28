interface ProjectInfo {
  name: string
  title: string
  description: string
  url: string
  tags: string[]
}

export const projects: ProjectInfo[] = [
  {
    name: "receipts",
    title: "Receipts App",
    description: "Smart document management for finances",
    url: "https://www.receipts-app.com/",
    tags: ["app", "finance", "documents", "macos"],
  },
  {
    name: "pdfify",
    title: "PDFfify App",
    description: "Create searchable PDF and save disk space",
    url: "https://pdfify.app/",
    tags: ["app", "pdf", "documents", "macos"],
  },
  {
    name: "zeed",
    title: "Zeed",
    description: "Simple Typescript foundation library",
    url: "https://github.com/holtwick/zeed/",
    tags: ["opensource", "javascript", "node", "browser"],
  },
  {
    name: "zeed-dom",
    title: "Zeed-DOM",
    description: "Lightweight offline DOM and parser",
    url: "https://github.com/holtwick/zeed-dom/",
    tags: ["opensource", "javascript", "node"],
  },
  {
    name: "briefing",
    title: "Briefing",
    description: "Secure direct video group chat ",
    url: "https://brie.fi/ng",
    tags: ["opensource", "javascript", "webrtc"],
  },
  {
    name: "peer-school",
    title: "Peer.School",
    description: "Simple P2P teaching platform",
    url: "https://peer.school",
    tags: ["opensource", "javascript", "webrtc", "school"],
  },
  {
    name: "zerva",
    title: "Zerva",
    description: "Simple event driven services",
    url: "https://github.com/holtwick/zerva",
    tags: ["opensource", "javascript", "node"],
  },
  {
    name: "hostic",
    title: "Hostic",
    description: "Static website generator",
    url: "https://github.com/holtwick/hostic",
    tags: ["opensource", "javascript", "node"],
  },
  {
    name: "twindy",
    title: "Twindy",
    description: "CSS framework in Stylus",
    url: "https://github.com/holtwick/twindy",
    tags: ["opensource", "css", "stylus"],
  },
  {
    name: "twindy-headless",
    title: "Twindy-Headless",
    description: "Vue3 UI components for Twindy",
    url: "https://github.com/holtwick/twindy-headless",
    tags: ["opensource", "twindy", "vue"],
  },
]
