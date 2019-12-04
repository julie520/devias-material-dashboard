import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Topbar from "./Topbar";
import Footer from "./Footer";

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 64,
    height: "100%"
  },
  content: {
    height: "100%"
  }
}));

const Minimal = props => {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

Minimal.propsTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Minimal;
