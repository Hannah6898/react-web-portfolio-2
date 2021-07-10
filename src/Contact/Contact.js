import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
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
      <div>
        <Typography variant="h4">Contact Me</Typography>
      </div>
      <div>
        <p>If you would like to get in touch, drop me an email!</p>
      </div>
      <div>
        <Button
          className={classes.submit}
          href="mailto:HannahOsibodu@gmail.com"
          rel="noreferrer"
        >
          Email Me
        </Button>
      </div>
    </div>
  );
}
