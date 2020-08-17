import React, { useState} from "react";
import "./landing.css";
import { Link, Redirect } from "react-router-dom";
import logo from "../SVG-icons/cavalcloud-logo.png";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Axios from "axios";
import ModalRedirect from "../common/ModalRedirect";


const Register = () => {
  // Check if subscribe successfull or not
  const [success, setSuccess] = useState(null);
  //post new user
  const [dataUser, setDataUser] = useState({
    user_lastname: "",
    user_firstname: "",
    user_email: "",
    user_password: "",
    user_accept_CGV: null,
  });


  const subscribe = (e) => {
    e.preventDefault();
    Axios
      .post("http://localhost:4000/api/users/register", dataUser)
      .catch(err => console.error(err))
      .finally(setSuccess(true));
      setModalShow(true);
      setTimeout(() => setLogin(true), 3000);
  };

const [modalShow, setModalShow] = useState(false);
const [login, setLogin] = useState(false);

  return (
    <>
    {login ? <Redirect to="/login" /> : null}
    <div className="register_page">
      <img className="register_logo" src={logo} alt="logo" />

      {success === true ? (
        <div class="alert alert-success" role="alert">
          Votre compte est désormais créé, vous pouvez vous connecter.
        </div>
      ) : success === false ? (
        <div class="alert alert-danger" role="alert">
          Un problème est survenu lors de la création de votre compte, veuillez
          réessayer.
        </div>
      ) : (
        ""
      )}

      <div>
        <form className="register_forms">
          <label>
            <input
              required
              className="register_input_text"
              type="text"
              placeholder=" Nom"
              autoFocus
              value={dataUser.user_lastname}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_lastname: e.target.value })
              }
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              required
              className="register_input_text"
              type="text"
              placeholder=" Prénom"
              value={dataUser.user_firstname}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_firstname: e.target.value })
              }
            />
          </label>
        </form>
        <form className="register_forms">
          <label>
            <input
              className="register_input_text"
              type="email"
              placeholder=" Adresse mail"
              required
              value={dataUser.user_email}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_email: e.target.value })
              }
            />
          </label>
        </form>
        <form className="register_forms">
          <label className="register_mdp">
            <input
              className="register_input_text"
              type="password"
              placeholder=" Mot de passe"
              required
              value={dataUser.user_password}
              onChange={(e) =>
                setDataUser({ ...dataUser, user_password: e.target.value })
              }
            />
          </label>
        </form>
        <Form className="register_checkbox">
          <FormGroup check inline>
            <Label check>
              <Input
                type="checkbox"
                required
                id="register_checkbox_inp"
                value={dataUser.user_accept_CGV}
                onChange={(e) =>
                  setDataUser({
                    ...dataUser,
                    user_accept_CGV: !dataUser.user_accept_CGV,
                  })
                }
              />
              J'accepte les conditions d'utilisation
            </Label>
          </FormGroup>
        </Form>
      </div>

      {dataUser.user_lastname &&
      dataUser.user_firstname &&
      dataUser.user_password &&
      dataUser.user_email !== "" &&
      dataUser.user_accept_CGV  ? (
        <button
          type="submit"
          className="register_button"
          onClick={(e) => subscribe(e)}
        >
          Créer un compte
        </button>
      ) : (
        <button
          type="submit"
          className="register_buttonLocked"
          disabled='true'
          onClick={(e) => subscribe(e)}
        >
          Créer un compte
        </button>
      )}
      <ModalRedirect show={modalShow} />
      <div>
        <p>Vous avez déjà un compte ?</p>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <p className="register_low_text">Se connecter</p>
        </Link>
      </div>
    </div>
    </>
  );
};
export default Register;
