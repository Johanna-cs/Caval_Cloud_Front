import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import PostRider from "./components/PostRider";



const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/PostRider" component={PostRider} />
      </Switch>
    </>
  );
};

export default Router;
