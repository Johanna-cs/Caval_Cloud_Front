import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home"
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import PostRider from "./components/PostRider";



const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={PostRider} />
        <Route exact path="/Landing" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </>
  );
};

export default Router;
