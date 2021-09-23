import React from "react";
import classes from "./Contact.module.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>Connect with me!</h3>
        </div>
        <form>
          <input type="hidden" name="_subject" value="New submission!" />
          <div className={classes.input}>
            <label form="name">Name</label>
            <input type="text" required className={classes.singleLine}></input>
          </div>
          <div className={classes.input}>
            <label form="email">Email</label>
            <input type="email" required className={classes.singleLine}></input>
          </div>
          <div className={classes.input}>
            <label for="message">Message</label>
            <textarea rows="5" col="30" name="message" required></textarea>
          </div>
          <button type="submit" className={classes.btn}>
            {" "}
            Send Message
          </button>
          <span className={classes.icons}>
            <a href="https://github.com/Hannah6898" target="_blank">
              {" "}
              <AiFillGithub />{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/hannah-osibodu-63b524152/"
              target="_blank"
            >
              <AiFillLinkedin />{" "}
            </a>
            <a href="https://twitter.com/hanc0des" target="_blank">
              <AiFillTwitterCircle />
            </a>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
