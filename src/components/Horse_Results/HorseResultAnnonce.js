import React, { useState, useEffect} from "react"
import "./HorseResult.css";
import { Link } from "react-router-dom"
import logo from "../SVG-icons/cavalcloud-logo.png"

import Axios from "axios";

const HorseResultAnnonce = (props) => {
  
    // get the Horse_ID in order to display the specific result
    const horseId = 1

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
      <div className='headerAnnonce'><h3 id='annonceTitle'>Annonce Equidé</h3> </div>
      
        <div className="Result-filterbarTop">
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
        <div className="Result_annonce">
        <div className="annonce_header">
          <img className="annonce_logo" src={logo} alt="logo" />
          <div>
            <h5>
              {dataHorse.horse_name}, <span>{dataHorse.horse_age} ans</span>
            </h5>
            <h5>Infos sur l'équidé : </h5>
            <p>{dataHorse.horse_height}, {dataHorse.horse_temper}, {dataHorse.horse_character}, {dataHorse.horse_body_type}</p>
          </div>
          <h5>Où se trouve t-il ?</h5>
            <p>{dataHorse.horse_localisation}</p>
        </div>
     
          src={dataHorse.horse_photos}
        <div>
          <h4>Infos du propriétaire </h4>
          <h5>{dataHorse.horse_owner_firstname}, {dataHorse.horse_owner_age}ans</h5>
          <p>{dataHorse.horse_owner_caracter} </p> 
          <p>Fréquence de communication : {dataHorse.horse_owner_communication_frequency} </p>
          <p>Type de travail du cheval : {dataHorse.horse_owner_work_for_horse}</p>
          <h5>{dataHorse.horse_owner_firstname} en quelques mots :</h5>
          <p>{dataHorse.horse_owner_message}</p>
        </div>
        <hr />
        <div>
          <h4>Budget</h4>
          <p>
            {dataHorse.horse_budget}{dataHorse.horse_currency_budget} / mois
          </p>
          <p>Dépenses supplémentaires à prévoir : {dataHorse.horse_other_fees}</p>
        </div>
        <hr />
        <div>
          <h4>Type d'écurie & structure</h4>
          <p>{dataHorse.horse_location_type}</p>
          <p>{dataHorse.horse_accomodation}</p>
          <p>Structures à disposition : {dataHorse.horse_practice_structure}</p>
        </div>
        <hr />
        <div>
          <h4>Disciplines & travail de l'équidé</h4>
          <p>{dataHorse.horse_disciplines}</p>
          <p>Balade seul possible : {dataHorse.horse_stroll_along}</p>
          <p>Compétition : {dataHorse.horse_competition}</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de la demi-pension</h4>
          <p>{dataHorse.horse_riding_frequency}</p>
          <p>Jours fixes d'une semaine à l'autre : {dataHorse.horse_fixed_day}</p>
        </div>
        <hr />
        <div>
        <h4>Coaching</h4>
        <p>Cours sur place disponible : {dataHorse.horse_coaching_here}</p>
        <p>Intervenant exterieur possible : {dataHorse.horse_external_coach}</p>
        </div>
        <hr />
        <div>
        <h4>Materiel</h4>
        <p>Le cavalier doit avoir sa selle : {dataHorse.horse_materiel}</p>
        </div>
        <hr />
        <div>
          <h4>Cavalier ideal</h4>
          <p>Age : {dataHorse.idealRiderAge}</p>
          <p>Années de pratique :{dataHorse.idealRiderYearsOfPractice}</p>
          <p>Niveau de Galop : {dataHorse.idealRiderGallopLevel}</p>
          <p>Est-il véhiculé ? {dataHorse.idealRiderIsVehiculed}</p>
          <p>A-t-il déjà eu un cheval sous sa responsabilite ? {dataHorse.idealRiderHasManaged}</p>
        </div>

      </div>
      <div className="Result-filterbarBot">
        <Link to ={{
            pathname: "/result-page"
          }}>
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
          </Link>
        </div>
    </>
  );
};
export default HorseResultAnnonce;
