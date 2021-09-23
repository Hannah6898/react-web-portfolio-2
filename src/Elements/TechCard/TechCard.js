import React from "react";
import classes from "./TechCard.module.css";

const TechCard = (props) => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.icon}>{props.icon}</div>
        <div className={classes.heading}>{props.heading}</div>
      </div>
    </div>
  );
};

export default TechCard;
