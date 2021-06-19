import React from "react";
import "./Education.css";
import { makeStyles } from "@material-ui/core/styles";
import { GoLink } from "react-icons/go";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
  },
  header: {
    textAlign: "center",
  },
  pink: {
    color: "#da0463",
    paddingLeft: "5px",
    fontSize: "23px",
  },
}));

export default function Education() {
  const classes = useStyles();
  return (
    <div className="Education" id="education">
      <div className={classes.root}>
        <h1 className={classes.header}>Education</h1>
        <h3>Certificates</h3>
        <p>
          SheCodes React | Issued Apr 2021
          <Link
            href="https://www.shecodes.io/certificates/bfa3e58394a09554e62af5db21128917"
            target="_blank"
            rel="noreferrer"
          >
            <GoLink className={classes.pink} />
          </Link>
        </p>
        <p>
          {" "}
          SheCodes Plus | Issued Mar 2021
          <Link
            href="https://www.shecodes.io/certificates/d5e8d27ccd85b518a996a83aa132d98b"
            target="_blank"
            rel="noreferrer"
          >
            <GoLink className={classes.pink} />
          </Link>
        </p>
        <p>
          SheCodes Basics | Issued Feb 2021{" "}
          <Link
            href="https://www.shecodes.io/certificates/02ed5586804bd6c78fc1b9d58bc8ea47"
            target="_blank"
            rel="noreferrer"
          >
            <GoLink className={classes.pink} />
          </Link>
        </p>
      </div>
    </div>
  );
}
