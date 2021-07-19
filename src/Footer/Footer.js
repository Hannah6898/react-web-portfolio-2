import React from "react";
import Link from "@material-ui/core/Link";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "30px",
    textAlign: "center",
  },
  socialMediaIcon: {
    fontSize: "45px",
    color: "#da0463",
  },
  link: {
    margin: "0 10px 0 10px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className="Footer" id="footer">
      <div className={classes.root}>
        <div>
          <Link
            href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
            aria-label="Linkedin"
          >
            <AiFillLinkedin className={classes.socialMediaIcon} />
          </Link>
          <Link
            href="https://github.com/Hannah6898"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
            aria-label="Github"
          >
            <AiFillGithub className={classes.socialMediaIcon} />
          </Link>
          <Link
            href="https://twitter.com/hanc0des"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
            aria-label="Instagram"
          >
            <AiFillTwitterCircle className={classes.socialMediaIcon} />
          </Link>
        </div>
        <Typography variant="body1">Developed by Hannah Osibodu</Typography>
      </div>
    </div>
  );
}
