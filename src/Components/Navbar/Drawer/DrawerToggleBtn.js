import React from "react";
import classes from "./DrawerToggleBtn.module.css";

const drawerToggleBtn = (props) => {
  return (
    <button className={classes.toggleBtn} onClick={props.click}>
      <span className={classes.toggleBtnLine} />
      <span className={classes.toggleBtnLine} />
      <span className={classes.toggleBtnLine} />
    </button>
  );
};

export default drawerToggleBtn;
