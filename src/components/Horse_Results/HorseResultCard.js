import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const HorseResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const userid = 1
  const horseid = 1
  const dataBody = {
    userid : userid,
    horseid : horseid
  }
  
  const [favoriteIcon, setFavoriteIcon] = useState(heart)

  const [isFavorite, setIsFavorite] = useState(false)


  const addInFavorite = () => {
    if (favoriteIcon === heart) {
      console.log('add in favorite')
      Axios
      .post(`http://localhost:4000/api/users/addFavoriteHorse`, dataBody)
      .catch((err) => console.error(err)
      );
    }
    else {
      console.log('delete from favorite')
      Axios
      .delete(`http://localhost:4000/api/users/deleteFavoriteHorse/${userid}`)
      .catch((err) => console.error(err)
      );
    }
  };


  return (
    <>
      <div className="resultCard">
        <Link
          to={{
            pathname: `/horse/result-annonce/${horseid}`,
          }}
        >
          <div className="resultCard-container">
            <img
              className="resultPhoto"
              src={props.horse_photo1}
              alt={props.horse_name}

            />
          </div>
        </Link>
        <div className="resultDetails">
          <p id="resultName">{props.horse_name}</p>
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
