import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Projects</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard />
        </div>

        <ProjectCard />
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard />
        </div>
        <ProjectCard />
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
