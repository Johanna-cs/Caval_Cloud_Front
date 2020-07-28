import React, { useState, useEffect } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";
import Axios from "axios";
import { useHistory } from "react-router-dom";



const Login = () => {

  let history = useHistory();
  const [dataUser, setDataUser] = useState({
    user_email: "",
    user_password: ""
  });
  const login = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4000/api/users/login", dataUser)
      .then((res) => {
        localStorage.setItem("usertoken", res.data);
        history.push(`/home`);
        window.location.reload(false);
        return res.data;
      })
      .catch((err) => console.error(err));      
  };




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
      <button className="login_button"  onClick={(e) => login(e)}>
        Se connecter
      </button>
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
