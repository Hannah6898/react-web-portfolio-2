import React from "react";
import classes from "./Tech.module.css";
import TechCard from "../../Elements/TechCard/TechCard";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaNodeJs, FaJava, FaAws, FaGitlab} from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { PiFileSql } from "react-icons/pi";
import { SiJavascript, SiTypescript, SiSpringboot, SiExpress, SiMongodb, SiJunit5, SiTeamcity } from "react-icons/si";

const Tech = () => {
  return (
    <section id="tech">
      <div className={classes.heading}>
        <h3>Tech Stack</h3>

        <div className={classes.cardHolder}>
        <TechCard icon={<FaJava/>} heading="Java" />
        <TechCard icon={<DiReact />} heading="React" />
          <TechCard icon={<PiFileSql  />} heading="SQL" />
          <TechCard icon={<SiSpringboot />} heading="SpringBoot" />
          <TechCard icon={<DiHtml5 />} heading="HTML" />
          <TechCard icon={<DiCss3 />} heading="CSS" />
          <TechCard icon={<SiJavascript />} heading="JavaScript" />
          <TechCard icon={<FaNodeJs />} heading="Node.js" />
          <TechCard icon={<SiExpress />} heading="Express.js" />
          <TechCard icon={<SiMongodb />} heading="MongoDB" />
          <TechCard icon={<SiJunit5 />} heading="JUnit" />
          <TechCard icon={<SiTeamcity />} heading="TeamCity" />
          <TechCard icon={<FaAws />} heading="AWS" />
          <TechCard icon={<AiFillGithub />} heading="GitHub" />
          <TechCard icon={<FaGitlab/>} heading="GitLab" />
          <TechCard icon={<FiFigma />} heading="Figma" />
        </div>
        <div>
          <p>
            Over the next few weeks and months I plan on learning the following
            technologies{" "}
          </p>
        </div>

        <div className={classes.cardHolder}>
          <TechCard icon={<SiTypescript />} heading="TypeScript" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
