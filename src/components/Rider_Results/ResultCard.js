import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";
import { Results_Rider_Context} from '../context/Results_Rider_Context'
import { Result_Rider_ID_Context } from '../context/Results_Rider_Context'


const ResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const riderID = props.rider_ID
  
  // used to store the riderID in the specific context, allowing to share information what ever the user does
  const {resultRiderId, setResultRiderId} = useContext(Result_Rider_ID_Context)

  const [favorite, setFavorite] = useState(heart);

  useEffect(() => {
      setResultRiderId(riderID)
  }, [])

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
            pathname: `/result-annonce/${props.fullResult.rider_ID}`,
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
          <h7 id="resultName">{props.firstname}</h7>
          <img
            className="resultHeart"
            onClick={
              (favoriteCard(),
              () => setFavorite(favorite === heart ? heartFull : heart)),
              () => setResultRiderId(riderID)

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

export default ResultCard;
