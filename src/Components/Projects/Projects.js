import React from "react";
import classes from "./Projects.module.css";
import ProjectCard from "../../Elements/ProjectCard/ProjectCard";
import WeatherApp from "../../assets/img/WeatherApp.png";
import Buzzfeed from "../../assets/img/Buzzfeed.png";
import Dictionary from "../../assets/img/Dictionary.png";
import Portfolio from "../../assets/img/Portfolio.png";
import YoutubeClone from "../../assets/img/YoutubeClone.png";
import DrumKit from "../../assets/img/DrumKit.png";
import LocationSharingApp from "../../assets/img/LocationSharingApp.png";
import SkillChip from "../../Elements/Chips/SkillChip";

const Projects = () => {
  return (
    <section id="projects">
      <div className={classes.heading}>
        <h3>Projects</h3>
      </div>
      <div className={classes.container}>
        <div className={classes.leftSide}>
          <span className={classes.card}>
            <ProjectCard
              className={classes.landscape}
              img={LocationSharingApp}
              heading="Location Sharing App"
              subheading="Created a MERN app where users can share places (with images and location) with other users. Includes all CRUD methods, image upload, input validation, authentication and authorisation."
              github="https://github.com/Hannah6898/mern-app-backend"
              // github="https://github.com/Hannah6898/LocationSharingApp"
              liveSite="https://master.d3mqk04l9yonu5.amplifyapp.com/"
              react={
                <SkillChip
                  class={`${classes.react} ${classes.skillChip}`}
                  skill="React"
                />
              }
              node={
                <SkillChip
                  class={`${classes.node} ${classes.skillChip}`}
                  skill="Node"
                />
              }
              express={
                <SkillChip
                  class={`${classes.express} ${classes.skillChip}`}
                  skill="Express"
                />
              }
              mongoDB={
                <SkillChip
                  class={`${classes.mongoDB} ${classes.skillChip}`}
                  skill="MongoDB"
                />
              }
              aws={
                <SkillChip
                  class={`${classes.aws} ${classes.skillChip}`}
                  skill="AWS"
                />
              }
              heroku={
                <SkillChip
                  class={`${classes.heroku} ${classes.skillChip}`}
                  skill="Heroku"
                />
              }
            />
          </span>
        </div>

        <span className={classes.card}>
          {" "}
          <ProjectCard
            className={classes.portraitBuzzfeed}
            img={Buzzfeed}
            heading="Buzzfeed Quiz"
            subheading="This is a Buzzfeed quiz with a json server hosted on Heroku and front-end hosted on AWS Amplify"
            gitHub="https://github.com/Hannah6898/BuzzfeedQuiz/tree/master"
            liveSite="https://master.d2zx96ceav46bo.amplifyapp.com/"
            react={
              <SkillChip
                class={`${classes.react} ${classes.skillChip}`}
                skill="React"
              />
            }
            js={
              <SkillChip
                class={`${classes.js} ${classes.skillChip}`}
                skill="JS"
              />
            }
            css={
              <SkillChip
                class={`${classes.css} ${classes.skillChip}`}
                skill="CSS"
              />
            }
            aws={
              <SkillChip
                class={`${classes.aws} ${classes.skillChip}`}
                skill="AWS"
              />
            }
            heroku={
              <SkillChip
                class={`${classes.heroku} ${classes.skillChip}`}
                skill="Heroku"
              />
            }
          />
        </span>

        <div className={classes.leftSide}>
          <span className={classes.card}>
            {" "}
            <ProjectCard
              className={classes.portrait}
              img={WeatherApp}
              heading="Weather App"
              subheading="This app pull data from a Open Weather Map API to display the weather of  any city in the world as well as the users current location."
              gitHub="https://github.com/Hannah6898/react-weather-app"
              liveSite="https://fervent-galileo-89d4fe.netlify.app/"
              react={
                <SkillChip
                  class={`${classes.react} ${classes.skillChip}`}
                  skill="React"
                />
              }
              js={
                <SkillChip
                  class={`${classes.js} ${classes.skillChip}`}
                  skill="JS"
                />
              }
              css={
                <SkillChip
                  class={`${classes.css} ${classes.skillChip}`}
                  skill="CSS"
                />
              }
              bootstrap={
                <SkillChip
                  class={`${classes.bootstrap} ${classes.skillChip}`}
                  skill="Bootstrap"
                />
              }
              api={
                <SkillChip
                  class={`${classes.api} ${classes.skillChip}`}
                  skill="API"
                />
              }
            />
          </span>
        </div>

        <span className={classes.card}>
          <ProjectCard
            className={classes.landscape}
            img={Dictionary}
            heading="Dictionary App"
            subheading="I've used my knowledge of React to build a working dictionary app incorporating coding best practices, along with the most popular tools and technologies."
            gitHub="https://github.com/Hannah6898/react-dictionary"
            liveSite="https://gallant-boyd-0ddfe2.netlify.app/"
            react={
              <SkillChip
                class={`${classes.react} ${classes.skillChip}`}
                skill="React"
              />
            }
            js={
              <SkillChip
                class={`${classes.js} ${classes.skillChip}`}
                skill="JS"
              />
            }
            css={
              <SkillChip
                class={`${classes.css} ${classes.skillChip}`}
                skill="CSS"
              />
            }
            api={
              <SkillChip
                class={`${classes.api} ${classes.skillChip}`}
                skill="API"
              />
            }
          />
        </span>
        <div className={classes.leftSide}>
          <span className={classes.card}>
            {" "}
            <ProjectCard
              className={classes.landscape}
              img={Portfolio}
              heading="Personal Portfolio"
              subheading="Created my personal portfolio using React. This project was also able to obtain an average score of 99.75 for desktop devices on the Lighthouse test."
              gitHub="https://github.com/Hannah6898/react-web-portfolio-2"
              liveSite="https://www.hannahosibodu.com/"
              react={
                <SkillChip
                  class={`${classes.react} ${classes.skillChip}`}
                  skill="React"
                />
              }
              js={
                <SkillChip
                  class={`${classes.js} ${classes.skillChip}`}
                  skill="JS"
                />
              }
              css={
                <SkillChip
                  class={`${classes.css} ${classes.skillChip}`}
                  skill="CSS"
                />
              }
              figma={
                <SkillChip
                  class={`${classes.figma} ${classes.skillChip}`}
                  skill="Figma"
                />
              }
              figmaLink="https://www.figma.com/file/BfgVFdY67ncjUdA8kxD5ub/Hannah's-Portfolio-(Design)?node-id=0%3A1"
            />
          </span>
        </div>
        <span className={classes.card}>
          <ProjectCard
            className={classes.landscape}
            img={YoutubeClone}
            heading="Youtube Clone"
            subheading="In this project I developed a visual clone of the Youtibe homepage"
            gitHub="https://github.com/Hannah6898/Youtube-Clone"
            liveSite="https://elegant-sinoussi-498e6f.netlify.app/"
            js={
              <SkillChip
                class={`${classes.js} ${classes.skillChip}`}
                skill="JS"
              />
            }
            css={
              <SkillChip
                class={`${classes.css} ${classes.skillChip}`}
                skill="CSS"
              />
            }
            html={
              <SkillChip
                class={`${classes.html} ${classes.skillChip}`}
                skill="HTML"
              />
            }
          />
        </span>
        <div className={classes.leftSide}>
          <span>
            {" "}
            <ProjectCard
              className={classes.landscape}
              img={DrumKit}
              heading="JavaScript Drum Kit"
              subheading="Created a JavaScript Drum kit using Keyboard events and styled using CSS grid"
              gitHub="https://github.com/Hannah6898/JavaScript-Drum-Kit"
              liveSite="https://dreamy-kalam-3b5e13.netlify.app/"
              js={
                <SkillChip
                  class={`${classes.js} ${classes.skillChip}`}
                  skill="JS"
                />
              }
              css={
                <SkillChip
                  class={`${classes.css} ${classes.skillChip}`}
                  skill="CSS"
                />
              }
              html={
                <SkillChip
                  class={`${classes.html} ${classes.skillChip}`}
                  skill="HTML"
                />
              }
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
