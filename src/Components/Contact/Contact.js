import React from "react";
import classes from "./Contact.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>Connect with me!</h3>
        </div>
        <form>
          <input type="hidden" name="_subject" value="New submission!" />
          <div className={classes.input}>
            <label htmlFor="name">Name</label>
            <input type="text" required className={classes.singleLine}></input>
          </div>
          <div className={classes.input}>
            <label htmlFor="email">Email</label>
            <input type="email" required className={classes.singleLine}></input>
          </div>
          <div className={classes.input}>
            <label htmlFor="message">Message</label>
            <textarea rows="5" col="30" name="message" required></textarea>
          </div>
          <button type="submit" className={classes.btn}>
            {" "}
            Send Message
          </button>
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
        </form>
      </div>
    </section>
  );
};

export default Contact;
