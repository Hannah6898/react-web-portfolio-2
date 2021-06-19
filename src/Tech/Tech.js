import React from "react";
import "./Tech.css";
import { makeStyles } from "@material-ui/core/styles";
import { SiNetlify, SiJavascript, SiCsharp } from "react-icons/si";
import { DiHtml5, DiCss3, DiReact, DiSass, DiPython } from "react-icons/di";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillApi } from "react-icons/ai";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  techIcon: {
    fontSize: "45px",
    color: "#da0463",
  },
}));

export default function Tech() {
  const classes = useStyles();
  return (
    <div className="Tech" id="tech">
      <div className={classes.root}>
        <h1>Tech Stack</h1>
        <p>I have experence with the following technologies:</p>

        <div className="grid">
          <div>
            <DiHtml5 className={classes.techIcon} />
            <p>HTML</p>
          </div>
          <div>
            <DiCss3 className={classes.techIcon} />
            <p>CSS</p>
          </div>
          <div>
            <SiJavascript className={classes.techIcon} />
            <p>JavaScript</p>
          </div>
          <div>
            <FaBootstrap className={classes.techIcon} />
            <p>Bootstrap</p>
          </div>
          <div>
            <SiNetlify className={classes.techIcon} />
            <p>Netlify</p>
          </div>
          <div>
            <DiReact className={classes.techIcon} />
            <p>React</p>
          </div>
          <div>
            <AiFillGithub className={classes.techIcon} />
            <p>Github</p>
          </div>
          <div>
            <AiFillApi className={classes.techIcon} />
            <p>API</p>
          </div>
        </div>
        <p>
          Over the next few weeks and months I plan on learning the following
          technologies in order to expand my tech stack
        </p>
        <div className="grid">
          <div>
            <SiCsharp className={classes.techIcon} />
            <p>C#</p>
          </div>
          <div>
            <FaNodeJs className={classes.techIcon} />
            <p>Node.js</p>
          </div>
          <div>
            <DiPython className={classes.techIcon} />
            <p>Python.js</p>
          </div>
          <div>
            <DiSass className={classes.techIcon} />
            <p>Sass</p>
          </div>
        </div>
      </div>
    </div>
  );
}
