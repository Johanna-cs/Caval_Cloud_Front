import React, { useState, useContext, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import { storage } from "../Firebase";
import { UserContext } from "../context/UserContext";
import Axios from "axios";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import ResultCard from "../Rider_Results/ResultCard";

const MyProfile = (props) => {
  // Get user data information from its id :
  const getMyProfile = () => {
    Axios.get(`http://localhost:4000/api/users/${userProfile.user_ID}`)
      .then((res) => setDataUser(res.data))
      .catch((err) => console.error(err));
  };

  // Update user data information from its id :
  const updateMyProfile = () => {
    Axios.put(`http://localhost:4000/api/users/${dataUser.user_ID}`, dataUser)
    .catch(err=> console.error(err))
  }

  const getRiderPosts = () => {
    Axios.get(`http://localhost:4000/api/riders`)
      .then((res) => setRiderAnnonce(res.data))
      .catch((err) => console.error(err));
    console.log(riderAnnonce);
  };

  const getHorsePosts = () => {
    Axios.get(`http://localhost:4000/api/horses`)
      .then((res) => setHorseAnnonce(res.data))
      .catch((err) => console.error(err));
    console.log(horseAnnonce);
  };

  const [riderAnnonce, setRiderAnnonce] = useState([]);
  const [horseAnnonce, setHorseAnnonce] = useState([]);

  // User Data storage:
  const [dataUser, setDataUser] = useState({
    user_lastname: "",
    user_firstname: "",
    user_email: "",
    user_password: "",
    user_avatar : "",
    user_phone : ""
  });

  // Context userProfile in order to simplify user data information management
  const { userProfile, setUserProfile } = useContext(UserContext);

  // Management of image upload :
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  // User want to modify profile or not, display page will change :
  const [modif, setModif] = useState(false);
  const modifprof = () => {
    setModif(!modif);
  };
  const validprof = () => {
    setModif(!modif);
  };

  // Check password confirmation :
  const [validPW, setValidPW] = useState(null);

  // Start to catch user info and then, save it in the user context
  useEffect(() => {
    getMyProfile();
    getRiderPosts();
    getHorsePosts();
  }, []);

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => setDataUser({...dataUser, user_avatar : url}))
      }
    );
  };
  return (
    <>
      <Header className="header" title="Mon Profil" />
      {/* <button onClick={() => console.log(dataUser.user_avatar)}>Profile</button> */}
      <div className="Profile-Page">
        <div className="Profile-row">
          {modif ? (
            <div className="Profile-image">
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload} className="upload-button">
                Valider la photo
              </button>
              <img
                src={dataUser.user_avatar}
                className="Profile-photo"
                alt="Ajouter"
              />
            </div>
          ) : (
            <img
              src={dataUser.user_avatar}
              className="Profile-photo"
              alt="Ajouter"
            />
          )}
          <p className="Profile-infos">
            {dataUser.user_firstname} {dataUser.user_lastname}
          </p>
        </div>
        <hr />
        <h4>Email :</h4>
        {modif ? (
          <input
            id="input"
            type="mail"
            placeholder={dataUser.user_email}
            value={dataUser.user_email}
            onChange={(e) =>
              setDataUser({ ...dataUser, user_email: e.target.value })
            }
          />
        ) : (
          <p>{dataUser.user_email}</p>
        )}
        <hr />
        <h4>Téléphone :</h4>
        {modif ? (
          <input
            id="input"
            type="tel"
            value={dataUser.user_phone}
            onChange={(e) =>
              setDataUser({ ...dataUser, user_phone: e.target.value })
            }
          />
        ) : (
          <p>{dataUser.user_phone}</p>
        )}
        <hr />
        <h4>Mot de passe :</h4>
        {modif ? (
          <>
            <tr className="entete">Nouveau mot de passe </tr>
            <tr className="valeur">
              <input
                id="input"
                type="password"
                className={validPW ? "valid" : "invalid"}
                value={dataUser.user_password}
                onChange={(e) =>
                  setDataUser({ ...dataUser, user_password: e.target.value })
                }
              />
            </tr>
            {/* <tr className="entete">Valider mot de passe </tr>
            <tr>
              <input
                id="input"
                type="password"
                className={validPW ? "valid" : "invalid"}
                onChange={(e) => changePW(e)}
              />
            </tr> */}
          </>
        ) : (
          ""
        )}
        <div>
          {modif ? (
            <button
              className="Profile-button"
              onClick={() => {
                validprof();
                updateMyProfile();
              }}
            >
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
        <div>
          {riderAnnonce.length !== 0 ? (
            riderAnnonce.map((e,) => (
              <ResultCard
                key={e.rider_ID}
                fullResult={e}
                firstname={e.rider_firstname}
                rider_ID={e.rider_ID}
                photo={e.rider_photos}
              />
            ))
          ) : (
            <h3>Vous n'avez pas encore publié d'annonce Cavalier</h3>
          )}
        </div>
        <hr />
        <div>
          {horseAnnonce.length !== 0 ? (
            horseAnnonce.map((e) => (
              <HorseResultCard
                key={e.horse_ID}
                fullResult={e}
                horse_name={e.horse_name}
                horse_ID={e.horse_ID}
                photo={e.horse_photos}
              />
            ))
          ) : (
            <h3>Vous n'avez pas encore publié d'annonce Equidé</h3>
          )}
        </div>
      </div>
    </>
  );
};

export default MyProfile;