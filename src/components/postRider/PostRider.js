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
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [frequency, setFrequency] = useState("");
  const [fixedFrequency, setFixedFrequency] = useState(false);
  const [budget, setBudget] = useState(0);
  const [currency, setCurrency] = useState("€");
  const [ageHorse, setAgeHorse] = useState("");
  const [horseSize, setHorseSize] = useState("");
  const [discipline, setDisciplines] = useState([]);
  const [yearsOfPractice, setYearsOfPractice] = useState(0);
  const [gallopLevel, setGallopLevel] = useState(0);
  const [isVehiculed, setIsVehiculed] = useState(false);
  const [doCompetition, setDoCompetition] = useState(false);
  
  const { riderProfile, setRiderProfile } = useContext(RiderContext)

  const getProfile = () => {
    Axios.get(`http://localhost:3010/api/users`)
      .then((res) => setRiderProfile(...res))
      .catch((err) => console.log(err));
  };


  useEffect(() => {
    getProfile();
  }, )

  return (
    <>
      <Header title="Poster une annonce cavalier" />
      <div className="postRider_page">
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {/* {profile.prenom}, <span>{profile.age}</span> */}
              {riderProfile.prenom}, <span>{riderProfile.age}</span>
            </p>
            <p>
              {riderProfile.selfWord1}, {riderProfile.selfWord2},{" "}
              {riderProfile.selfWord3}
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
            {riderProfile.ridingWord1}, {riderProfile.ridingWord2},{" "}
            {riderProfile.ridingWord3}
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
            budget={riderProfile.budget}
            currency={riderProfile.currency}
            priceTitle={'prix minimum :'}
            onChange={(e) => setRiderProfile({...riderProfile, budget : e.target.value })}
            onClick={(e) => setRiderProfile({...riderProfile, currency : e.target.value })}
          />
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <div className="postRider-autonomy">
            <SlidingButton
              SlidingButtonText="Je suis véhiculé"
              SlidingButtonID="vehicledSwitch"
              onClick={() => setRiderProfile({...riderProfile, isVehiculed : !riderProfile.isVehiculed })}
            />
            <SlidingButton
              SlidingButtonText="J'ai déjà eu un cheval sous ma responsabilité"
              SlidingButtonID="responsabilitySwitch"
              onClick={() => setRiderProfile({...riderProfile, hasManaged : !riderProfile.hasManaged })}

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
            onClick={() => setRiderProfile({...riderProfile, isOpenToOtherDiscipline : !riderProfile.isOpenToOtherDiscipline })}
          />
        </div>
        <hr />
        <div>
          <Frequency
            frequencyTitle="Rythme de la demi-pension"
            onClick={(e) => setRiderProfile({...riderProfile, frequency : e.target.value })}
            frequency={riderProfile.frequency}
            changeFixedFrequency={() => setRiderProfile({...riderProfile, fixedFrequency : !riderProfile.fixedFrequency })}
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
            onClick={() => setRiderProfile({...riderProfile, coachingHere: !riderProfile.coachingHere })}
          />
          <SlidingButton
            SlidingButtonText="Intervenant exterieur"
            SlidingButtonID="extCoachSwitch"
            onClick={() => setRiderProfile({...riderProfile, externalCoach: !riderProfile.externalCoach })}
          />
        </div>
        <hr />
        <div>
        <Competition 
            onClick={(e) => setRiderProfile({...riderProfile, doCompetition : e.target.value })}
            />
        </div>
        <FloatingButton btnName={"Poster mon annonce"} />
      </div>
    </>
  );
};
export default PostRider;
