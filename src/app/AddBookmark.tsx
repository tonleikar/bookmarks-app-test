import { useEffect, useRef, useState } from "react";
import styles from './AddBookmark.module.css';
import type { Bookmark } from "./bookmark";
import { loadBookmarks, saveBookmarks, loadExamples } from "./bookmarks-storage";

export default function AddBookmark({ onAdd }: { onAdd?: (bookmark: Bookmark) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newBookmark: Bookmark = {
      id: crypto.randomUUID(),
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      url: formData.get("url") as string,
      tags: (formData.get("tags") as string)
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    const bookmarks = loadBookmarks();
    saveBookmarks([...bookmarks, newBookmark]);
    onAdd?.(newBookmark);
    setIsOpen(false);
  };

  const handleLoadExamples = () => {
    const exampleBookmarks = loadExamples();
    const bookmarks = loadBookmarks();
    saveBookmarks([...bookmarks, ...exampleBookmarks]);
    exampleBookmarks.forEach((bookmark) => onAdd?.(bookmark));
    setIsOpen(false);
  };

  return (
    <div>
      <button className={styles.addBookmarkButton} onClick={() => setIsOpen(true)}>
        +
      </button>
      {isOpen && (
        <dialog
          ref={dialogRef}
          className={styles.dialog}
          onCancel={(e) => {
            e.preventDefault();
            setIsOpen(false);
          }}
          onClick={(e) => {
            if (e.target === dialogRef.current) {
              setIsOpen(false);
            }
          }}
        >
          <div className={styles.dialogButton} onClick={() => setIsOpen(false)}>✕</div>
          <div className={`${styles.dialogButton} ${styles.loadExamples}`} onClick={() => handleLoadExamples()}>?</div>
          <form onSubmit={handleSubmit} className={styles.content}>
            <h2 className={styles.title}>Add Bookmark</h2>
            <label className={styles.field}>
              Title
              <input type="text" name="title" required />
            </label>
            <label className={styles.field}>
              Description
              <textarea name="description" required></textarea>
            </label>
            <label className={styles.field}>
              URL
              <input type="url" name="url" required />
            </label>
            <label className={styles.field}>
              Tags (comma-separated)
              <input type="text" name="tags" />
            </label>
            <menu className={styles.menu}>
              <button type="submit" className={styles.submitButton}>Add</button>
              <button type="button" className={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancel</button>
            </menu>
          </form>
        </dialog>
      )}
    </div>
  );
}
