import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home"

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </>
  );
};

export default Router;
