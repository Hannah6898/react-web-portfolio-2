import React from "react";
import "./Home.css";
import Arrow from "./Arrow";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from "typewriter-effect";
import coder from "../img/coder.svg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  techIcon: {
    fontSize: "40px",
    margin: "25px 10px 20px 10px",
    color: "#da0463",
  },

  header: {
    marginBottom: "10px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="Home" id="home">
      <div>
        <div className="container">
          <article>
            <Typography
              component={"div"}
              variant="h4"
              color="primary"
              className={classes.header}
            >
              Hi there!
            </Typography>
            <Typography
              component={"div"}
              variant="h2"
              className={classes.header}
            >
              I'm Hannah Osibodu
            </Typography>
            <Typography
              component={"div"}
              variant="h5"
              className={classes.header}
            >
              A Software Developer based in the UK
            </Typography>
            <Link
              href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
              target="_blank"
              rel="noreferrer"
              aria-label="Linkedin"
            >
              <AiFillLinkedin className={classes.techIcon} />
            </Link>
            <Link
              href="https://github.com/Hannah6898"
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <AiFillGithub className={classes.techIcon} />
            </Link>
            <Typography component={"div"} variant="body1">
              I have skills in
              <Typewriter
                options={{
                  strings: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "React",
                    "Bootstrap",
                    "Material UI",
                    "GitHub",
                    "API's",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </article>
          <div>
            <img src={coder} alt="Coder"></img>
          </div>
        </div>

        <Arrow />
      </div>
    </div>
  );
}
