'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Bookmark, { type Bookmark as BookmarkType } from "./bookmark";
import AddBookmark from "./AddBookmark";
import { loadBookmarks } from "./bookmarks-storage";
import { JSX } from "react/jsx-runtime";

function DisplayBookmarks({ bookmarks }: { bookmarks: BookmarkType[] }): JSX.Element {
  return (
    <div className={styles.bookmarkContainer}>
      {bookmarks.length === 0 ? (
        <p>Add a bookmark to get started.</p>
      ) : (
        bookmarks.map((bookmark: BookmarkType) => (
          <Bookmark key={bookmark.id} {...bookmark} />
        ))
      )}
    </div>
  );
}

export default function Home() {
  const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

  useEffect(() => {
    setBookmarks(loadBookmarks());
  }, []);

  return (
    <div className={styles.page}>
      <AddBookmark onAdd={(bookmark) => setBookmarks((prev) => [...prev, bookmark])} />
      <DisplayBookmarks bookmarks={bookmarks} />
    </div>
  );
}
