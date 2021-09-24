import React from "react";
import classes from "./Drawer.module.css";

const Drawer = (props) => {
  return (
    <nav className={classes.drawer}>
      <ul>
        <li>
          <a href="#home" onClick={props.drawerClickHandler}>
            Home
          </a>
        </li>
        <li>
          <a href="#projects" onClick={props.drawerClickHandler}>
            Projects
          </a>
        </li>
        <li>
          <a href="#tech" onClick={props.drawerClickHandler}>
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#education" onClick={props.drawerClickHandler}>
            Education
          </a>
        </li>
        <li>
          <a href="#about" onClick={props.drawerClickHandler}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={props.drawerClickHandler}>
            <button className={classes.contactBtn}>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
