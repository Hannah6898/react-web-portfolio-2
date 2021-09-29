import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/img/Logo.png";
import DrawerToggleBtn from "../Navbar/Drawer/DrawerToggleBtn";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <nav
        className={classes.navbarContainer}
        aria-label="Main Navigation"
        role="navigation"
      >
        <div className={classes.logo}>
          <a href="#home" aria-label="Home">
            <img src={Logo} alt="Logo"></img>
          </a>
        </div>
        <div>
          <div className={classes.navbarItems}>
            <ul>
              <li>
                <a href="#home" aria-label="Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" aria-label="Projects">
                  Projects
                </a>
              </li>
              <li>
                <a href="#tech" aria-label="Tech Stack">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#education" aria-label="Education">
                  Education
                </a>
              </li>
              <li>
                <a href="#about" aria-label="About">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" aria-label="Contact">
                  <button className={classes.contactBtn}>Contact</button>
                </a>
              </li>
            </ul>
          </div>
          <div className={classes.toggle}>
            <DrawerToggleBtn click={props.drawerClickHandler} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
