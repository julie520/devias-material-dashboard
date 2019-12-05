import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import footerStyle from "./authFooterStyle";
import { List, ListItem } from "@material-ui/core";

const AuthFooter = ({ ...props }) => {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#porfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {new Date().getFullYear()} , made with love, by{" "}
            <a href="https://www.creative-tim.com" className={classes.a}>
              Creative Tim
            </a>{" "}
            and{" "}
            <a href="https://udevoffice.com/" className={classes.a}>
              Udevoffice
            </a>{" "}
            for a better web
          </span>
        </p>
      </div>
    </footer>
  );
};

AuthFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(AuthFooter);
