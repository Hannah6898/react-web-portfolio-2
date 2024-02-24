import React from "react";
import classes from "./Hero.module.css";
import HeroImg from "../../assets/img/Hero2.png";

const Hero = () => {
  return (
    <section id="home">
      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.heading}>
            Software Engineer working with Java
          </h1>
          <h2 className={classes.subheading}>
            Skilled in Java, React and SQL{" "}
          </h2>
          <a href="#contact" aria-label="Contact button">
            <button className={classes.btn}>Let's Chat</button>
          </a>
        </div>
        <div className={classes.heroImg}>
          <img src={HeroImg} alt="Weather app and youtube clone"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
