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
<<<<<<< HEAD
=======
        <Route exact path="/search-rider" component ={SearchRider} />
>>>>>>> a78afa3ee7d49e52a8f727cb4c004e71ec8c2e77
      </Switch>
    </>
  );
};

export default Router;
