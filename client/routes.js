import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Home name="Ian" />} />
  </Switch>
);

export default Routes;
