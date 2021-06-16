import React from "react";
import "./Tech.css";
import { SiNetlify, SiJavascript, SiMaterialUi } from "react-icons/si";
import { DiHtml5, DiCss3, DiReact, DiSass } from "react-icons/di";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillApi } from "react-icons/ai";

export default function Tech() {
  return (
    <div className="Tech">
      <h1>Tech Stack</h1>
      <p>I have experence with the following technologies:</p>

      <div className="grid">
        <div className="tech-icon">
          <DiHtml5 />
          <p>HTML</p>
        </div>
        <div className="tech-icon">
          <DiCss3 />
          <p>CSS</p>
        </div>
        <div className="tech-icon">
          <SiJavascript />
          <p>JavaScript</p>
        </div>
        <div className="tech-icon">
          <FaBootstrap />
          <p>Bootstrap</p>
        </div>
        <div className="tech-icon">
          <SiNetlify />
          <p>Netlify</p>
        </div>
        <div className="tech-icon">
          <DiReact />
          <p>React</p>
        </div>
        <div className="tech-icon">
          <AiFillGithub />
          <p>Github</p>
        </div>
        <div className="tech-icon">
          <AiFillApi />
          <p>API</p>
        </div>
      </div>
      <p>
        Over the next few weeks and months I plan on leanring the following
        technologies in order to expand my tech stack
      </p>
      <div className="grid">
        <div className="tech-icon">
          <SiMaterialUi />
          <p>MaterialUI</p>
        </div>
        <div className="tech-icon">
          <FaNodeJs />
          <p>Node.js</p>
        </div>
        <div className="tech-icon">
          <DiSass />
          <p>Node.js</p>
        </div>
      </div>
    </div>
  );
}
