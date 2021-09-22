import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import WeatherApp from "../../assets/img/WeatherApp.png";
import Dictionary from "../../assets/img/Dictionary.png";
import Portfolio from "../../assets/img/Portfolio.png";
import YoutubeClone from "../../assets/img/YoutubeClone.png";
import DrumKit from "../../assets/img/DrumKit.png";
import ReactChip from "../../Components/Chips/ReactChip";
// import JSChip from "../Chips/JSChip";
// import CSSChip from "../Chips/CssChip";
// import BootstrapChip from "../Chips/BootstrapChip";
// import APIChip from "../Chips/APIChip";

const Projects = () => {
  return (
    <section>
      <div className={classes.heading}>
        <h3>Projects</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard
            img={WeatherApp}
            heading="Weather App"
            subheading="This app pull data from a Open Weather Map API to display the weather of  any city in the world as well as the users current location."
            gitHub="https://github.com/Hannah6898/react-weather-app"
            liveSite="https://fervent-galileo-89d4fe.netlify.app/"
          />
        </div>

        <ProjectCard
          img={Dictionary}
          heading="Dictionary App"
          subheading="I've used my knowledge of React to build a working dictionary app incorporating coding best practices, along with the most popular tools and technologies."
          gitHub="https://github.com/Hannah6898/react-dictionary"
          liveSite="https://gallant-boyd-0ddfe2.netlify.app/"
        />
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard
            img={Portfolio}
            heading="Personal Portfolio"
            subheading="Created my personal portfolio using React and Material UI. This project was also able to obtain an average score of 99.75 for desktop devices on the Lighthouse test."
            gitHub="https://github.com/Hannah6898/react-web-portfolio-2"
            liveSite="https://www.hannahosibodu.com/"
          />
        </div>
        <ProjectCard
          img={YoutubeClone}
          heading="Youtube Clone"
          subheading="In this project I developed a visual clone of the Youtibe homepage"
          gitHub="https://github.com/Hannah6898/Youtube-Clone"
          liveSite="https://elegant-sinoussi-498e6f.netlify.app/"
        />
        <div className={classes.leftSide}>
          {" "}
          <ProjectCard
            img={DrumKit}
            heading="JavaScript Drum Kit"
            subheading="Created a JavaScript Drum kit using Keyboard events and styled using CSS grid"
            gitHub="https://github.com/Hannah6898/JavaScript-Drum-Kit"
            liveSite="https://dreamy-kalam-3b5e13.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
