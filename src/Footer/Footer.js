import React from "react";
import Link from "@material-ui/core/Link";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "center",
  },
  techIcon: {
    fontSize: "45px",
    color: "#da0463",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <div>
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
        <Link
          href="https://github.com/Hannah6898"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram className={classes.techIcon} />
        </Link>
      </div>
      <br />
      <p>Developed by Hannah Osibodu</p>
    </div>
  );
}
