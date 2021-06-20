import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
  },
  header: {
    textAlign: "center",
  },
  pink: {
    color: "#da0463",
  },
  button: {
    display: "block",
    margin: "0 auto",
    backgroundColor: "#da0463",
    color: "white",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className="About" id="about">
      <div className={classes.root}>
        <h1 className={classes.header}>About Me</h1>
        <p>
          I’m Hannah, a <span className={classes.pink}>Software Developer</span>{" "}
          based in Kent currently looking for my first junior role.
        </p>
        <p>
          I began learning to code at the beginning of this year and found the
          process of learning new technologies and creating solutions to
          difficult problems both exciting and rewarding.
        </p>
        <p>
          I have specialised thus far in front end technologies like React and
          am eager to deepen my expertise in this area; with my evenings
          currently spent deepening my JavaScript knowledge and creating React
          projects.
        </p>
        <p>
          My long term goal is be able to efficiently turn great ideas into
          functioning products thorough absorbing as much as I can from those my
          senior to become the best developer I can be.
        </p>
        <p>
          In my spare time I like to roller skate, watch TV and movies, and I’m
          currently getting into Formula 1.
        </p>
        <Button variant="contained" className={classes.button}>
          CV
        </Button>
      </div>
    </div>
  );
}
