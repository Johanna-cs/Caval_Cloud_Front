import React, { useState } from "react";
import "./postRider.css";
import { Collapse, Button, CardBody, Card } from "reactstrap";

import logo from "./SVG-icons/cavalcloud-logo.png";

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
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={logo} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

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
        <button className="postRider_edit-button">
          Editer votre présentation
        </button>
      </div>
      <hr />
      <div>
        <h4>Budget</h4>
        <p>125€ / mois</p>
        <div>
          <Button
            onClick={toggle}
            style={{ display: "flex", backgroundColor: "#5d5aa4" }}
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
            <Card>
              <CardBody>
                <div>
                  <h4>Prix mensuel maximum:</h4>
                  <form className="postRider_price-form">
                    <label>
                      <input
                        className="postRider_input_price"
                        type="number"
                        placeholder=" Budget"
                        autoFocus
                      />
                    </label>
                  </form>
                  <h4>Devise:</h4>
                  <div className="postRider_radio-devise">
                    Euros - €
                    <input
                      className="form-check-input-devise"
                      type="radio"
                      name="devise"
                      id="devise1"
                      value="option1"
                    />
                    <label
                      className="postRider_radio-devise"
                      for="devise1"
                    ></label>
                  </div>
                  <hr />
                  <div className="postRider_radio-devise">
                    Livre sterling - £
                    <input
                      className="form-check-input-devise"
                      type="radio"
                      name="devise"
                      id="devise2"
                      value="option2"
                    />
                    <label className="form-check-label" for="devise2"></label>
                  </div>
                  <hr />
                  <div className="postRider_radio-devise">
                    Dollar - $
                    <input
                      className="form-check-input-devise"
                      type="radio"
                      name="devise"
                      id="devise3"
                      value="option3"
                    />
                    <label className="form-check-label" for="devise3"></label>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
      <hr />
      <div>
        <h4>Autonomie</h4>
        <p>Je suis véhiculé</p>
        <p>J'ai déjà eu un cheval sous ma responsabilité</p>
      </div>
      <hr />
      <div>
        <h4>Niveau</h4>
        <p>Nombre d'années de pratique cumulées</p>
        <p>Galop</p>
      </div>
      <hr />

      <div className="searchHorse_disc">
        <h4>Disciplines</h4>
        <div className="disciplineList">
          <div className="discipline">
            <label className="container" for="obstacle">
              Obstacle
              <input
                className="discipline-check"
                type="checkbox"
                id="obstacle"
                name="obstacle"
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="discipline">
            <label class="container" for="dressage">
              Dressage
              <input
                className="discipline-check"
                type="checkbox"
                id="dressage"
                name="dressage"
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="discipline">
            <label class="container" for="cce">
              CCE
              <input
                className="discipline-check"
                type="checkbox"
                id="cce"
                name="cce"
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="discipline">
            <label class="container" for="ethologie">
              Ethologie
              <input
                className="discipline-check"
                type="checkbox"
                id="ethologie"
                name="ethologie"
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="discipline">
            <label class="container" for="attelage">
              Attelage
              <input
                className="discipline-check"
                type="checkbox"
                id="attelage"
                name="attelage"
              />
              <span class="checkmark"></span>
            </label>
          </div>

          <div className="discipline">
            <label class="container" for="trec">
              TREC
              <input
                className="discipline-check"
                type="checkbox"
                id="trec"
                name="trec"
              />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h4>Autre</h4>
        <p>Je suis ouvert à pratiquer d'autres disciplines</p>
      </div>
      <hr />
      <div>
        <h4>Rythme de venue</h4>
        <p>Fréquence : 5 à 7 fois / semaine</p>
        <p>Régularité: jours fixes</p>
        <div>
          <Button
            onClick={toggle}
            style={{ display: "flex", backgroundColor: "#5d5aa4" }}
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
            <Card>
              <CardBody>
                <div>
                  <h4>Fréquence:</h4>
                  <div className="postRider-form-check">
                    5 à 7 fois / semaine
                    <input
                      className="postRider-form-check-input"
                      type="radio"
                      name="frequency"
                      id="frequency1"
                      value="option1"
                      checked
                    />
                    <label
                      className="postRider-form-check-label"
                      for="frequency1"
                    ></label>
                  </div>
                  <hr />
                  <div className="postRider-form-check">
                    3 à 4 fois / semaine
                    <input
                      className="postRider-form-check-input"
                      type="radio"
                      name="frequency"
                      id="frequency2"
                      value="option2"
                      checked
                    />
                    <label
                      className="postRider-form-check-label"
                      for="frequency2"
                    ></label>
                  </div>
                  <hr />
                  <div className="postRider-form-check">
                    2 fois / semaine
                    <input
                      className="postRider-form-check-input"
                      type="radio"
                      name="frequency"
                      id="frequency3"
                      value="option3"
                      checked
                    />
                    <label
                      className="postRider-form-check-label"
                      for="frequency3"
                    ></label>
                  </div>
                  <hr />
                  <div className="postRider-form-check">
                    1 fois / semaine
                    <input
                      className="postRider-form-check-input"
                      type="radio"
                      name="frequency"
                      id="frequency4"
                      value="option4"
                      checked
                    />
                    <label
                      className="postRider-form-check-label"
                      for="frequency4"
                    ></label>
                  </div>
                  <hr />
                  <h4>Régularité:</h4>
                  <div className="postRider-form-check">
                    Jours fixes
                    <div className="postRider-form-check">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customSwitch1"
                      />
                      <label
                        className="custom-control-label"
                        for="customSwitch1"
                      ></label>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
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
      <div>
        <h4>Coaching</h4>
        <p>J'aimerais avoir accès à des cours</p>
        <p>J'aimerais faire intervenir un coach de l'extérieur</p>
      </div>
      <hr />
      <div>
        <h4>Concours</h4>
        <p>J'aimerais pouvoir sortir en concours</p>
      </div>
    </div>
  );
};
export default PostRider;
