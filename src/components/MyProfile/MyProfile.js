import React, { useState, useEffect } from "react";
import "./profile.css";
import Header from "../Header_footer/Header";
import { storage } from "../Firebase";
import Axios from "axios";
import { Link } from "react-router-dom";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import ResultCard from "../Rider_Results/ResultCard";

const MyProfile = () => {

    // User Data storage:
    const [dataUser, setDataUser] = useState({
      user_lastname: "",
      user_firstname: "",
      user_email: "",
      user_password: "",
      user_avatar : "",
      user_phone : ""
    })
    const token = localStorage.token 
    
  // Get user profil
  const getMyProfile = () => {
    Axios.get('https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/profile', { 
      headers : { 'Authorization' : 'Bearer ' + token}
    })
    .then((res) => setDataUser(res.data))
    .catch((error)=> console.log(error))
  }
  // Update user data information 
  const updateMyProfile = () => {
    Axios
    .put('https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/profile', dataUser, 
    { 
      headers : { 'Authorization' : 'Bearer ' + token}
    })
    .catch(err=> console.error(err))
  }
  
  //annonces horseriders or horses in favorite section :
  const getRiderPosts = () => {
    Axios
      .get(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/mypost/rider`, {
        headers : { 'Authorization' : 'Bearer ' + token}
      })
      .then((res) => setRiderAnnonce(res.data))
      .catch((err) => console.error(err));
    console.log(riderAnnonce);
  };

  const getHorsePosts = () => {
    Axios
      .get(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/mypost/horse`, {
        headers : { 'Authorization' : 'Bearer ' + token}
      })
      .then((res) => setHorseAnnonce(res.data))
      .catch((err) => console.error(err));
    console.log(horseAnnonce);
  };

  const [riderAnnonce, setRiderAnnonce] = useState([]);
  const [horseAnnonce, setHorseAnnonce] = useState([]);


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
    getMyProfile()
    getRiderPosts()
    getHorsePosts()
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

      {token === undefined ? 
      <div className="Profile-Page">
        <p style={{'text-align' : 'center'}}>Vous devez être connecté(e) pour accéder à votre profil.</p> 
        <div className='login' > 
          <Link to='/login' style={{ textDecoration: "none" }}>
              <button type='button' id='loginBtn' > Se connecter </button>
          </Link>
          </div>
          <p style={{'text-align' : 'center'}}>Pas encore de compte ? Créer un compte gratuitement</p>
        <div className='create' >
          <Link to='/register' style={{ textDecoration: "none" }}>
              <button type='button' id='createBtn' > Créer un compte </button>
          </Link>
        </div>
      </div>
      :
        
      <div>
      <div className="Profile-Page">
        <div className="Profile-row">
          {modif ? (
            <div className="Profile-image">
              <input type="file" onChange={handleChange} />
              <button onClick={handleUpload} id="upload-button">
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
          <p>{dataUser.user_email}</p>
        
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
          </>
        ) : (
          ""
        )}
        <div>
          {modif ? (
            <button
              className="Profile-button"
              onClick={() => {
                validprof()
                updateMyProfile()
                
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
                statusFavorite={false}
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
                statusFavorite={false}
              />
            ))
          ) : (
            <h3>Vous n'avez pas encore publié d'annonce Equidé</h3>
          )}
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default MyProfile;