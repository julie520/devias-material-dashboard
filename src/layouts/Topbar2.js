import React, { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import {
  AppBar,
  Toolbar,
  Hidden,
  IconButton,
  Badge,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none"
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

const Topbar2 = props => {
  const { className, onSidebarOpen, ...rest } = props;
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        <RouterLink to="/">
          <img alt="Logo" src="/images/logos/logo--white.svg" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
          <Typography variant="p">Hello Menu</Typography>
        </Hidden>
        <Hidden smDown>
          <Typography variant="p">Hello</Typography>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

Topbar2.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

export default Topbar2;
