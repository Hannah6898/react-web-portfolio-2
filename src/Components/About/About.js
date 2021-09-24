import React from "react";
import classes from "./About.module.css";
import AboutImg from "../../assets/img/AboutImg.png";
import PDF from "../../assets/pdf/HannahOsiboduCV.pdf";

const About = () => {
  return (
    <section id="about">
      <div className={classes.heading}>
        <h3>About</h3>
        <div className={classes.container}>
          <div className={classes.textContainer}>
            <p>
              I’m Hannah, a Software Developer based in Kent currently looking
              for my first junior developer role.
            </p>
            <p>
              I began learning to code at the beginning of this year and found
              the process of learning new technologies and creating solutions to
              difficult problems both exciting and rewarding.
            </p>
            <p>
              My long-term goal is to be able to efficiently turn great ideas
              into functioning products thorough absorbing as much as I can from
              those my senior and become the best developer I can be.
            </p>
            <p>
              In my spare time I like to roller skate, watch TV and movies, and
              watch Formula 1.
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
