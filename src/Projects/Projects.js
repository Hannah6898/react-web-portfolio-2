import React from "react";
import "./Projects.css";
import WeatherApp from "../img/weather-app.png";
import Portfolio from "../img/Portfolio.png";
import Dictionary from "../img/Dictionary.png";
import Youtube from "../img/Youtube-clone.png";
import DrumKit from "../img/DrumKit.png";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GoLink } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "0 auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },

  accordion: {
    margin: "10px",
    backgroundColor: "#da0463",
    boxShadow: "none",
    borderRadius: "10px",
    color: "white",
  },

  expand: {
    color: "white",
  },

  description: {
    textAlign: "left",
    paddingLeft: "20px",
  },
  techIcon: {
    fontSize: "30px",
  },
  block: {
    display: "block",
  },
  link: {
    fontSize: "25px",
    margin: "10px",
    color: "white",
  },
}));

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="Projects" id="projects">
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Weather App</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | React | API | Bootstrap | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <img
                src={WeatherApp}
                className="weatherapp"
                alt="WeatherApp"
              ></img>
            </div>
            <Typography variant="body1" className={classes.description}>
              A weather application which dynamically displays the present
              weather of the users desired location and current location, using
              Open Weather Map API. Through this project I became skilled in
              using Bootstrap, API's, real- life development workflow, hosting
              and JavaScript.
              <br />
              <Link
                href="https://fervent-galileo-89d4fe.netlify.app/"
                target="_blank"
                rel="noreferrer"
                aria-label="See Live"
              >
                {" "}
                <GoLink className={classes.link} />
              </Link>
              <Link
                href="https://github.com/Hannah6898/react-weather-app"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                {" "}
                <AiFillGithub className={classes.link} />
              </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Dictionary</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | React | API | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.block}>
            <div>
              <img
                src={Dictionary}
                className="dictionary"
                alt="Dictionary"
              ></img>
            </div>

            <div>
              <Typography className={classes.description}>
                I used my knowledge of React to build a working dictionary app
                incorporating coding best practices, along with the most popular
                tools and technologies.
                <br />
                <Link
                  href="https://gallant-boyd-0ddfe2.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="See Live"
                >
                  {" "}
                  <GoLink className={classes.link} />
                </Link>
                <Link
                  href="https://github.com/Hannah6898/react-dictionary"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  {" "}
                  <AiFillGithub className={classes.link} />
                </Link>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Portfolio</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | React | Material UI | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.block}>
            <div>
              <img src={Portfolio} className="dictionary" alt="portfolio"></img>
            </div>
            <div>
              <Typography className={classes.description}>
                Made my personal portfolio using React and Material UI.
                Furthermore, I used smooth scroll to create seamless navigation
                between components.
                <br />
                <Link
                  href="https://www.hannahosibodu.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="See Live"
                >
                  {" "}
                  <GoLink className={classes.link} />
                </Link>
                <Link
                  href="https://github.com/Hannah6898/react-web-portfolio-2"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  {" "}
                  <AiFillGithub className={classes.link} />
                </Link>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Youtube Clone</Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.block}>
            <div>
              <img src={Youtube} className="dictionary" alt="Youtube"></img>
            </div>
            <div>
              <Typography className={classes.description}>
                Developed a site clone of the YouTube homepage using HTML, CSS
                and JavaScript.
                <br />
                <Link
                  href="https://elegant-sinoussi-498e6f.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="See Live"
                >
                  {" "}
                  <GoLink className={classes.link} />
                </Link>
                <Link
                  href="https://github.com/Hannah6898/Youtube-Clone"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  {" "}
                  <AiFillGithub className={classes.link} />
                </Link>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Typography className={classes.heading}>
              JavaScript Drum Kit
            </Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.block}>
            <div>
              <img src={DrumKit} className="dictionary" alt="DrumKit"></img>
            </div>
            <div>
              <Typography className={classes.description}>
                Created a JavaScript Drum kit using Keyboard events and styled
                using CSS grid.
                <br />
                <Link
                  href="https://dreamy-kalam-3b5e13.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="See Live"
                >
                  {" "}
                  <GoLink className={classes.link} />
                </Link>
                <Link
                  href="https://github.com/Hannah6898/JavaScript-Drum-Kit"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github"
                >
                  {" "}
                  <AiFillGithub className={classes.link} />
                </Link>
              </Typography>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
