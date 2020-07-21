import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import ResultCard from "../Rider_Results/ResultCard";
import Axios from "axios";


const Favorites = () => {

    const[favorites, setFavorites] = useState()

    const getFavorites= () => {
    Axios.get(`http://localhost:4000/api/favorites`)
      .then((res) => setFavorites(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFavorites()
}, [])

  return (
    <>
      <Header className="header" title="Annonces sauvegardées" />
      <div className="Favorites-Page">
        {favorites.map((e) => (
          <ResultCard
            fullResult={e}
            firstname={e.rider_firstname}
            rider_ID={e.rider_ID}
          />
        ))}
      </div>
    </>
  );};

export default Favorites;
