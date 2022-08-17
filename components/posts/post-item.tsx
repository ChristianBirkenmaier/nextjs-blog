import Image from "next/image";
import Link from "next/link";
import { Post } from "types";
import classes from "./post-item.module.css";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  const linkHref = `/posts/${post.slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkHref}>
        <a>
          <div className={classes.image}>
            <Image
              layout="responsive"
              src={imagePath}
              alt={post.title}
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>{formattedDate}</time>
            <p>{post.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
