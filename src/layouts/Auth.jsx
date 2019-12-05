import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import pagesStyle from "./authStyle";
import routes from "../routes";
import register from "../assets/img/register.jpeg";
import login from "../assets/img/login.jpeg";
import AuthNavbar from "../components/Navbars/AuthNavbar";
import AuthFooter from "../components/Footers/AuthFooter";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      }
      return null;
    })}
  </Switch>
);

const Pages = props => {
  useEffect(() => {
    document.body.style.overflow = "unset";
  });

  const getBgImage = () => {
    if (window.location.pathname.indexOf("/auth/register-page") !== -1) {
      return register;
    } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
      return login;
    }
  };

  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].name;
      }
    }
    return activeRoute;
  };

  const { classes, ...rest } = props;

  return (
    <div>
      <AuthNavbar brandText={getActiveRoute(routes)} {...rest} />
      <div className={classes.wrapper}>
        <div
          className={classes.fullPage}
          style={{ backgroundImage: `url(${getBgImage()})` }}
        >
          {switchRoutes}
          <AuthFooter white />
        </div>
      </div>
    </div>
  );
};

Pages.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(pagesStyle)(Pages);
