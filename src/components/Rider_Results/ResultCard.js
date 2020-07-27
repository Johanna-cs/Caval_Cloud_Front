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
      <div className="resultCardRider">
        <Link
          to={{
            pathname: `/rider/result-annonce/${riderID}`,
          }}
        >
          <div className="resultCard-containerRider">
            <img className="resultPhotoRider" src="https://images.unsplash.com/photo-1529989359010-5beae0df8d13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt={props.firstname} />
          </div>
        </Link>
        <div className="resultDetailsRider">
          <p id="resultName">{props.firstname}</p>
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
