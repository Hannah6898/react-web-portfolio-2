import React from "react";
import classes from "./Projects.module.css";
import Card from "../../Components/Card/Card";

const Projects = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Projects</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          {" "}
          <Card />
        </div>

        <Card />
        <div className={classes.leftSide}>
          {" "}
          <Card />
        </div>
        <Card />
        <div className={classes.leftSide}>
          {" "}
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Projects;
