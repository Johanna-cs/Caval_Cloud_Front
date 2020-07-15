import React, { useState } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import logo from "../SVG-icons/cavalcloud-logo.png";


function MyProfile(props) {

    const [modif, setModif] = useState(false);
    const [profile, setProfile] = useState({
      nom: "Horsini",
      prenom: "Fanny",
      mail: "fanny.horsini@gmail.com",
      phone:"0606060606",
      password: "123456",
      photo:{logo},
    });
    const [modifiedProfile, setModifiedProfile] = useState({
      mail: profile.mail,
      password: profile.password,
      phone: profile.phone,
      photo: profile.photo,
    });
    const [typedPW, setTypedPW] = useState("");
    const [validPW, setValidPW] = useState();
    const changePW = (e) => {
      return e.target.value !== "" &&
        typedPW !== "" &&
        e.target.value === typedPW
        ? setValidPW(true) &
            setModifiedProfile({ ...modifiedProfile, password: e.target.value })
        : setValidPW(false);
    };
    const modifprof = () => {
      setModif(!modif);
    };
    const validprof = () => {
      setProfile({
        ...profile,
        mail: modifiedProfile.mail,
        password: modifiedProfile.password,
        phone: modifiedProfile.phone,
        photo: modifiedProfile.photo,
      });
      setModif(!modif);
    };
  return (
    <>
      <Header className="header" title="Mon Profil" />
      <div className="Profile-Page">
        <div className="Profile-row">
          <img className="Profile-photo" src={logo} alt="logo" />
          <p className="Profile-infos">
            {profile.prenom} {profile.nom}
          </p>
        </div>
        <hr />
        <h4>Email:</h4>
        {modif ? (
          <input
            type="mail"
            value={modifiedProfile.mail}
            onChange={(e) =>
              setModifiedProfile({
                ...modifiedProfile,
                mail: e.target.value,
              })
            }
          />
        ) : (
          profile.mail
        )}
        <hr />
        <h4>Téléphone:</h4>
        {modif ? (
          <input
            type="tel"
            value={modifiedProfile.phone}
            onChange={(e) =>
              setModifiedProfile({
                ...modifiedProfile,
                phone: e.target.value,
              })
            }
          />
        ) : (
          profile.phone
        )}
        <hr />
        <h4>Mot de passe:</h4>
        {modif ? (
          <>
            <tr className="entete">Nouveau mot de passe </tr>
            <tr className="valeur">
              <input
                type="password"
                className={validPW ? "valid" : "invalid"}
                value={typedPW}
                onChange={(e) => setTypedPW(e.target.value)}
              />
            </tr>
            <tr className="entete">Valider mot de passe </tr>
            <tr>
              <input
                type="password"
                className={validPW ? "valid" : "invalid"}
                onChange={(e) => changePW(e)}
              />
            </tr>
          </>
        ) : (
          ""
        )}
        <div>
          {modif ? (
            <button className="Profile-button" onClick={(e) => validprof(e)}>
              Valider mon profil
            </button>
          ) : (
            <button className="Profile-button" onClick={(e) => modifprof(e)}>
              Modifier mon profil
            </button>
          )}
        </div>
      </div>
      <hr />
      <div className="Profile-annonces">
        <h3>Vous n'avez pas encore publié d'annonce.</h3>
      </div>
    </>
  );
}

export default MyProfile;