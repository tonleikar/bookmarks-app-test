import type { Bookmark } from "./bookmark";

export const exampleBookmarks: Bookmark[] = [
  {
    id: "example-1",
    title: "MDN Web Docs",
    description: "Reference and guides for HTML, CSS, JavaScript, and web APIs.",
    url: "https://developer.mozilla.org",
    tags: ["docs", "web", "reference"],
  },
  {
    id: "example-2",
    title: "React Documentation",
    description: "Official docs for building user interfaces with React.",
    url: "https://react.dev",
    tags: ["react", "docs", "frontend"],
  },
  {
    id: "example-3",
    title: "Next.js Documentation",
    description: "Guides and API reference for the Next.js framework.",
    url: "https://nextjs.org/docs",
    tags: ["nextjs", "docs", "frontend"],
  },
  {
    id: "example-4",
    title: "TypeScript Handbook",
    description: "The official guide to TypeScript's types and tooling.",
    url: "https://www.typescriptlang.org/docs/handbook/intro.html",
    tags: ["typescript", "docs"],
  },
  {
    id: "example-5",
    title: "GitHub",
    description: "Host and review code, manage projects, and build software.",
    url: "https://github.com",
    tags: ["git", "tools"],
  },
  {
    id: "example-6",
    title: "Stack Overflow",
    description: "Q&A community for programmers.",
    url: "https://stackoverflow.com",
    tags: ["community", "help"],
  },
  {
    id: "example-7",
    title: "Can I Use",
    description: "Browser support tables for web platform features.",
    url: "https://caniuse.com",
    tags: ["web", "reference"],
  },
  {
    id: "example-8",
    title: "CSS-Tricks",
    description: "Articles, guides, and snippets for CSS and front-end development.",
    url: "https://css-tricks.com",
    tags: ["css", "frontend"],
  },
  {
    id: "example-9",
    title: "npm",
    description: "Search and browse packages for the Node.js ecosystem.",
    url: "https://www.npmjs.com",
    tags: ["node", "packages"],
  },
  {
    id: "example-10",
    title: "Node.js Documentation",
    description: "Official API docs for the Node.js runtime.",
    url: "https://nodejs.org/en/docs",
    tags: ["node", "docs", "backend"],
  },
  {
    id: "example-11",
    title: "Figma",
    description: "Collaborative interface design and prototyping tool.",
    url: "https://www.figma.com",
    tags: ["design", "tools"],
  },
  {
    id: "example-12",
    title: "Vercel",
    description: "Deployment platform for frontend frameworks and static sites.",
    url: "https://vercel.com",
    tags: ["hosting", "tools"],
  },
  {
    id: "example-13",
    title: "Tailwind CSS",
    description: "A utility-first CSS framework for building custom designs.",
    url: "https://tailwindcss.com",
    tags: ["css", "frontend"],
  },
  {
    id: "example-14",
    title: "ESLint",
    description: "Pluggable linter for identifying and fixing JavaScript issues.",
    url: "https://eslint.org",
    tags: ["tools", "javascript"],
  },
  {
    id: "example-15",
    title: "Prettier",
    description: "Opinionated code formatter supporting many languages.",
    url: "https://prettier.io",
    tags: ["tools", "formatting"],
  },
  {
    id: "example-16",
    title: "Vite",
    description: "Fast frontend build tool and dev server.",
    url: "https://vitejs.dev",
    tags: ["tools", "build"],
  },
  {
    id: "example-17",
    title: "Jest",
    description: "Delightful JavaScript testing framework.",
    url: "https://jestjs.io",
    tags: ["testing", "javascript"],
  },
  {
    id: "example-18",
    title: "Playwright",
    description: "End-to-end testing for modern web apps.",
    url: "https://playwright.dev",
    tags: ["testing", "automation"],
  },
  {
    id: "example-19",
    title: "Docker Docs",
    description: "Documentation for building and running containers.",
    url: "https://docs.docker.com",
    tags: ["devops", "docs"],
  },
  {
    id: "example-20",
    title: "PostgreSQL Documentation",
    description: "Official manual for the PostgreSQL database.",
    url: "https://www.postgresql.org/docs",
    tags: ["database", "docs"],
  },
  {
    id: "example-21",
    title: "Regex101",
    description: "Build, test, and debug regular expressions online.",
    url: "https://regex101.com",
    tags: ["tools", "regex"],
  },
  {
    id: "example-22",
    title: "Excalidraw",
    description: "Virtual whiteboard for sketching diagrams with a hand-drawn feel.",
    url: "https://excalidraw.com",
    tags: ["design", "tools"],
  },
  {
    id: "example-23",
    title: "Hacker News",
    description: "Tech and startup news curated by the community.",
    url: "https://news.ycombinator.com",
    tags: ["news", "community"],
  },
  {
    id: "example-24",
    title: "DevDocs",
    description: "Combined API documentation for many languages and frameworks.",
    url: "https://devdocs.io",
    tags: ["docs", "reference"],
  },
  {
    id: "example-25",
    title: "web.dev",
    description: "Guidance from Google on building modern, high-quality web apps.",
    url: "https://web.dev",
    tags: ["web", "docs"],
  },
];

export function loadBookmarks(): Bookmark[] {
  return JSON.parse(localStorage.getItem("bookmarks") || "[]");
}

export function saveBookmarks(bookmarks: Bookmark[]) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

export function loadExamples(): Bookmark[] {
  return exampleBookmarks;
}
