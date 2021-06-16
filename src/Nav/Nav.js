import React from "react";
import "./Nav.css";
import logo from "../img/Logo.png";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  },
  menuIcon: {
    color: "black",
    marginLeft: 0,
  },
  logo: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
          <Toolbar display="flex" justifyContent="space-between">
            <img
              src={logo}
              alt="logo"
              className={classes.logo}
              className="logo"
            />

            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon className={classes.menuIcon} />
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
                  <MenuItem onClick={handleClose}>About</MenuItem>
                  <MenuItem onClick={handleClose}>Projects</MenuItem>
                  <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
