import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import ResultCard from "../Rider_Results/ResultCard";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const Favorites = (props) => {
  const [favorite, setFavorite] = useState(heartFull);
  const [favoritesRider, setFavoritesRider] = useState([]);
  const [favoritesHorse, setFavoritesHorse] = useState([]);

  const getFavorites = () => {
    Axios.get(`http://localhost:4000/api/favorites`)
      .then((res) => setFavoritesRider(res.data))
      .catch((err) => console.error(err));

    Axios.get(`http://localhost:4000/api/favorites`)
      .then((res) => setFavoritesHorse(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <>
      <Header className="header" title="Annonces sauvegardées" />
      <div className="Favorites-Page">
        {favoritesHorse.map((e) => (
          <ResultCard
            fullResult={e}
            firstname={e.horse_firstname}
            horse_ID={e.horse_ID}
            src={favorite}
          />
        ))}
        <hr />
        {favoritesRider.map((e) => (
          <ResultCard
            fullResult={e}
            firstname={e.rider_firstname}
            rider_ID={e.rider_ID}
            src={favorite}
          />
        ))}
      </div>
    </>
  );
};

export default Favorites;
