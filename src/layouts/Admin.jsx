import React, { useState } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbars/Navbar";
import routes from "../routes";
import dashboardStyle from "../views/Dashboard/dashboardStyle";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={props => {
              const Component = prop.component;
              return <Component {...props} />;
            }}
            key={key}
          />
        );
      }
    })}
  </Switch>
);

const Dashboard = props => {
  const { classes, ...rest } = props;
  const [values, setValues] = useState({
    color: "blue",
    mobileOpen: false
  });
  const handleDrawerToggle = () => {
    setValues({ ...values, mobileOpen: !values.mobileOpen });
  };

  return (
    <div classes={classes.wrapper}>
      <Sidebar routes={routes} logoText={"Creative Tim"} />
      <div className={classes.mainPanel} ref="mainPanel">
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>{switchRoutes}</div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
