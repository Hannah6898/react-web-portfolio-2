import React, { useRef } from "react";
import emailjs from "emailjs-com";
import classes from "./Contact.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t5pviue",
        "template_fr9k6ni",
        form.current,
        "user_xugJxJDFF667rtnlDTI02"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>Connect with me!</h3>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.input}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              required
              id="name"
              className={classes.singleLine}
            ></input>
          </div>
          <div className={classes.input}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              id="email"
              className={classes.singleLine}
            ></input>
          </div>
          <div className={classes.input}>
            <label htmlFor="message">Message</label>
            <textarea
              rows="5"
              col="30"
              name="message"
              id="message"
              required
            ></textarea>
          </div>
          <input
            type="submit"
            value="Send Message"
            className={classes.btn}
          ></input>
        </form>

        <span className={classes.icons}>
          <a
            href="https://github.com/Hannah6898"
            target="_blank"
            rel="noreferrer"
            aria-label="Github"
          >
            {" "}
            <AiFillGithub />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <AiFillLinkedin />{" "}
          </a>
          <a
            href="https://twitter.com/hanc0des"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <AiFillTwitterCircle />
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
