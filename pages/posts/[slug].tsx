import PostContent from "@components/posts/post-detail/post-content";
import { getAllPosts, getPost, getPostFiles } from "lib/posts-util";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Post, PostWithContent } from "types";

const PostDetailPage: NextPage<{
  post: PostWithContent;
}> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />;
    </>
  );
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug;
  if (!slug || typeof slug !== "string") {
    return { notFound: true };
  }
  const post = getPost(slug);
  if (!post) {
    return { notFound: true };
  }
  return { props: { post }, revalidate: 600 };
};

export const getStaticPaths: GetStaticPaths = () => {
  const postFileNames = getPostFiles();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default PostDetailPage;
