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
  },
}));

export default function Contact() {
  const classes = useStyles();
  return (
    <div className="Contact">
      <h1>Contact Me</h1>
      <p>If you would like to get in touch, fill out the form below</p>
      <div className="contact-form">
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Name"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Email"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Message"
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
