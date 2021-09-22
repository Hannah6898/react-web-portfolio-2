import React from "react";
import classes from "./Card.module.css";
import ReactChip from "../Chips/ReactChip";
import JSChip from "../Chips/JSChip";
import CSSChip from "../Chips/CssChip";
import BootstrapChip from "../Chips/BootstrapChip";
import APIChip from "../Chips/APIChip";

const Card = () => {
  return (
    <div>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img></img>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.headingContainer}>
            <h4>Title</h4>
            <a className={classes.link}>View on Github</a>
          </div>
          <div>
            <p>Text</p>
          </div>
        </div>
        <div className={classes.chips}>
          <ReactChip />
          <JSChip />
          <CSSChip />
          <BootstrapChip />
          <APIChip />
        </div>
      </div>
    </div>
  );
};

export default Card;
