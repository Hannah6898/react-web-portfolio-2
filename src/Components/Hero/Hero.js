import React from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../assets/img/Hero2.png";

const Hero = () => {
  return (
    <section id="home">
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>
            Aspiring Junior Developer seeking role with React
          </h1>
          <h2 className={classes.subheading}>
            Skilled in React and JavaScript, currently looking for my first role
            within the tech industry{" "}
          </h2>
          <a href="#contact">
            <button className={classes.btn}>Let's Chat</button>
          </a>
        </div>
        <div className={classes.heroImg}>
          <img src={HeroImg} alt="Hero images"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
