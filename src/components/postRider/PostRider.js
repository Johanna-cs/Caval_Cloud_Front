import React, { useState, useEffect, useContext } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import Header from "../Header_footer/Header";
import SlidingButton from "../common/SlidingButton";
import Carousel from "../common/Carousel";
import logo from "../SVG-icons/cavalcloud-logo.png";
import FloatingButton from "../common/FloatingButton";
import Disciplines from "../common_section/Disciplines";
import BudgetMensuel from "../common_section/BudgetMensuel";
import Frequency from "../common_section/Frequency";
import IdealHorse from "../searchHorse/IdealHorse";
import Axios from "axios";
import Competition from "../common_section/Competition";
import { RiderContext } from "../context/RiderContext";

const PostRider = () => {
  const [ageHorse, setAgeHorse] = useState("");
  const [horseSize, setHorseSize] = useState("");
  
  const { riderProfile, setRiderProfile } = useContext(RiderContext)

  const postDataRider = () => {
    Axios
    .post(`http://localhost:4000/api/riders`, riderProfile)
    .catch((err) => console.log(err))
    .finally(console.log(riderProfile))
  };

  return (
    <>
      <Header title="Poster une annonce cavalier" />
      <div className="postRider_page">
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {/* {profile.prenom}, <span>{profile.age}</span> */}
              {riderProfile.rider_firstname}, <span>{riderProfile.rider_age}</span>
            </p>
            <p>
              {riderProfile.rider_selfWord1}, {riderProfile.rider_selfWord2},{" "}
              {riderProfile.rider_selfWord3}
            </p>
          </div>
          <div>
            <h4>Localisation</h4>
          </div>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {riderProfile.rider_ridingWord1}, {riderProfile.rider_ridingWord2},{" "}
            {riderProfile.rider_ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message : </h4>
          <Link
            to={{
              pathname: "/PostRiderPresentation",
              style: { textDecoration: "none" },
            }}
          >
            <button className="postRider_edit-button">
              Editer votre présentation
            </button>
          </Link>
        </div>
        <hr />
        <div>
          <BudgetMensuel
            budget={riderProfile.rider_budget}
            currency={riderProfile.rider_currency_budget}
            priceTitle={'prix minimum :'}
            onChange={(e) => setRiderProfile({...riderProfile, rider_budget : e.target.value })}
            onClick={(e) => setRiderProfile({...riderProfile, rider_currency_budget : e.target.value })}
          />
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <div className="postRider-autonomy">
            <SlidingButton
              SlidingButtonText="Je suis véhiculé"
              SlidingButtonID="vehicledSwitch"
              onClick={() => setRiderProfile({...riderProfile, rider_vehiculed: !riderProfile.rider_vehiculed })}
            />
            <SlidingButton
              SlidingButtonText="J'ai déjà eu un cheval sous ma responsabilité"
              SlidingButtonID="responsabilitySwitch"
              onClick={() => setRiderProfile({...riderProfile, rider_managed_horse : !riderProfile.rider_managed_horse })}

            />
          </div>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>Nombre d'années de pratique cumulées</p>
          <p>Galop</p>
        </div>

        

        <div className="postRider-disc">
          <Disciplines />
        </div>
        <hr />
        <div>
          <h4>Autre</h4>
          <SlidingButton
            SlidingButtonText="Je suis ouvert à pratiquer d'autres disciplines"
            SlidingButtonID="otherSwitch"
            onClick={() => setRiderProfile({...riderProfile, rider_agree_other_discipline : !riderProfile.rider_agree_other_discipline })}
          />
        </div>
        <hr />
        <div>
          <Frequency
            frequencyTitle="Rythme de la demi-pension"
            onClick={(e) => setRiderProfile({...riderProfile, rider_riding_frequency : e.target.value })}
            frequency={riderProfile.rider_riding_frequency}
            changeFixedFrequency={() => setRiderProfile({...riderProfile, rider_fixed_day : !riderProfile.rider_fixed_day })}
          />
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <IdealHorse
            horseSize={horseSize}
            changeSize={(e) => setHorseSize(e.target.value)}
            changeAge={(f) => setAgeHorse(f.target.value)}
            ageHorse={ageHorse}
          />
        </div>
        <hr />
        <h4>Coaching</h4>
        <div className="postRider-coaching">
          <SlidingButton
            SlidingButtonText="Sur place"
            SlidingButtonID="coachingSwitch"
            onClick={() => setRiderProfile({...riderProfile, rider_coaching_here: !riderProfile.rider_coaching_here })}
          />
          <SlidingButton
            SlidingButtonText="Intervenant exterieur"
            SlidingButtonID="extCoachSwitch"
            onClick={() => setRiderProfile({...riderProfile, rider_external_coach: !riderProfile.rider_external_coach })}
          />
        </div>
        <hr />
        <div>
        <Competition 
            onClick={(e) => setRiderProfile({...riderProfile, rider_competition : e.target.value })}
            />
        </div>
          <FloatingButton btnName={"Poster mon annonce"} onClick={() => postDataRider()} />
      </div>
    </>
  );
};
export default PostRider;
