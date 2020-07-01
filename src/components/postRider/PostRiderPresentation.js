import React, { useState, useEffect } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import FloatingButton from "../common/FloatingButton";

const PostRiderPresentation = () => {
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [codeP, setCodeP] = useState("");
  const [message, setMessage] = useState("");
  const [selfWord1, setSelfWord1] = useState("");
  const [selfWord2, setSelfWord2] = useState("");
  const [selfWord3, setSelfWord3] = useState("");
  const [ridingWord1, setRidingWord1] = useState("");
  const [ridingWord2, setRidingWord2] = useState("");
  const [ridingWord3, setRidingWord3] = useState("");

  return (
    <div className="postRider_page">
      <div className="postRider_forms">
        <h4>Présentation:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Prénom"
              onChange={(event) => setPrenom(event.target.value)}
              autoFocus
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Age"
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
              onChange={(event) => setCodeP(event.target.value)}
            />
          </label>
        </form>
        <hr />
        <h4>Message:</h4>
        <form className="postRider_message">
          <label>
            <textarea
              className="postRider_input"
              type="text"
              placeholder="Ajoutez quelques mots"
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour me définir:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Un"
              onChange={(event) => setSelfWord1(event.target.value)}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setSelfWord2(event.target.value)}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setSelfWord3(event.target.value)}
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour définir mon équitation:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Un"
              onChange={(event) => setRidingWord1(event.target.value)}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setRidingWord2(event.target.value)}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setRidingWord3(event.target.value)}
            />
          </label>
        </form>
      </div>
      <Link to="/post-rider" style={{ textDecoration: "none" }}>
        <FloatingButton btnName={"Valider"} />
      </Link>
    </div>
  );
};
export default PostRiderPresentation;
