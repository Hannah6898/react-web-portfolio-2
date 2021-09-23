import React from "react";
import classes from "./Tech.module.css";
import TechCard from "../../Components/TechCard/TechCard";
import {
  SiNetlify,
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiPython,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { AiFillGithub, AiFillApi } from "react-icons/ai";

const Tech = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Tech Stack</h3>

        <div className={classes.cardHolder}>
          <TechCard icon={<DiHtml5 />} heading="HTML" />
          <TechCard icon={<DiCss3 />} heading="CSS" />
          <TechCard icon={<SiJavascript />} heading="JavaScript" />
          <TechCard icon={<DiReact />} heading="React" />
          <TechCard icon={<FaBootstrap />} heading="Bootstrap" />
          <TechCard icon={<AiFillGithub />} heading="GitHub" />
          <TechCard icon={<AiFillApi />} heading="API" />
          <TechCard icon={<SiNetlify />} heading="Netlify" />
          <TechCard icon={<FiFigma />} heading="Figma" />
        </div>
        <div>
          <p>
            Over the next few weeks and months I plan on learning the following
            technologies{" "}
          </p>
        </div>

        <div className={classes.cardHolder}>
          <TechCard icon={<FaNodeJs />} heading="Node.js" />
          <TechCard icon={<SiTypescript />} heading="TypeScript" />
          <TechCard icon={<SiPython />} heading="Python" />
          <TechCard icon={<SiCsharp />} heading="C#" />
        </div>
      </div>
    </section>
  );
};

export default Tech;
