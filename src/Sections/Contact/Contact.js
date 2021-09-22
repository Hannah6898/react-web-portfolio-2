import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <section>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>Connect with me!</h3>
        </div>
        <form>
          <div className={classes.input}>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div className={classes.input}>
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className={classes.input}>
            <label>Message</label>
            <input type="text"></input>
          </div>
          <button type="submit" className={classes.btn}>
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
