type Bookmark = {
  id: string;
  title: string;
  url: string;
  tags: string[];
};

const testBookmark: Bookmark = {
  id: crypto.randomUUID(),
  title: "Google",
  url: "www.google.com",
  tags: ['search', 'homepage', 'fav']
};

console.log(testBookmark);
