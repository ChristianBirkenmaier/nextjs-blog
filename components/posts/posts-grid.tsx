import { Post } from "types";
import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

const PostsGrid: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
