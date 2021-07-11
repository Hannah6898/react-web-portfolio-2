import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { GoLink } from "react-icons/go";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "10px",
  },
  pink: {
    paddingLeft: "5px",
    fontSize: "23px",
  },
  certificate: {
    margin: "10px 0 20px 0",
  },
}));

export default function Education() {
  const classes = useStyles();
  return (
    <div className="Education" id="education">
      <div className={classes.root}>
        <Typography variant="h4" className={classes.header}>
          Education
        </Typography>
        <Typography variant="h6">Certificates</Typography>
        <div className={classes.certificate}>
          <Typography variant="body1">
            SheCodes React | Issued Apr 2021
            <Link
              href="https://www.shecodes.io/certificates/bfa3e58394a09554e62af5db21128917"
              target="_blank"
              rel="noreferrer"
              aria-label="SheCodes certificate"
            >
              <GoLink className={classes.pink} color="primary" />
            </Link>
          </Typography>
        </div>
        <div className={classes.certificate}>
          <Typography variant="body1">
            {" "}
            SheCodes Plus | Issued Mar 2021
            <Link
              href="https://www.shecodes.io/certificates/d5e8d27ccd85b518a996a83aa132d98b"
              target="_blank"
              rel="noreferrer"
              aria-label="SheCodes certificate"
            >
              <GoLink className={classes.pink} color="primary" />
            </Link>
          </Typography>
        </div>
        <div className={classes.certificate}>
          <Typography variant="body1">
            SheCodes Basics | Issued Feb 2021{" "}
            <Link
              href="https://www.shecodes.io/certificates/02ed5586804bd6c78fc1b9d58bc8ea47"
              target="_blank"
              rel="noreferrer"
              aria-label="SheCodes certificate"
            >
              <GoLink className={classes.pink} color="primary" />
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
}
