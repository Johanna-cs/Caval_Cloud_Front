import React, { useState, useEffect} from "react";
import "./Result.css";
import Header from "../Header_footer/Header";
import Carousel from "../common/Carousel";
import logo from "../SVG-icons/cavalcloud-logo.png";

import Axios from "axios";

const ResultAnnonce = (props) => {
  
    // get the rider_ID in order to display the specific result
    const riderId = Number(props.match.params.id)

    // Rider Data information
    const [dataRider, setDataRider] = useState([])
    
    // Get information about the selected rider from its ID
    const getRiderInformation = () => {
      Axios
      .get(`http://localhost:4000/api/riders/${riderId}`)
      .then(res => setDataRider(res.data[0]))
      .catch(err=> console.error(err))
    }
    const changeBool = dataRider.value === true ? 'oui' : 'non'
    // When a result is displayed, the function getRiderInformation starts first in order to query BDD
    useEffect(() => {
      getRiderInformation()
      }, 
    [])
  

  return (
    <>
      <Header title="Résultats de votre recherche" />
      <div className="postRider_page">
        <div className="Result-filterbar">
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
        </div>
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <h5>
              {dataRider.rider_firstname}, <span>{dataRider.rider_age} ans</span>
            </h5>
            <p>
              {dataRider.rider_selfWord1}, {dataRider.rider_selfWord2}, {dataRider.rider_selfWord3}
            </p>
          </div>
          <h4>Localisation</h4>
            <p>{dataRider.rider_postal_code}</p>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {dataRider.rider_ridingWord1}, {dataRider.rider_ridingWord2}, {dataRider.rider_ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          <p>{dataRider.rider_biography}</p>
        </div>
        <hr />
        <div>
          <h4>Budget</h4>
          <p>
            {dataRider.rider_budget}
            {dataRider.rider_currency_budget} / mois
          </p>
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <p>{dataRider.rider_vehiculed}</p>
          <p>{dataRider.rider_managed_horse}</p>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>{dataRider.rider_years_of_practice}</p>
          <p>{dataRider.rider_gallop_level}</p>
        </div>
        <hr />
        <div className="postRider-disc">
          <h4>Discipline</h4>

          <p>Ouvert à d'autres disciplines : {dataRider.rider_agree_other_discipline}</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{dataRider.rider_riding_frequency}</p>
          <p>Jours fixes souhaités : {dataRider.rider_fixed_day} </p>
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <p>Taille :{dataRider.idealHorseSize}</p>
          <p>Tempérament : {dataRider.idealHorseTemper}</p>
          <p>Caractère : {dataRider.idealHorseCaracter}</p>
          <p>Age : {dataRider.idealHorseAge}</p>
        </div>
        <hr />
        <h4>Coaching</h4>
        <p>J'aimerais avoir accès à des cours : {dataRider.rider_coaching_here}</p>
        <p>J'aimerais faire intervenir un coach de l'extérieur : {dataRider.rider_external_coach}</p>
        <hr />
        <div>
          <h4>Concours</h4>
          <p>{dataRider.doCompetition}</p>
        </div>
      </div>
    </>
  );
};
export default ResultAnnonce;
