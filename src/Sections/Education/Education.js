import React from "react";
import classes from "./Education.module.css";
import EducationCard from "../../Components/EducationCard/EducationCard";
import AWS from "../../assets/img/AWS.png";
import SheCodeBasic from "../../assets/img/SheCodesBasic.png";
import SheCodePlus from "../../assets/img/SheCodesPlus.png";
import SheCodeReact from "../../assets/img/SheCodesReact.png";

const Education = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Education</h3>
        <div className={classes.container}>
          <div className={classes.leftSide}>
            <EducationCard
              className={classes.portrait}
              img={AWS}
              heading="AWS Cloud Practitioner"
              date="Jul 2021"
              link="https://www.credly.com/badges/8e0778f5-0e4a-4ece-beec-4fb8997a53dc/public_url"
            />
          </div>

          <EducationCard
            className={classes.landscape}
            img={SheCodeReact}
            heading="SheCodes React"
            date="Apr 2021"
            link="https://www.shecodes.io/certificates/bfa3e58394a09554e62af5db21128917"
          />

          <div className={classes.leftSide}>
            <EducationCard
              className={classes.landscape}
              img={SheCodePlus}
              heading="SheCodes Plus"
              date="Mar 2021"
              link="https://www.shecodes.io/certificates/d5e8d27ccd85b518a996a83aa132d98b"
            />
          </div>
          <EducationCard
            className={classes.landscape}
            img={SheCodeBasic}
            heading="SheCodes Basics"
            date="Feb 2021"
            link="https://www.shecodes.io/certificates/02ed5586804bd6c78fc1b9d58bc8ea47"
          />
        </div>
      </div>
    </section>
  );
};

export default Education;
