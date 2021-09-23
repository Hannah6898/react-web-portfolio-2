import React from "react";
import classes from "./Drawer.module.css";

const Drawer = () => {
  return (
    <nav className={classes.drawer}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#tech">Tech Stack</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">
            <button>Contact</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Drawer;
