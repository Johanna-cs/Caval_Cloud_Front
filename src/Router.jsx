import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home"
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
      </Switch>
    </>
  );
};

export default Router;
