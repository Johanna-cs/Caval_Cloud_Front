import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/Landing" component={Landing} />
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </>
  );
};

export default Router;
