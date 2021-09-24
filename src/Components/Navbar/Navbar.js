import React from "react";
import classes from "./Navbar.module.css";
import Logo from "../../assets/img/Logo.png";
import DrawerToggleBtn from "../Navbar/Drawer/DrawerToggleBtn";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <nav className={classes.navbarContainer}>
        <div className={classes.logo}>
          <a href="#home">
            <img src={Logo} alt="Logo"></img>
          </a>
        </div>
        <div>
          <div className={classes.navbarItems}>
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
