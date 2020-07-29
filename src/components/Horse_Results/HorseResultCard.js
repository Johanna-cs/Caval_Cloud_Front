import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const HorseResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const userid = props.fullResult.userid
  const horseid = props.fullResult.horseid
  const horsename = props.fullResult.horsename
  const urlphoto = props.fullResult.urlphoto
  const dataBody = {
    userid : userid,
    horseid : horseid,
    horsename : horsename,
    urlphoto : urlphoto,

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
              src="https://images.unsplash.com/flagged/photo-1557296126-ae91316e5746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
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
