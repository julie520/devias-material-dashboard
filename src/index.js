import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Auth from "./layouts/Auth";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path="/auth" component={Auth} />
      <Redirect from="/" to="/auth/login-page" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
