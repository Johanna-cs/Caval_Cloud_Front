import React from "react";
import "./postRider.css";
import { Link } from "react-router-dom";


const PostRiderPresentation = () => {

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
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
            />
          </label>
        </form>
        <hr />
        <h4>Message:</h4>
        <form className="postRider_message">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Ajoutez quelques mots"
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour me définir:</h4>
        <form className="postRider-form">
          <label>
            <input className="postRider_input" type="text" placeholder="Un" />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input className="postRider_input" type="text" placeholder="Deux" />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour définir mon équitation:</h4>
        <form className="postRider-form">
          <label>
            <input className="postRider_input" type="text" placeholder="Un" />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input className="postRider_input" type="text" placeholder="Deux" />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
            />
          </label>
        </form>
      </div>
      <Link to="/PostRider" style={{ textDecoration: "none" }}>
        <div className="search-button">
          <button id="search-button">Valider</button>
        </div>
      </Link>
    </div>
  );
};
export default PostRiderPresentation;
