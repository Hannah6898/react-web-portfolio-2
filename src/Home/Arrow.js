import React from "react";
import { Link } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { IoIosArrowDown } from "react-icons/io";
const useStyles = makeStyles(() => ({
  arrow: {
    fontSize: "50px",
    color: "#da0463",
    "&:hover": {
      cursor: "pointer",
    },
    marginTop: "50px",
  },
}));
export default function Arrow() {
  const classes = useStyles();
  return (
    <div className="arrow">
      {" "}
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-90}
        duration={500}
      >
        <IoIosArrowDown className={classes.arrow} />
      </Link>
    </div>
  );
}
