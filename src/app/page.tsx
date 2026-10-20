'use client'

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Bookmark, { type Bookmark as BookmarkType } from "./bookmark";
import AddBookmark from "./AddBookmark";
import Pagination from "./Pagination";
import { loadBookmarks } from "./bookmarks-storage";
import { JSX } from "react/jsx-runtime";

const PAGE_SIZE = 20;

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
  const [page, setPage] = useState(1);

  useEffect(() => {
    setBookmarks(loadBookmarks());
  }, []);

  const totalPages = Math.max(1, Math.ceil(bookmarks.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageBookmarks = bookmarks.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className={styles.page}>
      <AddBookmark onAdd={(bookmark) => setBookmarks((prev) => [...prev, bookmark])} />
      <DisplayBookmarks bookmarks={pageBookmarks} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}
