import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home";
import Login from "./components/Landing/Login";
import Register from "./components/Landing/Register";
import SearchRider from './components/searchRider/SearchRider'
import SearchHorse from "./components/searchHorse/SearchHorse"
import PostHorse from "./components/postHorse/PostHorse"
import PostRider from './components/postRider/PostRider'
import PostRiderPresentation from "./components/postRider/PostRiderPresentation"
import OwnerPres from './components/postHorse/OwnerPres'
import ResultPage from "./components/Results/ResultPage";
import ResultAnnonce from "./components/Results/ResultAnnonce";
import MyProfile from "./components/MyProfile/MyProfile";


const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/search-rider" component={SearchRider} />
        <Route exact path="/search-horse" component={SearchHorse} />
        <Route exact path="/post-horse" component={PostHorse} />
        <Route exact path="/post-rider" component={PostRider} />
        <Route
          exact
          path="/PostRiderPresentation"
          component={PostRiderPresentation}
        />
        <Route exact path="/post-horse-owner" component={OwnerPres} />
        <Route exact path="/result-page" component={ResultPage} />
        <Route exact path="/result-annonce" component={ResultAnnonce} />
        ResultAnnonce
      </Switch>
      <Route exact path="/my-profile" component={MyProfile} />
    </>
  );
};

export default Router;
