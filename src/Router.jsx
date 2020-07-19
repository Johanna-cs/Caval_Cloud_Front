import React, { useState, useMemo } from "react";
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
import ResultPage from "./components/Rider_Results/ResultPage";
import ResultAnnonce from "./components/Rider_Results/ResultAnnonce";
import MyProfile from "./components/MyProfile/MyProfile";
import { RiderContext } from "./components/context/RiderContext";
import { riderProfileContext } from './components/context/RiderContext';
import { Results_Rider_Context} from './components/context/Results_Rider_Context'


const Router = () => {

  //Appel des différents contexts qui vont partager ensuite l'information entre les composants concernés
  const [riderProfile, setRiderProfile] = useState(riderProfileContext)
  const [resultsRiders, setResultsRiders] = useState([])

//Appel des différents providers de contexts qui vont ensuite distribuer l'information à travers le routeur
  const providerRiderProfile = useMemo(() => ({riderProfile, setRiderProfile}), [riderProfile, setRiderProfile])
  const providerResultsRiders = useMemo(() => ({resultsRiders, setResultsRiders}), [resultsRiders, setResultsRiders])

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
        <Route exact path="/post-horse-owner" component={OwnerPres} />
        <Route exact path="/my-profile" component={MyProfile} />
        <RiderContext.Provider value={providerRiderProfile}>
            <Route exact path="/post-rider" component={PostRider} />
            <Route exact path="/PostRiderPresentation" component={PostRiderPresentation} />
          <Results_Rider_Context.Provider value={providerResultsRiders}>
              <Route exact path="/result-page" component={ResultPage} />
              <Route exact path="/result-annonce/:id" component={ResultAnnonce} />
          </Results_Rider_Context.Provider>
        </RiderContext.Provider>
      </Switch>
    </>
  );
};

export default Router;
