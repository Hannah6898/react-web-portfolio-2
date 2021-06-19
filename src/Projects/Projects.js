import React from "react";
import "./Projects.css";
import WeatherApp from "../img/weatherapp.png";
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
import { SiNetlify, SiJavascript, SiCsharp } from "react-icons/si";
import { DiHtml5, DiCss3, DiReact, DiSass, DiPython } from "react-icons/di";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { AiFillGithub, AiFillApi } from "react-icons/ai";

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
    paddingLeft: "15px",
  },
  techIcon: {
    fontSize: "30px",
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
      <h1>Projects</h1>
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
              HTML | CSS | JS | React | API | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <img src={WeatherApp}></img>
            </div>
            <Typography className={classes.description}>
              Developed a React weather app as part my SheCodes React coding
              course. Through this project I became skilled in using Bootstrap,
              API's, real- life development workflow, hosting and JavaScript.
              <br />
              <GoLink />
              <AiFillGithub />
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
          <AccordionDetails>
            <div>
              <img src={Dictionary}></img>
            </div>
            <Typography className={classes.description}>
              Created a React Dictionary app as part of SheCodes React Course. I
              used the knowledge I'd gained on the course to build a working
              dictionary app incorporating coding best practices, along with
              popular technologies such as API's and JavaScript.
              <br />
              <GoLink />
              <AiFillGithub />
            </Typography>
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
              HTML | CSS | JS | React | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <img src={WeatherApp}></img>
            </div>
            <Typography className={classes.description}>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
              <br />
              <GoLink />
              <AiFillGithub />
            </Typography>
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
          <AccordionDetails>
            <div>
              <img src={Youtube}></img>
            </div>
            <Typography className={classes.description}>
              Built a clone of the Youtube homepage using HTML, CSS, Bootstrap
              and some JavaScript.
              <br />
              <GoLink />
              <AiFillGithub />
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={classes.expand} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>
              JavaScript Drum Kit
            </Typography>
            <Typography className={classes.secondaryHeading}>
              HTML | CSS | JS | Netlify
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <img src={DrumKit}></img>
            </div>
            <Typography className={classes.description}>
              Created a JavaScript Drum kit using Keyboard events and styled
              using CSS grid.
              <br />
              <GoLink />
              <AiFillGithub />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
