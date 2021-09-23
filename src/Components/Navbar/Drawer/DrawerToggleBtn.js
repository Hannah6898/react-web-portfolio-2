import React from "react";
import classes from "./DrawerToggleBtn.module.css";

const drawerToggleBtn = () => {
  return (
    <button className={classes.toggleBtn}>
      <span className={classes.toggleBtnLine} />
      <span className={classes.toggleBtnLine} />
      <span className={classes.toggleBtnLine} />
    </button>
  );
};

export default drawerToggleBtn;
