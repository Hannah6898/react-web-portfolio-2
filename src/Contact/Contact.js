import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
  },
  text: {
    margin: "10px 0 10px 0",
  },
  submit: {
    backgroundColor: "#da0463",
    padding: "10px",
    color: "white",
    margin: "10px 0 10px 0",
    "&:hover": {
      cursor: "pointer",
      color: "#da0463",
      backgroundColor: "#f9f9f9",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className="Contact" id="contact">
      <div className={classes.root}>
        <div>
          <Typography variant="h4">Contact Me</Typography>
        </div>
        <div>
          <Typography variant="body2" className={classes.text}>
            If you would like to get in touch, drop me an email!
          </Typography>
        </div>
        <div>
          <Button
            className={classes.submit}
            href="mailto:HannahOsibodu@gmail.com"
            rel="noreferrer"
            aria-label="Email me"
          >
            Email Me
          </Button>
        </div>
      </div>
    </div>
  );
}
