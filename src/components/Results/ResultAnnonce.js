import React, { useState, useEffect } from "react";
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

const ResultAnnonce = () => {
  
  const [annonce, setAnnonce] = useState("");

  const getAnnonce = () => {
    Axios.get(`http://localhost:4000/api/annonce=id`)
      .then((res) => setAnnonce(...res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAnnonce();
  }, []);

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
              {annonce.prenom}, <span>{annonce.age}</span>
            </p>
            <p>
              {annonce.selfWord1}, {annonce.selfWord2}, {annonce.selfWord3}
            </p>
          </div>
          <h4>Localisation</h4>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>
            {annonce.ridingWord1}, {annonce.ridingWord2}, {annonce.ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          <p>{annonce.message}</p>
        </div>
        <hr />
        <div>
          <h4>Budget</h4>
          <p>
            {annonce.budget}
            {annonce.currency} / mois
          </p>
        </div>
        <hr />
        <div>
          <h4>Autonomie</h4>
          <p>{annonce.isVehiculed}</p>
          <p>{annonce.responsability}</p>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <p>{annonce.yearsOfPractice}</p>
          <p>{annonce.gallopLevel}</p>
        </div>
        <hr />
        <div className="postRider-disc">
          <h4>Discipline</h4>
          {annonce.disciplines.map((discipline) => (
            <li>{discipline}</li>
          ))}
        </div>
        <hr />
        <div>
          <h4>Autre</h4>
          <p>Je suis ouvert à pratiquer d'autres disciplines</p>
        </div>
        <hr />
        <div>
          <h4>Rythme de venue</h4>
          <p>{annonce.frequency}</p>
          <p>{annonce.fixedFrequency} souhaités</p>
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
          <p>{annonce.doCompetition}</p>
        </div>
      </div>
    </>
  );
};
export default ResultAnnonce;
