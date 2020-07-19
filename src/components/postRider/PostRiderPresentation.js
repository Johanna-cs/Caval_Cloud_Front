import React, { useState, useContext } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import FloatingButton from "../common/FloatingButton";
import Header from "../Header_footer/Header";
import Axios from "axios";
import { RiderContext } from "../context/RiderContext";

const PostRiderPresentation = (props) => {

  const { riderProfile, setRiderProfile } = useContext(RiderContext)

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3010/api/users", riderProfile).catch((err) =>
      console.error(err)
    );
  };

  return (
    <>
    <Header className="header" title="Ma Présentation" />
    <div className="postRider_page">
      <div className="postRider_forms">
  <h1>{riderProfile.prenom}-{riderProfile.age}-{riderProfile.codePostal}</h1>
  <p>{riderProfile.message}</p>
  <h5>{riderProfile.selfWord1}-{riderProfile.selfWord2}-{riderProfile.selfWord3}</h5>
  <h5>{riderProfile.ridingWord1}-{riderProfile.ridingWord2}-{riderProfile.ridingWord3}</h5>

        <h4>Présentation: </h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Prénom"
              onChange={(e) => setRiderProfile({...riderProfile, prenom : e.target.value })}
              value={riderProfile.prenom}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, age: event.target.value })}
              value={riderProfile.age}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
              onChange={(event) => setRiderProfile({ ...riderProfile, codePostal: Number(event.target.value) })}
              value={riderProfile.codePostal}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, message: event.target.value })}
              value={riderProfile.message}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, selfWord1: event.target.value })}
              value={riderProfile.selfWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setRiderProfile({ ...riderProfile, selfWord2: event.target.value })}
              value={riderProfile.selfWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setRiderProfile({ ...riderProfile, selfWord3: event.target.value })}
              value={riderProfile.selfWord3}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, ridingWord1: event.target.value })}
              value={riderProfile.ridingWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setRiderProfile({ ...riderProfile, ridingWord2: event.target.value })}
              value={riderProfile.ridingWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setRiderProfile({ ...riderProfile, ridingWord3: event.target.value })}
              value={riderProfile.ridingWord3}
            />
          </label>
        </form>
      </div>
          <Link to="/post-rider" style={{ textDecoration: "none" }}>
            <FloatingButton
              btnName={"Valider"}
              type="submit"
            />
          </Link>
    </div>
    </>
  );
};
export default PostRiderPresentation;
