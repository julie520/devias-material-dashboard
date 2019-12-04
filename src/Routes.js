import React from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
    </Switch>
  );
};

export default Routes;
