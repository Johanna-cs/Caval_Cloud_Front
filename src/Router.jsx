import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home"
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import SearchHorse from "./components/SearchHorse";
import SearchRider from './components/SearchRider'


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search-rider" component ={SearchRider} />
      </Switch>
    </>
  );
};

export default Router;
