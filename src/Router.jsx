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
import HorseResultAnnonce from './components/Horse_Results/HorseResultAnnonce'
import HorseResultPage from './components/Horse_Results/HorseResultPage'
import Favorites from "./components/MyProfile/Favorites";
import { RiderContext } from "./components/context/RiderContext";
import { riderProfileContext } from './components/context/RiderContext';
import { HorseContext } from './components/context/HorseContext';
import { horseProfileContext } from './components/context/HorseContext';
import { Results_Rider_Context} from './components/context/Results_Rider_Context';
import { Results_Horse_Context } from './components/context/Results_Horse_Context';
import { UserContext } from './components/context/UserContext'
import { userProfileContext } from './components/context/UserContext'

const Router = () => {

  //Appel des différents contexts qui vont partager ensuite l'information entre les composants concernés
  const [riderProfile, setRiderProfile] = useState(riderProfileContext)
  const [resultsRiders, setResultsRiders] = useState([])

  const [horseProfile, setHorseProfile] = useState(horseProfileContext)
  const [resultsHorses, setResultsHorses] = useState([])

  const [userProfile, setUserProfile] = useState(userProfileContext)

//Appel des différents providers de contexts qui vont ensuite distribuer l'information à travers le routeur
  const providerRiderProfile = useMemo(() => ({riderProfile, setRiderProfile}), [riderProfile, setRiderProfile])
  const providerResultsRiders = useMemo(() => ({resultsRiders, setResultsRiders}), [resultsRiders, setResultsRiders])
  
  const providerHorseProfile = useMemo(() => ({horseProfile, setHorseProfile}), [horseProfile, setHorseProfile])
  const providerResultsHorses = useMemo(() => ({resultsHorses, setResultsHorses}), [resultsHorses, setResultsHorses])

  const providerUserProfile = useMemo(() => ({userProfile, setUserProfile}), [userProfile, setUserProfile])

  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/search-rider" component={SearchRider} />
        <Route exact path="/search-horse" component={SearchHorse} />
        <Route exact path="/favorites" component={Favorites} />
        <UserContext.Provider value={providerUserProfile}>
          <Route exact path="/my-profile" component={MyProfile} />
          <HorseContext.Provider value={providerHorseProfile}>
            <Route exact path="/post-horse" component={PostHorse} />
            <Route exact path="/post-horse-owner" component={OwnerPres} />
            <RiderContext.Provider value={providerRiderProfile}>
              <Route exact path="/post-rider" component={PostRider} />
              <Route
                exact
                path="/PostRiderPresentation"
                component={PostRiderPresentation}
              />
              <Results_Rider_Context.Provider value={providerResultsRiders}>
                <Route exact path="/rider/results" component={ResultPage} />
                <Route
                  exact
                  path="/rider/result-annonce/:id"
                  component={ResultAnnonce}
                />
                <Results_Horse_Context.Provider value={providerResultsHorses}>
                  <Route
                    exact
                    path="/horse/results"
                    component={HorseResultPage}
                  />
                  <Route
                    exact
                    path="/horse/result-annonce/:id"
                    component={HorseResultAnnonce}
                  />
                </Results_Horse_Context.Provider>
              </Results_Rider_Context.Provider>
            </RiderContext.Provider>
          </HorseContext.Provider>
        </UserContext.Provider>
      </Switch>
    </>
  );
};

export default Router;
