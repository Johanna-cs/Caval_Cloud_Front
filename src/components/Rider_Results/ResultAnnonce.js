import React, { useState, useEffect, useContext } from "react";
import "./Result.css";
import { Link } from "react-router-dom";
import Header from "../Header_footer/Header";
import SlidingButton from "../common/SlidingButton";
import Carousel from "../common/Carousel";
import logo from "../SVG-icons/cavalcloud-logo.png";
import Disciplines from "../common_section/Disciplines";
import BudgetMensuel from "../common_section/BudgetMensuel";
import Frequency from "../common_section/Frequency";
import IdealHorse from "../common_section/IdealHorse";
import Axios from "axios";
import { Results_Rider_Context } from '../context/Results_Rider_Context'
import { Result_Rider_ID_Context } from '../context/Results_Rider_Context'



const ResultAnnonce = (props) => {
  
    // get search results stored in Results_Rider_Context  
    const {resultsRiders, setResultsRiders} = useContext(Results_Rider_Context)

    // const riderId = props.location.rider_ID
    
    // rider_ID in order to display the specific result
    const {resultRiderId, setResultRiderId} = useContext(Result_Rider_ID_Context)

    // The specific full result to display
    const [thisResultRider, setThisResultRider] = useState([...resultsRiders.filter(result => result.rider_ID === resultRiderId)][0])


  //   useEffect(() => {
  //       setResultRiderId(riderId)
  // }, [])

  return (
    <>
      <Header title="RESULTATS DE VOTRE RECHERCHE" />
      <div className="postRider_page">
        <div className="Result-filterbar">
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
        </div>
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {thisResultRider.rider_firstname}, <span>{thisResultRider.rider_age}</span>
            </p>
            <p>
              {thisResultRider.rider_selfWord1}, {thisResultRider.rider_selfWord2}, {thisResultRider.rider_selfWord3}
            </p>
          </div>
          <h4>Localisation</h4>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {thisResultRider.rider_ridingWord1}, {thisResultRider.rider_ridingWord2}, {thisResultRider.rider_ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          <p>{thisResultRider.rider_biography}</p>
        </div>
        <hr />
        <div>
          <h4>Budget</h4>
          <p>
            {thisResultRider.rider_budget}
            {thisResultRider.rider_currency_budget} / mois
          </p>
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <p>{thisResultRider.rider_vehiculed}</p>
          <p>{thisResultRider.rider_managed_horse}</p>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>{thisResultRider.rider_years_of_practice}</p>
          <p>{thisResultRider.rider_gallop_level}</p>
        </div>
        <hr />
        <div className="postRider-disc">
          <h4>Discipline</h4>
          {/* {thisResultRider.disciplines.map((discipline) => (
            <li>{discipline}</li>
          ))} */}
        </div>
        <hr />
        <div>
          <h4>Autre</h4>
          <p>Je suis ouvert à pratiquer d'autres disciplines</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{thisResultRider.rider_riding_frequency}</p>
          <p>{thisResultRider.rider_fixed_day} souhaités</p>
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <p>Taille: 1m - 1,8m</p>
          <p>Tempérament: Dynamique</p>
          <p>Caractère: Affectueux</p>
          <p>Age: 4 ans - 20 ans</p>
        </div>
        <hr />
        <h4>Coaching</h4>
        <p>J'aimerais avoir accès à des cours</p>
        <p>J'aimerais faire intervenir un coach de l'extérieur</p>
        <hr />
        <div>
          <h4>Concours</h4>
          <p>{thisResultRider.doCompetition}</p>
        </div>
      </div>
    </>
  );
};
export default ResultAnnonce;
