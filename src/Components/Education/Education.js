import React from "react";
import classes from "./Education.module.css";
import EducationCard from "../../Elements/EducationCard/EducationCard";
import AWS from "../../assets/img/AWS.png";
import SheCodeBasic from "../../assets/img/SheCodesBasic.png";
import SheCodePlus from "../../assets/img/SheCodesPlus.png";
import SheCodeReact from "../../assets/img/SheCodesReact.png";
import UdemyMERNStack from "../../assets/img/UdemyMERNStack.png";

const Education = () => {
  return (
    <section id="education">
      <div className={classes.heading}>
        <h3>Education</h3>
        <div className={classes.container}>
          <span className={classes.card}>
            <EducationCard
              className={classes.imgClass}
              img={UdemyMERNStack}
              heading="The MERN Fullstack Guide"
              date="Oct 2023"
              link="https://www.udemy.com/certificate/UC-1eb5ce72-e478-48b4-88fe-e7d6efcc3ff1/"
            />
          </span>
          <div className={classes.leftSide}>
            <span className={classes.card}>
              <EducationCard
                className={classes.portrait}
                img={AWS}
                heading="AWS Cloud Practitioner"
                date="Jul 2021"
                link="https://www.credly.com/badges/8e0778f5-0e4a-4ece-beec-4fb8997a53dc/public_url"
              />
            </span>
          </div>
          <span className={classes.card}>
            <EducationCard
              className={classes.landscape}
              img={SheCodeReact}
              heading="SheCodes React"
              date="Apr 2021"
              link="https://www.shecodes.io/certificates/bfa3e58394a09554e62af5db21128917"
            />
          </span>
          <div className={classes.leftSide}>
            <span className={classes.card}>
              <EducationCard
                className={classes.landscape}
                img={SheCodePlus}
                heading="SheCodes Plus"
                date="Mar 2021"
                link="https://www.shecodes.io/certificates/d5e8d27ccd85b518a996a83aa132d98b"
              />
            </span>
          </div>
          <span className={classes.card}>
            <EducationCard
              className={classes.landscape}
              img={SheCodeBasic}
              heading="SheCodes Basics"
              date="Feb 2021"
              link="https://www.shecodes.io/certificates/02ed5586804bd6c78fc1b9d58bc8ea47"
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Education;
