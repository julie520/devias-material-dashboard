import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import cx from "classnames";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import {
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Drawer
} from "@material-ui/core";
// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

import authNavbarStyle from "./authNavbarsStyle";

const AuthNavbar = props => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const { classes, color, brandText, location } = props;

  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? true : false;
  };

  // useEffect(e => {
  //   if (e.history.location.pathname !== e.location.pathname) {
  //     setOpen(false);
  //   }
  // }, []);

  const appBarClasses = cx({ [" " + classes[color]]: color });

  const list = (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <NavLink to={"/admin/dashboard"} className={classes.navLink}>
          <DashboardIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Dashboard"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/register-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/register-page")
          })}
        >
          <PersonAddIcon className={classes.listItemIcon} />
          <ListItemText primary={"Register"} disableTypography={true} />
        </NavLink>
      </ListItem>
      <ListItem className={classes.listItem}>
        <NavLink
          to={"/auth/login-page"}
          className={cx(classes.navLink, {
            [classes.navLinkActive]: activeRoute("/auth/login-page")
          })}
        >
          <FingerprintIcon className={classes.listItemIcon} />
          <ListItemText
            primary={"Login"}
            disableTypography={true}
            className={classes.listItemText}
          />
        </NavLink>
      </ListItem>
    </List>
  );

  return (
    <AppBar position="static" className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <Hidden smDown>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              {brandText}
            </Button>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.flex}>
            <Button href="#" className={classes.title} color="transparent">
              MD Pro React
            </Button>
          </div>
        </Hidden>
        <Hidden smDown>{list}</Hidden>
        <Hidden mdUp>
          <Button
            className={classes.sidebarButton}
            color="transparent"
            justIcon
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </Button>
        </Hidden>
        <Hidden mdUp>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={"right"}
              open={open}
              classes={{ paper: classes.drawerPaper }}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true // Better open performance on mobile
              }}
            >
              {list}
            </Drawer>
          </Hidden>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

AuthNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  brandText: PropTypes.string
};

export default withRouter(withStyles(authNavbarStyle)(AuthNavbar));
