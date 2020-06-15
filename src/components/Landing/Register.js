import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Register = () => {
  return (
    <div className="register_page">
      <img className="register_logo" src={logo} alt="logo" />
      <div>
        <form className="register_forms">
          <label>
            <input
              className="register_input_text"
              type="text"
              placeholder=" Nom"
              autoFocus
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              className="register_input_text"
              type="text"
              placeholder=" Prénom"
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              className="register_input_text"
              type="email"
              placeholder=" Adresse mail"
            />
          </label>
        </form>
        <form className="register_forms">
          <label className="register_mdp">
            <input
              className="register_input_text"
              type="text"
              placeholder=" Mot de passe"
            />
          </label>
        </form>
        <Form className="register_checkbox">
          <FormGroup check inline>
            <Label check>
              <Input type="checkbox" id="register_checkbox_inp" /> J'accepte les
              conditions d'utilisation
            </Label>
          </FormGroup>
        </Form>
      </div>
      <button className="register_button">CREER UN COMPTE</button>
      <div>
        <p>Vous avez déjà un compte ?</p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="register_low_text">Se connecter</p>
        </Link>
      </div>
    </div>
  );
};
export default Register;
