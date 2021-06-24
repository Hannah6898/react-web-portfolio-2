import React from "react";
import "./Home.css";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from "typewriter-effect";
import coder from "../img/coder.svg";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  arrow: {
    fontSize: "50px",
    textAlign: "center",
    color: "#da0463",
    "&:hover": {
      cursor: "pointer",
    },
    marginTop: "50px",
  },

  techIcon: {
    fontSize: "40px",
    margin: "25px 10px 20px 10px",
    color: "#da0463",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className="Home" id="home">
      <div className={classes.root}>
        <div class="grid">
          <article>
            <Typography variant="h4" color="primary" gutterBottom>
              Hi there!
            </Typography>
            <Typography variant="h2" gutterBottom>
              I'm Hannah Osibodu
            </Typography>
            <Typography variant="h5" gutterBottom>
              A Software Developer based in the UK
            </Typography>
            <Link
              href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className={classes.techIcon} />
            </Link>
            <Link
              href="https://github.com/Hannah6898"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className={classes.techIcon} />
            </Link>
            <Typography variant="body1">
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
