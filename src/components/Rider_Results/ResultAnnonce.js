import React, { useState, useEffect, useContext} from "react"
import "./Result.css"
import Axios from "axios";
import ReturnButton from "../common/ReturnButton"
import { UserContext } from '../context/UserContext'
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";


const ResultAnnonce = (props) => {
  
    // get the rider_ID in order to display the specific result
    const riderId = Number(props.match.params.id)

    // Rider Data information
    const [dataRider, setDataRider] = useState([])

    // Context userProfile in order to simplify user data information management
  const { userProfile, setUserProfile } = useContext(UserContext)
    // Get user information from its ID and then, update userProfile context
    const getUserInfo = () => {
      Axios
      .get(`http://localhost:4000/api/users/${userProfile.user_ID}`)
      .then(res => setUserProfile(res.data))
      .catch(err=> console.error(err))
    }
    // Get information about the selected rider from its ID
    const getRiderInformation = () => {
      Axios
      .get(`http://localhost:4000/api/riders/${riderId}`)
      .then(res => setDataRider(res.data[0]))
      .catch(err=> console.error(err))
    }
    // Transforme les booléens récupérés de l'annonce en oui ou non 
    const changeBool = (bool) => bool === true ? 'oui' : 'non'

    // When a result is displayed, the function getRiderInformation starts first in order to query BDD
    useEffect(() => {
      getRiderInformation();
      getUserInfo();
      changeBool(dataRider);
      }, 
    [])
  
  return (
    <>
      <div className="headerAnnonce">
        <h3 id="annonceTitle">Annonce Cavalier</h3>{" "}
      </div>
      <ReturnButton />
      <div className="Result_annonce">
        <div className="annonce_header">
          <img id="annonce_logo" src={userProfile.user_avatar} alt="logo" />
          <div>
            <h5>
              {dataRider.rider_firstname},{" "}
              <span>{dataRider.rider_age} ans</span>
            </h5>
            <p>
              {dataRider.rider_selfWord1}, {dataRider.rider_selfWord2},{" "}
              {dataRider.rider_selfWord3}
            </p>
            <p>N° de téléphone : {userProfile.user_phone}</p>
            <p>Mail : {userProfile.user_email}</p>
          </div>
          <h4>Localisation</h4>
          <p>{dataRider.rider_postal_code} {" "} {dataRider.rider_localisation}</p>
        </div>
        <h5>Quelques photos</h5>
        <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
          <img src={dataRider.rider_photo1} alt="rider_photo1" className='imagesRider'/>
          <img src={dataRider.rider_photo2} alt="rider_photo2" className='imagesRider' />
          <img src={dataRider.rider_photo3} alt="rider_photo3" className='imagesRider'/>
        </Carousel>
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
          <h5>Est-il véhiculé ? </h5>
          <p>{changeBool(dataRider.rider_vehiculed)}</p>
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

          <p>
            Ouvert à d'autres disciplines :{" "}
            {changeBool(dataRider.rider_agree_other_discipline)}
          </p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{dataRider.rider_riding_frequency}</p>
          <p>
            Jours fixes souhaités : {changeBool(dataRider.rider_fixed_day)}{" "}
          </p>
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <p>Taille :{dataRider.ideal_horse_size} cm</p>
          <p>Tempérament : {dataRider.ideal_horse_temper}</p>
          <p>Caractère : {dataRider.ideal_horse_caracter}</p>
          <p>Physique : {dataRider.ideal_horse_body_type}</p>
          <p>Age : {dataRider.ideal_horse_age} ans</p>
        </div>
        <hr />
        <h4>Coaching</h4>
        <p>
          J'aimerais avoir accès à des cours :{" "}
          {changeBool(dataRider.rider_coaching_here)}
        </p>
        <p>
          J'aimerais faire intervenir un coach de l'extérieur :{" "}
          {changeBool(dataRider.rider_external_coach)}
        </p>
        <hr />
        <div>
          <h4>Concours</h4>
          <p>{dataRider.rider_competition}</p>
        </div>
      </div>
      <div className="Result-filterbarBot">
        <ReturnButton />
      </div>
    </>
  );
};
export default ResultAnnonce;
