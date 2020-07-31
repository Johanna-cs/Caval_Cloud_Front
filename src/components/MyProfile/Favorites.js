import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import ResultCard from "../Rider_Results/ResultCard";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const Favorites = (props) => {
  const userid = 1
  const [favorite, setFavorite] = useState(heartFull);
  const [favoritesRider, setFavoritesRider] = useState([]);
  const [favoritesHorse, setFavoritesHorse] = useState([]);

  const getFavoritesHorses = () => {
    Axios
    .get(`http://localhost:4000/api/users/favorites/horses/${userid}`)
    .then((res) => setFavoritesHorse(res.data))
    .catch((err) => console.error(err));
  };
  const getFavoritesRiders = () => {
    Axios
    .get(`http://localhost:4000/api/users/favorites/riders/${userid}`)
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
        {favoritesHorse.map(e => (
          <HorseResultCard
            fullResult={e}
            horse_name={e.horse_name}
            horse_ID={e.horse_ID}
            photo={e.horse_photo1}
            src={favorite}
          />
        ))}
        <hr />
        {favoritesRider.map(e => (
          <ResultCard
            fullResult={e}
            rider_firstname={e.rider_firstname}
            rider_ID={e.rider_ID}
            photo={e.rider_photo1}
            src={favorite}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
