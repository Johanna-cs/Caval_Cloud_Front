import React, { useState} from "react"
import { Link } from "react-router-dom"
import "./Result.css"
import Axios from "axios"
import heart from "../SVG-icons/coeur-hors-selection.svg"
import heartFull from "../SVG-icons/coeur-selection.svg"

const ResultCard = (props) => {
  
  // get the correct riderID in order to pass it to the ResultAnnonce component
  const riderID = props.rider_ID
  
  const [favoriteIcon, setFavoriteIcon] = useState(heart);

  const [isFavorite, setIsFavorite] = useState(null)

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
            pathname: `/rider/result-annonce/${riderID}`,
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
              () => setFavoriteIcon(favoriteIcon === heart ? heartFull : heart))
            }
            src={(props.src||favoriteIcon)}
            alt="favoris"
          />
        </div>
      </div>
    </>
  );
};

export default ResultCard;
