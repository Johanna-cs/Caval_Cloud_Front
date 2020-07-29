import React, { useState} from "react"
import { Link } from "react-router-dom"
import "./Result.css"
import Axios from "axios"
import heart from "../SVG-icons/coeur-hors-selection.svg"
import heartFull from "../SVG-icons/coeur-selection.svg"

const ResultCard = (props) => {
  

   // get the correct riderID in order to pass it to the ResultAnnonce component
   const user_ID = props.fullResult.user_ID
   const rider_ID = props.fullResult.rider_ID
   const rider_firstname = props.fullResult.rider_firstname
   const rider_photo1 = props.fullResult.rider_photo1
   const dataBody = {
     userid : user_ID,
     rider_ID : rider_ID,
     rider_firstname : rider_firstname,
     rider_photo1 : rider_photo1,
 
   }
   
   const [favoriteIcon, setFavoriteIcon] = useState(heart)
 
   const [isFavorite, setIsFavorite] = useState(false)
 
 
   const addInFavorite = () => {
     if (favoriteIcon === heart) {
       Axios
       .post(`http://localhost:4000/api/users/addFavoriteRider`, dataBody)
       .catch((err) => console.error(err)
       );
     }
     else {
       Axios
       .delete(`http://localhost:4000/api/users/deleteFavoriteRider/${user_ID}`)
       .catch((err) => console.error(err)
       );
     }
   };

  return (
    <>
      <div className="resultCardRider">
        <Link
          to={{
            pathname: `/rider/result-annonce/${rider_ID}`,
          }}
        >
          <div className="resultCard-containerRider">
            <img className="resultPhotoRider" src="https://images.unsplash.com/photo-1517344296525-3f2079b011d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" 
            alt={props.rider_firstname} />
          </div>
        </Link>
        <div className="resultDetailsRider">
          <p id="resultName">{props.rider_firstname}</p>
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

export default ResultCard;
