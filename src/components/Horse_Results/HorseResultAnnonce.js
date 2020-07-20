import React, { useState, useEffect, useContext } from "react";
import "./HorseResult.css";
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

const HorseResultAnnonce = (props) => {
  
    // get the Horse_ID in order to display the specific result
    const horseId = Number(props.match.params.id)

    // Horse Data information
    const [dataHorse, setDataHorse] = useState([])
    
    // Get information about the selected horse from its ID
    const getHorseInformation = () => {
      Axios
      .get(`http://localhost:4000/api/horses/${horseId}`)
      .then(res => setDataHorse(res.data[0]))
      .catch(err=> console.error(err))
    }

    // When a result is displayed, the function getHorseInformation starts first in order to query BDD
    useEffect(() => {
      getHorseInformation()
      }, 
    [])
  

  return (
    <>
      <Header title="RESULTATS DE VOTRE RECHERCHE" />
      <div className="postRider_page">
        <div className="Result-filterbar">
        <Link
          to={{
            pathname: `/horse/results`,
          }}
        >
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
        </Link>
        </div>
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {dataHorse.horse_name}, <span>{dataHorse.horse_age}</span>
            </p>
            <p>
              {dataHorse.rider_selfWord1}, {dataHorse.rider_selfWord2}, {dataHorse.rider_selfWord3}
            </p>
          </div>
          <h4>Localisation</h4>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {dataHorse.rider_ridingWord1}, {dataHorse.rider_ridingWord2}, {dataHorse.rider_ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          <p>{dataHorse.rider_biography}</p>
        </div>
        <hr />
        <div>
          <h4>Budget</h4>
          <p>
            {dataHorse.rider_budget}
            {dataHorse.rider_currency_budget} / mois
          </p>
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <p>{dataHorse.rider_vehiculed}</p>
          <p>{dataHorse.rider_managed_horse}</p>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>{dataHorse.rider_years_of_practice}</p>
          <p>{dataHorse.rider_gallop_level}</p>
        </div>
        <hr />
        <div className="postRider-disc">
          <h4>Discipline</h4>
        </div>
        <hr />
        <div>
          <h4>Autre</h4>
          <p>Je suis ouvert à pratiquer d'autres disciplines</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{dataHorse.rider_riding_frequency}</p>
          <p>{dataHorse.rider_fixed_day} souhaités</p>
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
          <p>{dataHorse.doCompetition}</p>
        </div>
      </div>
    </>
  );
};
export default HorseResultAnnonce;
