import React from "react";
import logo from "../img/Logo.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Noto Sans JP",
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
    height: "48px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  flex: {
    flexGrow: 1,
  },
  navLinks: {
    color: "black",
    padding: "0 10px 0 10px",
    "&:hover": {
      cursor: "pointer",
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

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="Nav" id="nav">
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <div className={classes.flex}>
              {" "}
              <Link to="/#" onClick={toggleHome} aria-label="Home">
                <img src={logo} alt="logo" className={classes.logo} />
              </Link>
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
                  <MenuItem>
                    <Link
                      to="/#"
                      onClick={() => {
                        handleClose();
                        toggleHome();
                      }}
                      aria-labelledby="Home"
                    >
                      Home
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleClose}
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      aria-labelledby="About"
                    >
                      About
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleClose}
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      aria-labelledby="Education"
                    >
                      Education
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleClose}
                      activeClass="active"
                      to="tech"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      aria-labelledby="Tech Stack"
                    >
                      Tech Stack
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleClose}
                      activeClass="active"
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      aria-labelledby="Project"
                    >
                      Projects
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      onClick={handleClose}
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                      aria-labelledby="Contact"
                    >
                      Contact
                    </Link>
                  </MenuItem>
                </Menu>
              </div>
            ) : (
              <div>
                <Link
                  className={classes.navLinks}
                  activeClass="active"
                  to="nav"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  aria-label="Home"
                >
                  Home
                </Link>
                <Link
                  className={classes.navLinks}
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  aria-label="About"
                >
                  About
                </Link>
                <Link
                  className={classes.navLinks}
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  aria-label="Projects"
                >
                  Projects
                </Link>
                <Link
                  className={classes.navLinks}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  aria-label="Contact"
                >
                  Contact
                </Link>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
