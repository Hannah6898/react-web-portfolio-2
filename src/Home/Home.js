import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from "typewriter-effect";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  heading: {
    fontSize: "50px",
  },
  pink: {
    color: "#da0463",
  },
  arrow: {
    color: "#da0463",
    fontSize: "50px",
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
              strings: ["Hello", "World"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>

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
  );
}
