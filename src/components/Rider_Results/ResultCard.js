import React, { useState} from "react"
import { Link } from "react-router-dom"
import "./Result.css"
import Axios from "axios"
import heart from "../SVG-icons/coeur-hors-selection.svg"
import heartFull from "../SVG-icons/coeur-selection.svg"

const ResultCard = (props) => {
  

   // get the correct user ID in order to pass it to the ResultAnnonce component
   const token = localStorage.token 
   
   const rider_ID = props.fullResult.rider_ID
   const rider_firstname = props.fullResult.rider_firstname
   const rider_photo1 = props.fullResult.rider_photo1
   const statusFavorite = props.statusFavorite
  
   const dataBody = {
     rider_ID : rider_ID,
     rider_firstname : rider_firstname,
     rider_photo1 : rider_photo1,
 
   }
   
   const [favoriteIcon, setFavoriteIcon] = useState(statusFavorite === false ? heart : heartFull)
 
   const [isFavorite, setIsFavorite] = useState(false)
 
 
   const addInFavorite = () => {
      if (favoriteIcon === heart) {
        Axios
        .post(`http://localhost:4000/api/users/addFavoriteRider`, dataBody, {
            headers : { 'Authorization' : 'Bearer ' + token} })
        .catch((err) => console.error(err)
        );
      }
      else {
        Axios
        .delete(`http://localhost:4000/api/users/deleteFavoriteRider/${rider_ID}`,{
          headers : { 'Authorization' : 'Bearer ' + token}})
        .catch((err) => console.error(err)
        );
      }
    }

  return (
    <>
      <div className="resultCardRider">
        <Link
          to={{
            pathname: `/rider/result-annonce/${rider_ID}`,
          }}
        >
          <div className="resultCard-containerRider">
            <img className="resultPhotoRider" src={props.fullResult.rider_photo1} 
            alt={props.rider_firstname} />
          </div>
        </Link>
        <div className="resultDetailsRider">
          <p id="resultName">{props.fullResult.rider_firstname}</p>
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
