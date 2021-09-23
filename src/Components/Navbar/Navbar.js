import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/img/Logo.png";
import ToggleBtn from "../Navbar/Drawer/DrawerToggleBtn";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <nav className={classes.navbarContainer}>
        <div className={classes.logo}>
          <a href="#home">
            <img src={Logo} alt="Logo"></img>
          </a>
        </div>

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
        <div>
          <ToggleBtn />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
