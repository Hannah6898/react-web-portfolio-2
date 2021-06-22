import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from "typewriter-effect";
import coder from "../img/coder.svg";

const useStyles = makeStyles(() => ({
  root: {},
  heading: {
    fontSize: "50px",
  },
  pink: {
    color: "#da0463",
  },
  arrow: {
    color: "#da0463",
    fontSize: "50px",
    textAlign: "center",
  },

  techIcon: {
    fontSize: "40px",
    color: "#da0463",
    margin: "25px 10px 0 10px",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="Home" id="home">
      <div className={classes.root}>
        <div class="grid">
          <article>
            <h3 className={classes.pink}>Hi there!</h3>
            <h1 className={classes.heading}>I'm Hannah Osibodu</h1>
            <h3>A Software Developer based in the UK</h3>
            <Link
              href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <AiFillLinkedin className={classes.techIcon} />
            </Link>
            <Link
              href="https://github.com/Hannah6898"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <AiFillGithub className={classes.techIcon} />
            </Link>
            <p>
              I have skills in
              <Typewriter
                className={classes.pink}
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
            </p>
          </article>
          <side>
            <img src={coder} alt="Coder"></img>
          </side>
          <div className="arrow">
            {" "}
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <IoIosArrowDown className={classes.arrow} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
