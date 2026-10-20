'use client'

import styles from "./page.module.css";
import Bookmark, { type Bookmark as BookmarkType } from "./bookmark";

function loadBookmarks() {
  return JSON.parse(localStorage.getItem("bookmarks") || "[]");
}

function saveBookmarks(bookmarks: BookmarkType[]) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

const exampleBookmarks: BookmarkType[] = [
  { id: "1", title: "Example", description: "An example website", url: "https://example.com", tags: ["sports", "commentary"] },
  { id: "2", title: "Another", description: "Another example website", url: "https://example.org", tags: ["funny", "news"] },
  { id: "3", title: "MDN Web Docs", description: "Web platform docs", url: "https://developer.mozilla.org", tags: ["dev", "reference"] },
  { id: "4", title: "React", description: "A JS library for UIs", url: "https://react.dev", tags: ["dev", "frontend"] },
  { id: "5", title: "Next.js", description: "The React framework", url: "https://nextjs.org", tags: ["dev", "frontend"] },
  { id: "6", title: "TypeScript", description: "JavaScript with types", url: "https://www.typescriptlang.org", tags: ["dev", "language"] },
  { id: "7", title: "GitHub", description: "Code hosting platform", url: "https://github.com", tags: ["dev", "tools"] },
  { id: "8", title: "Stack Overflow", description: "Q&A for programmers", url: "https://stackoverflow.com", tags: ["dev", "community"] },
  { id: "9", title: "Hacker News", description: "Tech news aggregator", url: "https://news.ycombinator.com", tags: ["news", "tech"] },
  { id: "10", title: "Wikipedia", description: "The free encyclopedia", url: "https://wikipedia.org", tags: ["reference"] },
  { id: "11", title: "YouTube", description: "Video sharing platform", url: "https://youtube.com", tags: ["video", "entertainment"] },
  { id: "12", title: "Spotify", description: "Music streaming", url: "https://spotify.com", tags: ["music"] },
  { id: "13", title: "Figma", description: "Design tool", url: "https://figma.com", tags: ["design", "tools"] },
  { id: "14", title: "Notion", description: "Notes and docs", url: "https://notion.so", tags: ["productivity"] },
  { id: "15", title: "Reddit", description: "Forums and discussion", url: "https://reddit.com", tags: ["community", "news"] },
  { id: "16", title: "Twitter", description: "Social media", url: "https://twitter.com", tags: ["social"] },
  { id: "17", title: "Amazon", description: "Online shopping", url: "https://amazon.com", tags: ["shopping"] },
  { id: "18", title: "Netflix", description: "Streaming service", url: "https://netflix.com", tags: ["video", "entertainment"] },
  { id: "19", title: "BBC News", description: "News site", url: "https://bbc.co.uk/news", tags: ["news"] },
  { id: "20", title: "ESPN", description: "Sports news", url: "https://espn.com", tags: ["sports", "news"] },
];

saveBookmarks(exampleBookmarks);
const storedBookmarks = loadBookmarks();

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bookmarkContainer}>
        {exampleBookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} {...bookmark} />
        ))}
      </div>
    </div>
  );
}
