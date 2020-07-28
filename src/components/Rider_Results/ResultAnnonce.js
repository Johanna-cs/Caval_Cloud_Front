import React, { useState, useEffect} from "react"
import "./Result.css"
import ImageCarousel from "../common/Carousel"
import { Link } from "react-router-dom"
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
    const changeBool = (bool) => bool === true ? 'oui' : 'non'

    // When a result is displayed, the function getRiderInformation starts first in order to query BDD
    useEffect(() => {
      getRiderInformation();
      changeBool(dataRider);
      }, 
    [])
  console.log(dataRider)
  return (
    <>
      <div className="headerAnnonce">
        <h3 id="annonceTitle">Annonce Cavalier</h3>{" "}
      </div>

      <div className="Result-filterbarTop">
        <Link
          to={{
            pathname: "/rider/results",
          }}
        >
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
        </Link>
      </div>
      <div className="Result_annonce">
        <div className="annonce_header">
          <img id="annonce_logo" src="https://firebasestorage.googleapis.com/v0/b/caval-cloud.appspot.com/o/images%2Fkelly-sikkema-JN0SUcTOig0-unsplash.jpg?alt=media&token=d141987e-453a-495b-bd56-2c7c59c1b5a4" alt="logo" />
          <div>
            <h5>
              {dataRider.rider_firstname},{" "}
              <span>{dataRider.rider_age} ans</span>
            </h5>
            {/* <img src={dataRider.rider_avatar} alt='rider illustration'/> */}
            <p>
              {dataRider.rider_selfWord1}, {dataRider.rider_selfWord2}, {dataRider.rider_selfWord3}
            </p>
            <p>N° de téléphone : {dataRider.rider_phone}</p>
            <p>Mail : {dataRider.rider_mail}</p>
          </div>
          <h4>Localisation</h4>
          <p>{dataRider.rider_postal_code}</p>
        </div>
        <h4>Quelques photos</h4>
        <ImageCarousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {dataRider.rider_ridingWord1}, {dataRider.rider_ridingWord2},{" "}
            {dataRider.rider_ridingWord3}
          </p>
        </div>
        <div>
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
          <h5>Est-il véhiculé ? </h5><p>{changeBool(dataRider.rider_vehiculed)}</p>
          <h5>A déjà eu un cheval sous sa responsabilité ?</h5>
          <p> {changeBool(dataRider.rider_managed_horse)}</p>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>Années de pratique : {dataRider.rider_years_of_practice}</p>
          <p>Galop : {dataRider.rider_gallop_level}</p>
        </div>
        <hr />
        <div>
          <h4>Discipline</h4>

          <p>Ouvert à d'autres disciplines : {changeBool(dataRider.rider_agree_other_discipline)}</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{dataRider.rider_riding_frequency}</p>
          <p>Jours fixes souhaités : {changeBool(dataRider.rider_fixed_day)} </p>
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
        <p>J'aimerais avoir accès à des cours : {changeBool(dataRider.rider_coaching_here)}</p>
        <p>J'aimerais faire intervenir un coach de l'extérieur : {changeBool(dataRider.rider_external_coach)}</p>
        <hr />
        <div>
          <h4>Concours</h4>
          <p>{dataRider.rider_competition}</p>
        </div>
      </div>
      <div className="Result-filterbarBot">
        <Link to ={{
            pathname: "/rider/results"
          }}>
          <button className="Result-filterbar-button">
            Retour aux résultats
          </button>
        </Link>
      </div>
    </>
  );
};
export default ResultAnnonce;
