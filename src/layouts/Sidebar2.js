import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link as RouterLink } from "react-router-dom";
import { useStyles } from "./sidebar.styles";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Drawer, List, ListItem, Button } from "@material-ui/core";

const pages = [
  { title: "Dashboard", href: "/dashboard", icon: <DashboardIcon /> },
  { title: "Users", href: "/users", icon: <PeopleIcon /> },
  { title: "Authentication", href: "/sign-in", icon: <LockOpenIcon /> },
  { title: "Account", href: "/account", icon: <AccountBoxIcon /> },
  { title: "Settings", href: "/settings", icon: <SettingsIcon /> }
];

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
));

const Sidebar2 = props => {
  const { open, variant, onClose, className, ...rest } = props;
  const classes = useStyles();

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        {/* Profile */}
        {/* SidebarNav */}
        <List className={classes.nav}>
          <ListItem>
            <Button>Sign In</Button>
          </ListItem>
          {pages.map(page => (
            <ListItem className={classes.item} disableGutters key={page.title}>
              <Button
                activeClassName={classes.active}
                className={classes.button}
                component={CustomRouterLink}
                to={page.href}
              >
                <div className={classes.icon}>{page.icon}</div>
                {page.title}
              </Button>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

Sidebar2.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar2;
