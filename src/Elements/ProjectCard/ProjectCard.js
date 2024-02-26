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
          rel="noreferrer"
          aria-label={`${props.heading} live site`}
        >
          <img
            className={props.className}
            src={props.img}
            alt={`${props.heading}`}
          ></img>
        </a>
        <div className={classes.textContainer}>
          <div className={classes.headingContainer}>
            <h4>{props.heading}</h4>
            <a
              className={classes.link}
              href={props.gitHub}
              target="_blank"
              rel="noreferrer"
              aria-label="View on Github"
            >
              View on Github
            </a>
          </div>
          <div className={classes.subheading}>
            <p>{props.subheading}</p>
          </div>
        </div>
        <div>
          <div className={classes.chipsContainer}>
            {props.html}
            {props.css}
            {props.js}
            {props.react}
            {props.node}
            {props.express}
            {props.mongoDB}
            {props.bootstrap}
            {props.api}
            {props.aws}
            {props.heroku}
            <a href={props.figmaLink} target="_blank" rel="noreferrer">
              {props.figma}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
