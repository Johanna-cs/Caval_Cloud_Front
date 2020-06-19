import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home"
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import SearchHorse from "./components/searchHorse/SearchHorse";


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search-horse" component={SearchHorse} />
      </Switch>
    </>
  );
};

export default Router;
