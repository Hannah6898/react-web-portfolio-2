import { LocalGroceryStoreTwoTone } from "@material-ui/icons";
import React from "react";
import Logo from "../assets/img/Logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <img src={Logo}></img>
          <div className="d-flex">
            <a>Home</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
