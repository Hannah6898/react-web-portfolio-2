import React from "react";
import classes from "./ProjectCard.module.css";

const ProjectCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <a
          className={classes.imgContainer}
          href={props.liveSite}
          target="_blank"
        >
          <img src={props.img} alt="{props.heading}"></img>
        </a>
        <div className={classes.textContainer}>
          <div className={classes.headingContainer}>
            <h4>{props.heading}</h4>
            <a className={classes.link} href={props.gitHub} target="_blank">
              View on Github
            </a>
          </div>
          <div className={classes.subheading}>
            <p>{props.subheading}</p>
          </div>
        </div>
        <div className={classes.chips}>{props.chips}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
