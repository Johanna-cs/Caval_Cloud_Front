import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";

const Login = () => {
  return (
    <div className="login_page">
      <img className="login_logo" src={logo} alt="logo" />
      <div className="login_forms">
        <form>
          <label>
            <input
              className="login_input_text"
              type="email"
              placeholder=" Adresse mail"
              autoFocus
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="login_input_text"
              type="password"
              placeholder=" Mot de passe"
            />
          </label>
        </form>
        <p>Mot de passe oublié</p>
      </div>
      <button className="login_button">Se connecter</button>
      <div>
        <p>Pas encore de compte ?</p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="login_low_text">S'inscrire</p>
        </Link>
      </div>
    </div>
  );
};
export default Login;
