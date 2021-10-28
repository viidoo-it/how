interface ProjectInfo {
  name: string
  title: string
  description: string
  url: string
  openSource: boolean
  tags: string[]
}

export const projects: ProjectInfo[] = [
  {
    name: "receipts",
    title: "Receipts App",
    description: "Smart document management for finances",
    url: "https://www.receipts-app.com/",
    openSource: false,
    tags: ["app", "finance", "documents", "macos"],
  },
  {
    name: "pdfify",
    title: "PDFfify App",
    description: "Create searchable PDF and save disk space",
    url: "https://pdfify.app/",
    openSource: false,
    tags: ["app", "pdf", "documents", "macos"],
  },
  {
    name: "zeed",
    title: "Zeed",
    description: "Simple Typescript foundation library",
    url: "https://github.com/holtwick/zeed/",
    openSource: true,
    tags: ["javascript", "node", "browser"],
  },
  {
    name: "zeed-dom",
    title: "Zeed-DOM",
    description: "Lightweight offline DOM and parser",
    url: "https://github.com/holtwick/zeed-dom/",
    openSource: true,
    tags: ["javascript", "node"],
  },
]
