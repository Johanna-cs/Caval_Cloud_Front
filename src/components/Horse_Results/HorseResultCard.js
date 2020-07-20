import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const HorseResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const horseID = props.horse_ID
  
  const [favorite, setFavorite] = useState(heart);

  const favoriteCard = () => {
    if (favorite === { heartFull }) {
      Axios.post("http://localhost:3010/api/favorite", favorite).catch((err) =>
        console.error(err)
      );
    }
    else if (favorite === { heart }) {
      Axios.delete("http://localhost:3010/api/favorite", favorite).catch((err) =>
        console.error(err)
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
              src="https://images.unsplash.com/photo-1579113813543-fa41eb8bf556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1971&q=80"
              alt=""

            />
          </div>
        </Link>
        <div className="resultDetails">
          <h7 id="resultName">{props.horse_name}</h7>
          <img
            className="resultHeart"
            onClick={
              (favoriteCard(),
              () => setFavorite(favorite === heart ? heartFull : heart))
            }
            src={favorite}
            alt="favoris"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default HorseResultCard;
