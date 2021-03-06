import React, { useState, useEffect, useContext} from "react"
import "./HorseResult.css";
import ReturnButton from "../common/ReturnButton";
import Axios from "axios";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const HorseResultAnnonce = (props) => {
  
  // Get the Horse_ID in order to display the specific result
  const horseId = Number(props.match.params.id)

  // Horse Data information
  const [dataHorse, setDataHorse] = useState(null)
     
  // Get information about the selected horse from its ID
  const getHorseInformation = () => {
    Axios
    .get(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/horses/${horseId}`)
    .then(res => setDataHorse(res.data[0]))
    .catch(err=> console.error(err))
  }

  // Transforme les booléens récupérés de l'annonce en oui ou non 
  const changeBool = (bool) => bool === true ? 'oui' : 'non'

  // When a result is displayed, the function getHorseInformation starts first in order to query BDD
  useEffect(() => {
    getHorseInformation();
    changeBool(dataHorse);
    },[]
  )
    

  return (
    <>

    <div className="headerAnnonce">
      <h3 id="annonceTitle">Annonce Equidé</h3>{" "}
    </div>

    <ReturnButton />

    {dataHorse != null ? 
      
      <>

        <div className="Result_annonce">
          <div className="annonce_header">
            <div>
              <h4>Infos sur l'équidé </h4>
              <h5>
                {dataHorse.horse_name} <span>{dataHorse.horse_age} ans</span>
              </h5>
              <p>
                {dataHorse.horse_height}cm, {dataHorse.horse_temper},{" "}
                {dataHorse.horse_character}, {dataHorse.horse_body_type}
              </p>
            </div>
          </div>
          <h5>Quelques photos</h5>
          <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
            <img
              src={dataHorse.horse_photo1}
              alt="horse_photo1"
              className="imagesHorse"
            />
            <img
              src={dataHorse.horse_photo2}
              alt="horse_photo2"
              className="imagesHorse"
            />
            <img
              src={dataHorse.horse_photo3}
              alt="horse_photo3"
              className="imagesHorse"
            />
          </Carousel>
          <br />
          <h5>Où se trouve t-il ?</h5>
          <p>{dataHorse.horse_localisation}</p>
          <hr />

          <div>
            <h4>Infos du propriétaire </h4>
            <img
              className="annonce_logo"
              src={dataHorse.User.user_avatar != null ? dataHorse.User.user_avatar : null }
              alt="logo"
            />
            <h5>
              {dataHorse.owner_firstname} <span>{dataHorse.owner_age}ans</span>
            </h5>
            <p>N° de téléphone : {dataHorse.User.user_phone != null ? dataHorse.User.user_phone : null}</p>
            <p>Mail : {dataHorse.User.user_email}</p>
            <p>{dataHorse.owner_caracter} </p>
            <p>
              Fréquence de communication :{" "}
              {dataHorse.owner_communication_frequency}{" "}
            </p>
            <p>Type de travail du cheval : {dataHorse.owner_horse_work}</p>
            <h5>{dataHorse.owner_firstname} en quelques mots :</h5>
            <p>{dataHorse.owner_message}</p>
          </div>
          <hr />
          <div>
            <h4>Budget</h4>
            <p>
              {dataHorse.horse_budget}
              {dataHorse.horse_currency_budget} / mois
            </p>
            <p>
              Dépenses supplémentaires à prévoir :{" "}
              {changeBool(dataHorse.horse_other_fees)}
            </p>
          </div>
          <hr />
          <div>
            <h4>Hebergement de l'équidé : </h4>
            <p>{dataHorse.horse_location_type}</p>
            <p>{dataHorse.horse_accomodation}</p>
            <p>
              Structure(s) disponible(s) : {dataHorse.horse_practice_structure}
            </p>
          </div>
          <hr />
          <div>
            <h4>Disciplines & travail de l'équidé</h4>
            <p>{dataHorse.horse_disciplines}</p>
            <p>
              Balade seul possible : {changeBool(dataHorse.horse_stroll_along)}
            </p>
            <p>Compétition : {dataHorse.horse_competition_preferences}</p>
          </div>
          <hr />
          <div>
            <h4>Rythme de la demi-pension</h4>
            <p>{dataHorse.horse_riding_frequency}</p>
            <p>
              Jours fixes d'une semaine à l'autre :{" "}
              {changeBool(dataHorse.horse_fixed_day)}
            </p>
          </div>
          <hr />
          <div>
            <h4>Coaching</h4>
            <p>
              Cours sur place disponible :{" "}
              {changeBool(dataHorse.horse_coaching_here)}
            </p>
            <p>
              Intervenant exterieur possible :{" "}
              {changeBool(dataHorse.horse_external_coach)}
            </p>
          </div>
          <hr />
          <div>
            <h4>Materiel</h4>
            <p>
              Le cavalier doit avoir sa selle :{" "}
              {changeBool(dataHorse.horse_material)}
            </p>
          </div>
          <hr />
          <div>
            <h4>Cavalier ideal</h4>
            <p>Age : {dataHorse.ideal_rider_age} ans</p>
            <p>
              Années de pratique :{dataHorse.ideal_rider_years_of_practice} ans
            </p>
            <p>Niveau de Galop : {dataHorse.ideal_rider_gallop_level}</p>
            <p>Est-il véhiculé ? {changeBool(dataHorse.ideal_rider_vehiculed)}</p>
            <p>
              A-t-il déjà eu un cheval sous sa responsabilite ?{" "}
              {changeBool(dataHorse.ideal_rider_managed_horse)}
            </p>
          </div>
        </div>
      </>
      : 
      <div className="Result_annonce">
        <p>Cette annonce n'est pas accessible ou n'existe plus.</p>
      </div>
    }
    </>
  );
};
export default HorseResultAnnonce;
