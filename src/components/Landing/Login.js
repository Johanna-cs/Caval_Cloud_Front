import React, { useEffect, useContext, useState } from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import jwt_decode from 'jwt-decode'



const Login = () => {

  let history = useHistory();

//    // Context userProfile in order to simplify user data information management
//   const { userProfile, setUserProfile } = useContext(UserContext);
//   const getUserProfile = () => {
//     Axios
//     .get(`http://localhost:4000/api/users/${userProfile.user_email}`)
//     .then((res)=> setDataUser(res.data))
//     .catch((err) => console.error(err))

// }
  const [dataUser, setDataUser] = useState({
    user_email:'',
    user_password: ''
  })

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
  
  
  // //décoder le token
  // useEffect(() => {
  //   const token = localStorage.usertoken
  //   if (token) {
  //       const decoded = jwt_decode(token)
  //       setUserProfile({
  //           user_ID: decoded.id,
  //           user_email : decoded.email

  //       })
  //   }
  // }, [])



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
      <Link to="/home" style={{ textDecoration: "none" }}>
        <button className="login_button"  onClick={(e) => login(e)}>
          Se connecter
        </button>
      </Link>
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
