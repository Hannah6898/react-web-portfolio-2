import React from "react";
import "./About.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  header: {
    textAlign: "center",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className="About">
      <div className={classes.root}>
        <h1 className={classes.header}>About Me</h1>
        <p>
          I am a Software Developer who through enthusiasm and self-motivation
          has learnt to code whilst working full time. I am competent in several
          coding languages including React and JavaScript, and am continuing to
          further my learning. I have proven my skills through developing
          projects such as a React weather app which you can find linked below.
          Currently I’m seeking a long-term position where I can utilise my
          transferable skills such as problem solving and data analysis; and
          develop my skills.
        </p>
      </div>
    </div>
  );
}
