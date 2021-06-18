import React from "react";
import "./Nav.css";
import logo from "../img/Logo.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#f9f9f9",
    border: "none",
    boxShadow: "none",
  },
  menuIcon: {
    justifyContent: "flex-end",
    color: "black",
  },
  logo: {
    width: "50px",
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    "& *": {
      color: "black",
      padding: "0 10px 0 10px",
    },
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="Nav">
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.title}>
              {" "}
              <img src={logo} alt="logo" className={classes.logo} />
            </div>

            {isMobile ? (
              <div>
                <IconButton
                  edge="start"
                  className={classes.menuIcon}
                  color="inherit"
                  onClick={handleMenu}
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Home</MenuItem>
                  <MenuItem onClick={handleClose}>About</MenuItem>
                  <MenuItem onClick={handleClose}>Projects</MenuItem>
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                  <MenuItem onClick={handleClose}>CV</MenuItem>
                </Menu>
              </div>
            ) : (
              <div className={classes.link}>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Projects</Link>
                <Link>Contact</Link>
                <Link>CV</Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
