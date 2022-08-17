import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post, PostWithContent } from "types";

const postsDirectory = path.join(process.cwd(), "posts");

const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // removes the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { slug: postSlug, content, ...data } as PostWithContent;
};

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles
    .map((pF) => getPostData(pF))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const getFeaturedPosts = () => {
  return getAllPosts().filter((post) => post.isFeatured);
};

export const getPost = (slug: string) => {
  return getAllPosts().find((post) => post.slug === slug);
};
