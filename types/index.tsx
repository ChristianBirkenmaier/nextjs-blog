export type Post = {
  title: string;
  image: string;
  excerpt: string;
  date: string;
  slug: string;
  isFeatured: boolean;
  content?: string;
};

export type PostWithContent = Post & { content: string };
