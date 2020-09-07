import React, { useState, useEffect } from "react";
import "./landing.css";
import { Link, Redirect } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";
import Axios from "axios";


const Login = () => {

  // Params user for logging
  const [dataUser, setDataUser] = useState({
    user_email:'',
    user_password: ''
  })

  // By default, user is not logged
  const [logged, setLogged] = useState(false)


  // Récupération des erreurs serveur (status 400) lors du login (si erreur existante)
  const [error, setError] = useState(null)


  const login = () => {
    Axios
      .post("https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/login", dataUser)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        setLogged(true)
      }) 
      .catch((err) => setError(err.response.data.error))
  }

  return (
    <>
    {logged ? <Redirect to="/home" /> : null}
    <div className="login_page">
      <img className="login_logo" src={logo} alt="logo" />
      {error != null ? <div class="alert alert-danger" role="alert">{error}</div> : null}
      <div className="login_forms">
        <form>
          <label>
            <input
              className="login_input_text"
              type="email"
              placeholder=" Adresse mail"
              autoFocus
              value={dataUser.user_email}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_email: e.target.value })
              }
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="login_input_text"
              type="password"
              placeholder=" Mot de passe"
              value={dataUser.user_password}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_password: e.target.value })
              }
            />
          </label>
        </form>
        <p>Mot de passe oublié</p>
      </div>
      {/* <Link to="/home" style={{ textDecoration: "none" }}> */}
        <button className="login_button"  onClick={() => login()}>
          Se connecter
        </button>
      {/* </Link> */}
      <div>
        <p>Pas encore de compte ?</p>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <p className="login_low_text">S'inscrire</p>
        </Link>
      </div>
    </div>
    </>
  );
};
export default Login;
