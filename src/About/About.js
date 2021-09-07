import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PDF from "../pdf/HannahOsiboduCV.pdf";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#da0463",
    color: "white",
    "&:hover": {
      cursor: "pointer",
      color: "#da0463",
      backgroundColor: "#f9f9f9",
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className="about" id="about">
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          About Me
        </Typography>
        <Typography variant="body1">
          I’m Hannah, a Software Developer based in Kent currently looking for
          my first junior developer role.
        </Typography>
        <Typography variant="body1">
          I began learning to code at the beginning of this year and found the
          process of learning new technologies and creating solutions to
          difficult problems both exciting and rewarding.
        </Typography>
        <Typography variant="body1">
          I have specialised thus far in front end technologies like React and
          am eager to deepen my expertise in this area; with my evenings
          currently spent deepening my JavaScript and React knowledge.
        </Typography>
        <Typography variant="body1">
          My long-term goal is to be able to efficiently turn great ideas into
          functioning products thorough absorbing as much as I can from those my
          senior and become the best developer I can be.
        </Typography>
        <Typography variant="body1">
          In my spare time I like to roller skate, watch TV and movies, and
          watch Formula 1.
        </Typography>
        <Box textAlign="center">
          <Button
            href={PDF}
            target="_blank"
            rel="noreferrer"
            aria-label="CV"
            variant="contained"
            className={classes.button}
          >
            CV
          </Button>
        </Box>
      </div>
    </div>
  );
}
