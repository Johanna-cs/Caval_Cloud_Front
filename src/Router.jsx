import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import SearchRider from './components/searchRider/SearchRider'
import SearchHorse from "./components/searchHorse/SearchHorse"
<<<<<<< HEAD
import PostHorse from './components/PostHorse'
import PostRider from './components/PostRider'

=======
import PostRider from "./components/postRider/PostRider";
import PostRiderPresentation from "./components/postRider/PostRiderPresentation";
>>>>>>> 0f75fc9846158c688db091220235cdb878930e3f

const Router = () => {
  return (
    <>
      <Switch>
        
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search-rider" component ={SearchRider} />
        <Route exact path="/search-horse" component={SearchHorse} />
<<<<<<< HEAD
        <Route exact path="/post-horse" component={PostHorse} />
        <Route exact path="/post-rider" component={PostRider} />


=======
        <Route exact path="/post-rider" component ={PostRider} />
        <Route exact path="/PostRiderPresentation" component={PostRiderPresentation}/>
>>>>>>> 0f75fc9846158c688db091220235cdb878930e3f
      </Switch>
    </>
  );
};

export default Router;
