import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import ResultCard from "../Rider_Results/ResultCard";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const Favorites = () => {

  // Verify is user is registered
  const token = localStorage.token 

  // By default, heartIcon is setted because these are favorites
  const [favorite, setFavorite] = useState(heartFull);
  
  const [favoritesRider, setFavoritesRider] = useState([]);
  const [favoritesHorse, setFavoritesHorse] = useState([]);

  // If this boolean is updated, display is rerender from useEffect
  const [isDeleted, setIsDeleted] = useState(false) 

  const getFavoritesHorses = () => {
    Axios
    .get(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/myfavorites/horses/`, { 
      headers : { 'Authorization' : 'Bearer ' + token}
    })
    .then((res) => setFavoritesHorse(res.data))
    .catch((err) => console.error(err));
  };
  
  const getFavoritesRiders = () => {
    Axios
    .get(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/myfavorites/riders/`, {
      headers : { 'Authorization' : 'Bearer ' + token} 
    })
    .then((res) => setFavoritesRider(res.data))
    .catch((err) => console.error(err));
  };


  useEffect(() => {
    getFavoritesHorses();
    getFavoritesRiders();
  }, []);

  return (
    <>
      <Header className="header" title="Annonces sauvegardées" />

      <div className="Favorites-Page">

        {favoritesRider.length === 0 && favoritesHorse.length === 0 ? 
            <p style={{'text-align' : 'center'}}>Aucune annonce sauvegardée dans vos favoris</p>
          : null 
        }

        {favoritesHorse.length !== 0  ? 
          favoritesHorse.map(e => (
            <HorseResultCard
              fullResult={e}
              horse_name={e.horse_name}
              horse_ID={e.horse_ID}
              photo={e.horse_photo1}
              statusFavorite={true}
              src={favorite}
            />))
          : null
        }
        <hr />
        {favoritesRider.length !== 0 ? 
          favoritesRider.map(e => (
            <ResultCard
              fullResult={e}
              rider_firstname={e.rider_firstname}
              rider_ID={e.rider_ID}
              photo={e.rider_photo1}
              statusFavorite={true}
              src={favorite}
            />))
          : null 
        }
    </div>
    </>
  );
};

export default Favorites;
