import Image from "next/image";
import classes from "./hero.module.css";

const Hero: React.FC<{}> = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image
            src={"/images/site/photo.jpeg"}
            alt="An image showing the author"
            width={256}
            height={256}
            layout="responsive"
          />
        </div>
        <h1>Hi, I`m Chris</h1>
        <p>I blog about web development</p>
      </section>
    </>
  );
};

export default Hero;
