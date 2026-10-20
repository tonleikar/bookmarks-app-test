import type { Bookmark } from "./bookmark";

export function loadBookmarks(): Bookmark[] {
  return JSON.parse(localStorage.getItem("bookmarks") || "[]");
}

export function saveBookmarks(bookmarks: Bookmark[]) {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
