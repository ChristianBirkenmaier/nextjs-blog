import AllPosts from "@components/posts/all-posts";
import { getAllPosts } from "lib/posts-util";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Post } from "types";

const AllPostsPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return { props: { posts: getAllPosts() }, revalidate: 1800 };
};

export default AllPostsPage;
