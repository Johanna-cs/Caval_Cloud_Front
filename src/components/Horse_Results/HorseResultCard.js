import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const HorseResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const horseID = props.horse_ID
  
  const [favoriteIcon, setFavoriteIcon] = useState(heart)

  const [isFavorite, setIsFavorite] = useState(false)

  const addResultInFavorite = () => {
    Axios
    .post(`http://localhost:4000/api/horses/favorite`)
    .catch((err) => console.log(err))
}

  const favoriteCard = () => {
    if (favoriteIcon === { heartFull }) {
      Axios
      .post(`http://localhost:4000/api/favorite`)
      .catch((err) => console.error(err)
      );
    }
    else if (favoriteIcon === { heart }) {
      Axios
      .delete(`http://localhost:3010/api/favorite`)
      .catch((err) => console.error(err)
      );
    }
  };

  return (
    <>
      <div className="resultCard">
        <Link
          to={{
            pathname: `/horse/result-annonce/${horseID}`,
          }}
        >
          <div className="resultCard-container">
            <img
              className="resultPhoto"
              src="https://images.unsplash.com/photo-1504291310234-fdc312c67b04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt=""

            />
          </div>
        </Link>
        <div className="resultDetails">
          <p id="resultName">{props.horse_name}</p>
          <img
            className="resultHeart"
            onClick={ () => {
                setFavoriteIcon(favoriteIcon === heart ? heartFull : heart);
                setIsFavorite(!isFavorite)
            }}
            src={favoriteIcon}
            alt={favoriteIcon}
          />
        </div>
      </div>
    
    </>
  );
};

export default HorseResultCard;
