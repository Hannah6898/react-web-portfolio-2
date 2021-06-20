import React from "react";
import "./Contact.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  submit: {
    backgroundColor: "#da0463",
    padding: "10px",
    color: "white",
    margin: "10px 0 10px 0",
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className="Contact" id="contact">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, drop me an email!</p>
      <Button className={classes.submit}>Email Me</Button>
    </div>
  );
}
