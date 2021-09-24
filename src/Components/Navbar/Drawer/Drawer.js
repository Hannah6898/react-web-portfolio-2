import React from "react";
import classes from "./Drawer.module.css";

const Drawer = (props) => {
  return (
    <nav className={classes.drawer}>
      <ul>
        <li>
          <a href="#home" aria-label="Home" onClick={props.drawerClickHandler}>
            Home
          </a>
        </li>
        <li>
          <a
            href="#projects"
            aria-label="Projects"
            onClick={props.drawerClickHandler}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#tech"
            aria-label="Tech Stack"
            onClick={props.drawerClickHandler}
          >
            Tech Stack
          </a>
        </li>
        <li>
          <a
            href="#education"
            aria-label="Education"
            onClick={props.drawerClickHandler}
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#about"
            aria-label="About"
            onClick={props.drawerClickHandler}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            aria-label="Contact"
            onClick={props.drawerClickHandler}
          >
            <button className={classes.contactBtn}>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
