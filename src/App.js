import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import "./assets/scss/index.scss";
// core components
import Admin from "./layouts/Admin";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Route path="/admin" component={Admin} />
        <Redirect from="/" to="/admin/dashboard" />
      </Router>
    </ThemeProvider>
  );
}

export default App;
