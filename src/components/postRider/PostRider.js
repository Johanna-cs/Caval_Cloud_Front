import React, { useState, useEffect } from "react";
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


const PostRider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const [frequency, setFrequency] = useState("");
  const [fixedFrequency, setFixedFrequency] = useState(false);
  const [budget, setBudget] = useState(null);
  const [currency, setCurrency] = useState("€");
  const [discipline, setDisciplines] = useState([]);
  const [yearsOfPractice, setYearsOfPractice] = useState(null);
  const [gallopLevel, setGallopLevel] = useState(null);
  const [isVehiculed, setIsVehiculed] = useState(false);
  const [doCompetition, setDoCompetition] = useState(false);
  
  // const [profile, setProfile] = useState({
  //   prenom: "",
  //   age: "",
  //   codeP: "",
  //   message: "",
  //   selfWord1: "",
  //   selfWord2: "",
  //   selfWord3: "",
  //   ridingWord1: "",
  //   ridingWord2: "",
  //   ridingWord3: "",
  // });
  const [riderProfile, setRiderProfile] = useState("");
  // const [age, setAge] = useState("");
  // const [codeP, setCodeP] = useState("");
  // const [message, setMessage] = useState("");
  // const [selfWord1, setSelfWord1] = useState("");
  // const [selfWord2, setSelfWord2] = useState("");
  // const [selfWord3, setSelfWord3] = useState("");
  // const [ridingWord1, setRidingWord1] = useState("");
  // const [ridingWord2, setRidingWord2] = useState("");
  // const [ridingWord3, setRidingWord3] = useState("");

const getProfile = () => {
  Axios.get(`http://localhost:3010/api/users`)
    .then((res) => setRiderProfile(...res))
    .catch((err) => console.log(err));
};

useEffect(() => {
  getProfile();
});

  return (
    <>
      <Header title="POSTER UNE ANNONCE CAVALIER" />
      <div className="postRider_page">
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {/* {profile.prenom}, <span>{profile.age}</span> */}
              {riderProfile.prenom}, <span>{riderProfile.age}</span>
            </p>
            <p>
              {riderProfile.selfWord1}, {riderProfile.selfWord2}, {riderProfile.selfWord3}
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
            {riderProfile.ridingWord1}, {riderProfile.ridingWord2}, {riderProfile.ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          {/* <p>{riderProfile.message}</p> */}
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
            budget={budget}
            currency={currency}
            priceTitle={'prix minimum :'}
            onChange={(e) => setBudget(e.target.value)}
            onClick={(e) => setCurrency(e.target.value)}
            checked
          />
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <div className="postRider-autonomy">
            <SlidingButton
              SlidingButtonText="Je suis véhiculé"
              SlidingButtonID="vehicledSwitch"
            />
            <SlidingButton
              SlidingButtonText="J'ai déjà eu un cheval sous ma responsabilité"
              SlidingButtonID="responsabilitySwitch"
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
          />
        </div>
        <hr />
        <div>
          <Frequency
            frequencyTitle="Rythme de la demi-pension"
            onClick={(e) => setFrequency(e.target.value)}
            frequency={frequency}
            changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
          />
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <IdealHorse />
        </div>
        <hr />
        <h4>Coaching</h4>
        <div className="postRider-coaching">
          <SlidingButton
            SlidingButtonText="Sur place"
            SlidingButtonID="coachingSwitch"
          />
          <SlidingButton
            SlidingButtonText="Intervenant exterieur"
            SlidingButtonID="extCoachSwitch"
          />
        </div>
        <hr />
        <div>
          <h4>Concours</h4>
          <SlidingButton
            SlidingButtonText="J'aimerais pouvoir sortir en concours"
            SlidingButtonID="competeSwitch"
          />
        </div>
        <FloatingButton btnName={"Poster mon annonce"} />
      </div>
    </>
  );
};
export default PostRider;
