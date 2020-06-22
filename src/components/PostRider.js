import React, { useState } from "react";
import "./postRider.css";
import { Collapse, Button} from "reactstrap";
import { Link } from "react-router-dom";
import SlidingButton from "./common/SlidingButton";
import RadioButton from "./common/RadioButton";
import Carousel from "./common/Carousel";
import logo from "./SVG-icons/cavalcloud-logo.png";
import Checkbox from "./common/Checkbox";
import RadioCheck from "./common/RadioCheck";

const PostRider = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
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
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <Link to="/PostRiderPresentation" style={{ textDecoration: "none" }}>
          <button className="postRider_edit-button">
            Editer votre présentation
          </button>
        </Link>
      </div>
      <hr />
      <div>
        <h4>Budget</h4>
        <p>125€ / mois</p>
        <div>
          <Button
            onClick={toggle}
            style={{
              display: "flex",
              backgroundColor: "#5d5aa4",
              marginBottom: "1em",
            }}
          >
            <svg
              class="bi bi-chevron-down"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
          <Collapse isOpen={isOpen}>
            <div>
              <h4>Prix mensuel maximum:</h4>
              <form className="postRider_price-form">
                <label>
                  <input
                    className="postRider_input"
                    type="number"
                    placeholder=" Budget"
                    autoFocus
                  />
                </label>
              </form>
              <h4>Devise:</h4>
              <RadioButton
                radioButtonText="Euros - €"
                radioButtonName="devise"
                radioButtonId="devise1"
              />
              <RadioButton
                radioButtonText="Livre sterling - £"
                radioButtonName="devise"
                radioButtonId="devise2"
              />
              <RadioButton
                radioButtonText="Dollar - $"
                radioButtonName="devise"
                radioButtonId="devise3"
              />
            </div>
          </Collapse>
        </div>
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
        <h4>Disciplines</h4>
        <div className="postRider-disciplineList">
          <Checkbox CheckboxText="Obstacle" />
          <Checkbox CheckboxText="Dressage" />
          <Checkbox CheckboxText="CCE" />
          <Checkbox CheckboxText="Ethologie" />
          <Checkbox CheckboxText="Attelage" />
          <Checkbox CheckboxText="TREC" />
        </div>
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
        <h4>Rythme de venue</h4>
        <p>Fréquence : 5 à 7 fois / semaine</p>
        <p>Régularité: jours fixes</p>
        <div>
          <Button
            onClick={toggle}
            style={{
              display: "flex",
              backgroundColor: "#5d5aa4",
              marginBottom: "1em",
            }}
          >
            <svg
              className="bi bi-chevron-down"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
          <Collapse isOpen={isOpen}>
            <div>
              <h4>Fréquence:</h4>
              <RadioButton
                radioButtonText="5 à 7 fois / semaine"
                radioButtonName="frequency"
                radioButtonId="frequency1"
              />
              <RadioButton
                radioButtonText="3 à 4 fois / semaine"
                radioButtonName="frequency"
                radioButtonId="frequency2"
              />
              <RadioButton
                radioButtonText="2 fois / semaine"
                radioButtonName="frequency"
                radioButtonId="frequency3"
              />
              <RadioButton
                radioButtonText="1 fois / semaine"
                radioButtonName="frequency"
                radioButtonId="frequency4"
              />
              <h4>Régularité:</h4>
              <SlidingButton
                SlidingButtonText="Jours fixes"
                SlidingButtonID="fixedDaysSwitch"
              />
            </div>
          </Collapse>
        </div>
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
      <div className="post-button">
        <button id="post-button">PUBLIER MON ANNONCE</button>
      </div>
    </div>
  );
};
export default PostRider;