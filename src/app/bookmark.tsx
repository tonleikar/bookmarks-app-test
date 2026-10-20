'use client'

import { useEffect, useRef, useState } from "react";
import styles from './bookmark.module.css';

export type Bookmark = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export default function Bookmark({
  title,
  description,
  url,
  tags,
}: Bookmark) {
  const [isOpen, setIsOpen] = useState(false);
  const [unfoldStage, setUnfoldStage] = useState<'unfold-1' | 'unfold-2'>('unfold-1');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playSound = (src: string) => {
    new Audio(src).play().catch(() => {});
  };

  useEffect(() => {
    if (isOpen) {
      setUnfoldStage('unfold-1');
      dialogRef.current?.showModal();

      const timer = setTimeout(() => setUnfoldStage('unfold-2'), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleBookmarkClick = () => {
    playSound('/paper-open.mp3');
    setIsOpen(true);
  };

  const handleBookmarkHover = () => {
    const rustle = new Audio('/rustle.mp3');
    rustle.playbackRate = 0.8 + Math.random() * 0.4;
    rustle.play().catch(() => {console.log('Error playing back sound')});
  };

  const requestClose = () => {
    if (unfoldStage === 'unfold-1') return;

    setUnfoldStage('unfold-1');
    closeTimerRef.current = setTimeout(() => {
      playSound('/paper-close.mp3');
      setIsOpen(false);
      dialogRef.current?.close();
    }, 200);
  };

  return (
    <>
      <div
        className={`${styles.bookmark} ${isOpen ? styles.hidden : ''}`}
        onClick={handleBookmarkClick}
        onMouseEnter={handleBookmarkHover}
      >
        <div className={styles.bookmarkInitial}>
          { title.slice(0, 1).toUpperCase() }
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={`${styles.dialog} ${unfoldStage === 'unfold-1' ? styles.dialogUnfolding : ''}`}
        onCancel={(e) => {
          e.preventDefault();
          requestClose();
        }}
        onClick={(e) => {
          if (e.target === dialogRef.current) {
            requestClose();
          }
        }}
      >
        {unfoldStage === 'unfold-2' && <div className={styles.closeDialogButton} onClick={requestClose}>✕</div>}
        {unfoldStage === 'unfold-2' && (
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <a className={styles.url} href={url} target="_blank" rel="noreferrer">
              {url}
            </a>
            <p className={styles.description}>{description}</p>
            <div className={styles.tagsSection}>
              <span className={styles.tagsLabel}>tags:</span>
              <ul className={styles.bookmarkTagContainer}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.bookmarkTag}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
