import React from "react";
import classes from "./Education.module.css";
import EducationCard from "../../Components/EducationCard/EducationCard";

const Education = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Education</h3>
        <div className={classes.container}>
          <div className={classes.leftSide}>
            <EducationCard />
          </div>
          <EducationCard />
          <div className={classes.leftSide}>
            <EducationCard />
          </div>
          <EducationCard />
        </div>
      </div>
    </section>
  );
};

export default Education;
