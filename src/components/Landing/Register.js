import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";

const Register = () => {
  return (
    <div className="register_page">
      <img className="register_logo" src={logo} alt="logo" />
      <div className="register_forms">
        <form>
          <label>
            <input
              className="register_input_text"
              type="text"
              placeholder=" Nom"
              autoFocus
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="register_input_text"
              type="text"
              placeholder=" Prénom"
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="register_input_text"
              type="email"
              placeholder=" Adresse mail"
            />
          </label>
        </form>
        <form>
          <label className="register_mdp">
            <input
              className="register_input_text"
              type="text"
              placeholder=" Mot de passe"
            />
          </label>
        </form>
        <p>J'accepte les conditions d'utilisation</p>
      </div>
      <button className="register_button">CREER UN COMPTE</button>
      <div>
        <p>Vous avez déjà un compte ?</p>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <p className="register_low_text">Se connecter</p>
        </Link>
      </div>
    </div>
  );
};
export default Register;
