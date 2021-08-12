import React from "react";
import "./Tech.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  SiNetlify,
  SiJavascript,
  SiGatsby,
  SiNextDotJs,
  SiPython,
} from "react-icons/si";
import { DiHtml5, DiCss3, DiReact } from "react-icons/di";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillApi } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
    padding: "20px",
  },
  techIcon: {
    fontSize: "45px",
    color: "#da0463",
  },
  header: {
    marginBottom: "10px",
  },
}));

export default function Tech() {
  const classes = useStyles();
  return (
    <div className="tech" id="tech">
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          Tech Stack
        </Typography>
        <Typography variant="body1">
          I have experence with the following technologies:
        </Typography>

        <div className="grid">
          <div>
            <DiHtml5 className={classes.techIcon} />
            <Typography variant="body1">HTML</Typography>
          </div>
          <div>
            <DiCss3 className={classes.techIcon} />
            <Typography variant="body1">CSS</Typography>
          </div>
          <div>
            <SiJavascript className={classes.techIcon} />
            <Typography variant="body1"> JavaScript</Typography>
          </div>
          <div>
            <FaBootstrap className={classes.techIcon} />
            <Typography variant="body1">Bootstrap</Typography>
          </div>
          <div>
            <SiNetlify className={classes.techIcon} />
            <Typography variant="body1">Netlify</Typography>
          </div>
          <div>
            <DiReact className={classes.techIcon} />
            <Typography variant="body1">React</Typography>
          </div>
          <div>
            <AiFillGithub className={classes.techIcon} />
            <Typography variant="body1">Github</Typography>
          </div>
          <div>
            <AiFillApi className={classes.techIcon} />
            <Typography variant="body1">API</Typography>
          </div>
        </div>
        <Typography variant="body1">
          Over the next few weeks and months I plan on learning the following
          technologies in order to expand my tech stack
        </Typography>
        <div className="grid">
          <div>
            <SiGatsby className={classes.techIcon} />
            <Typography variant="body1">Gatsby</Typography>
          </div>

          <div>
            <SiNextDotJs className={classes.techIcon} />
            <Typography variant="body1">Next.js</Typography>
          </div>
          <div>
            <SiPython className={classes.techIcon} />
            <Typography variant="body1">Python</Typography>
          </div>
          <div>
            <FaNodeJs className={classes.techIcon} />
            <Typography variant="body1">Node.js</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
