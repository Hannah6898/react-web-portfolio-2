import React from "react";
import classes from "./TechCard.module.css";

const TechCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.icon}>{props.icon}</div>
        <p className={classes.heading}>{props.heading}</p>
      </div>
    </div>
  );
};

export default TechCard;
