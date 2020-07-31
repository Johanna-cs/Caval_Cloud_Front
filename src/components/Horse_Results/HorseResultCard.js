import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const HorseResultCard = (props) => {
  
  // get the correct user ID in order to pass it to the ResultAnnonce component
  const user_ID = props.fullResult.user_ID
  const horse_ID = props.fullResult.horse_ID
  const horse_name = props.fullResult.horse_name
  const horse_photo1 = props.fullResult.horse_photo1
  const dataBody = {
    user_ID : user_ID,
    horse_ID : horse_ID,
    horse_name : horse_name,
    horse_photo1 : horse_photo1,

  }
  
  const [favoriteIcon, setFavoriteIcon] = useState(heart)

  const [isFavorite, setIsFavorite] = useState(false)


  const addInFavorite = () => {
    if (favoriteIcon === heart) {
      Axios
      .post(`http://localhost:4000/api/users/addFavoriteHorse`, dataBody)
      .catch((err) => console.error(err)
      );
    }
    else {
      Axios
      .delete(`http://localhost:4000/api/users/deleteFavoriteHorse/${user_ID}`)
      .catch((err) => console.error(err)
      );
    }
  };


  return (
    <>
      <div className="resultCard">
        <Link
          to={{
            pathname: `/horse/result-annonce/${horse_ID}`,
          }}
        >
          <div className="resultCard-container">
            <img
              className="resultPhoto"
              src={props.fullResult.horse_photo1} 
              alt={props.fullResult.horse_name}

            />
          </div>
        </Link>
        <div className="resultDetails">
          <p id="resultName">{props.fullResult.horse_name}</p>
          <img
            className="resultHeart"
            onClick={ () => {
                setFavoriteIcon(favoriteIcon === heart ? heartFull : heart);
                setIsFavorite(!isFavorite);
                addInFavorite()
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
