'use client'

import { useRef, useState, type PointerEvent } from "react";
import styles from './bookmark.module.css';

type Bookmark = {
  id: string;
  title: string;
  url: string;
  tags: string[];
};

const tempBookmarks: Bookmark[] = [
  { id: '1', title: 'Example', url: 'https://example.com', tags: ['sports', 'commentary']},
  { id: '2', title: 'Another', url: 'https://example.org', tags: ['funny', 'news'] },
];

export default function Bookmark({
  id,
  title,
  url,
  tags,
}: Bookmark) {

  return (
    <div
      className={styles.bookmark}

    >
      {isOpen && (
        <div className={styles.content} >
          <h3>{title}</h3>
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
          <ul className="bookmark-tag-container">
            {tags.map((tag) => (
              <li key={tag} className="bookmark-tag">{tag}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
