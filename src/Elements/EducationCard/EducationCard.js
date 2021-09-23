import React from "react";
import classes from "./EducationCard.module.css";

const EducationCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img
            src={props.img}
            alt={props.heading}
            className={props.className}
          ></img>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.headingContainer}>
            <h4>{props.heading}</h4>
            <a
              className={classes.link}
              href={props.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${props.heading} Certificate`}
            >
              View Certificate
            </a>
          </div>
          <div>
            <p>Issue date: {props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
