import PostsGrid from "@components/posts/posts-grid";
import { Post } from "types";
import classes from "./featured-posts.module.css";

const FeaturedPosts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
