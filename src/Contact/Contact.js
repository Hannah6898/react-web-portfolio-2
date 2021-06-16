import React from "react";
import "./Contact.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    contactForm: {
      margin: "20px auto",
      width: "80%",
      backgroundColor: "pink",
      borderRadius: "10px",
    },
    submit: {
      backgroundColor: "pink",
      padding: "10px",
    },
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, fill out the form below</p>
      <div className={classes.contactForm}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-name-input"
              label="Name"
              type="Text"
              autoComplete="name"
            />
            <TextField
              id="standard-email-input"
              label="Email"
              type="Email"
              autoComplete="email"
            />
            <TextField
              id="standard-text-input"
              label="Message"
              type="Text"
              multiline
              rows={8}
            />
          </div>
          <button className={classes.submit} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
