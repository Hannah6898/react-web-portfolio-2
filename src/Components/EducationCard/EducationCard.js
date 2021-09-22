import React from "react";
import classes from "./EducationCard.module.css";

const EducationCard = () => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img></img>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.headingContainer}>
            <h4>Title</h4>
            <a className={classes.link}>View Certificate</a>
          </div>
          <div>
            <p>Issue date:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
