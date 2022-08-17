import FeaturedPosts from "@components/home-page/featured-posts";
import Hero from "@components/home-page/hero";
import { getFeaturedPosts } from "lib/posts-util";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Post } from "types";
// import styles from "../styles/Home.module.css";

const Home: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return { props: { posts: getFeaturedPosts() }, revalidate: 1800 };
};

export default Home;
