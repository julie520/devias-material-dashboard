import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Topbar2 from "./Topbar2";
import Footer from "./Footer";
import Sidebar2 from "./Sidebar2";

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

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className={classes.root}>
      <Topbar2 onSidebarOpen={handleSidebarOpen} />
      <Sidebar2
        onClose={handleSidebarClose}
        open={openSidebar}
        variant="temporary"
      />
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
