import React from "react";
import "./Contact.css";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
    color: "white",
  },
  contactForm: {
    margin: "20px auto",
    width: "70%",
    border: "2px solid #da0463",
    borderRadius: "10px",
  },
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
              color="secondary"
              className={classes.textField}
            />
            <TextField
              id="standard-email-input"
              label="Email"
              type="Email"
              autoComplete="email"
              color="secondary"
              className={classes.textField}
            />
            <TextField
              id="standard-text-input"
              label="Message"
              color="secondary"
              type="Text"
              multiline
              rows={8}
              className={classes.textField}
            />
          </div>
          <Button className={classes.submit} type="submit">
            Send
          </Button>
        </form>
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
          <AiFillInstagram />
        </Link>
      </div>
      <div>Developed by Hannah Osibodu</div>
    </div>
  );
}
