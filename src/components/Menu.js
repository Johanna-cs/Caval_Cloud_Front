import React, { useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";
import Home from "./SVG-icons/home.svg";
import Save from "./SVG-icons/saved-researched.svg";
import Message from "./SVG-icons/message.svg";
import Profil from "./SVG-icons/profil.svg";
import ModalSoon from "./common/ModalSoon";

const Menu = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const modalSoon = () => {
    setModalShow(true);
    setTimeout(() => setModalShow(false), 3000);
  };

  return (
    <>
      <div className="menu">
        <div className="divBtn">
          <Link
            className="menu_home"
            to="/home"
            style={{ textDecoration: "none" }}
          >
            <div className="logoM">
              <img
                src={Home}
                width="30"
                height="30"
                alt="home caval cloud"
                className="logo-home logo"
              />
              <p>Accueil</p>
            </div>
          </Link>
        </div>

        <div className="divBtn">
          <Link
            className="menu_save"
            to="/favorites"
            style={{ textDecoration: "none" }}
          >
            <div className="logoM">
              <img
                src={Save}
                width="30"
                height="30"
                alt="home caval cloud"
                className="logo-save logo"
              />
              <p>Favoris</p>
            </div>
          </Link>
        </div>

        <div onClick={modalSoon} className="divBtn">
          <div className="menu_message">
            <div className="logoM">
              <img
                src={Message}
                width="30"
                height="30"
                alt="home caval cloud"
                className="logo-mess logo"
              />
              <p>Message</p>
            </div>
          </div>
          <ModalSoon show={modalShow} />
        </div>

        <div className="divBtn">
          <Link
            className="menu_myprofil"
            to="/my-profile"
            style={{ textDecoration: "none" }}
          >
            <div className="logoM">
              <img
                src={Profil}
                width="30"
                height="30"
                alt="home caval cloud"
                className="logo-profil logo"
              />
              <p>Profil</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
