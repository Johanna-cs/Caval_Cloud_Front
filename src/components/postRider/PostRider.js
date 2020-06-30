import React, { useState } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import Header from '../Header_footer/Header';
import SlidingButton from "../common/SlidingButton";
import Carousel from "../common/Carousel";
import logo from "../SVG-icons/cavalcloud-logo.png"
import FloatingButton from "../common/FloatingButton";
import Disciplines from "../common_section/Disciplines";
import BudgetMensuel from "../common_section/BudgetMensuel";
import Frequency from "../common_section/Frequency";



const PostRider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header title="POSTER UNE ANNONCE CAVALIER" />
      <div className="postRider_page">
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              Nom, <span>age</span>
            </p>
            <p>Mot 1, Mot 2, Mot 3</p>
          </div>
          <div>
            <h4>Localisation</h4>
          </div>
        </div>
        <Carousel />
        <div>
          <h4>Equitation</h4>
          <p>Mot-Eq 1, Mot-Eq 2, Mot-Eq 3</p>
        </div>
        <div className="postRider_message">
          <h4>Message :</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/PostRiderPresentation" style={{ textDecoration: "none" }}>
            <button className="postRider_edit-button">
              Editer votre présentation
            </button>
          </Link>
        </div>
        <hr />
        <div>
          <BudgetMensuel />
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
        <hr />
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
          <Frequency frequencyTitle="Rythme de la demi-pension" />
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
        <div className="postRider-coaching">
          <SlidingButton
            SlidingButtonText="J'aimerais avoir accès à des cours"
            SlidingButtonID="coachingSwitch"
          />
          <SlidingButton
            SlidingButtonText="J'aimerais faire intervenir un coach extérieur"
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