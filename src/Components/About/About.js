import React from "react";
import classes from "./About.module.css";
import AboutImg from "../../assets/img/AboutImg.png";
import PDF from "../../assets/pdf/Hannah Osibodu CV.pdf";

const About = () => {
  return (
    <section id="about">
      <div className={classes.heading}>
        <h3>About</h3>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <p>Hello I’m Hannah a Software Engineer based in London.</p>
            <p>
              I am proficient in Java and experienced in React, JavaScript, HTML
              and CSS. Furthermore I have extensive experience in DevOps and
              Agile methodologies.{" "}
            </p>
            <p>
              I’m currently working as a Backend Engineer at NatWest; my
              long-term goal is work as a Full Stack Engineer combining my
              strong interest for front-end technologies such as React; and work
              for an organisation where I can leverage my technical skills to
              deliver high-impact solutions.
            </p>
            <p>
              {" "}
              I also want to incorporate my love for travel and seek a role that
              will allow me to live and work in different countries.
            </p>
            <a
              href={PDF}
              target="_blank"
              rel="noreferrer"
              aria-label="Read my CV"
            >
              <button className={classes.btn}>Read my CV</button>
            </a>
          </div>
          <div className={classes.img}>
            <img src={AboutImg} alt="Portrait of Hannah"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
