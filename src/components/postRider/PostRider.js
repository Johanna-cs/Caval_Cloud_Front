import React, { useState, useEffect, useContext } from "react";
import { storage } from "../Firebase";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./postRider.css";
import { Link, Redirect } from "react-router-dom";
import Header from "../Header_footer/Header";
import SlidingButton from "../common/SlidingButton";
import RangeButton from "../common/RangeButton";
import SelectButton from "../common/SelectButton";
import FloatingButton from "../common/FloatingButton";
import Disciplines from "../common_section/Disciplines";
import BudgetMensuel from "../common_section/BudgetMensuel";
import Pension from "../common_section/Pension";
import Localisation2 from "../common_section/Localisation2";
import usePosition from "../common_section/usePosition";
import Axios from "axios";
import Competition from "../common_section/Competition";
import { RiderContext } from "../context/RiderContext";
import ModalPost from "../common/ModalPost";
import jwt_decode from 'jwt-decode'

const PostRider = () => {
  // Localisation
  const { latitude, longitude} = usePosition();
  const [cityLocalisation, setCityLocalisation] = useState("");
 
  // Enregistrement de la ville dans le local storage
  localStorage.setItem("lastCitySaved", cityLocalisation);
  
  // Choix du rayon de recherche des annonces :
  const [perimeter, setPerimeter] = useState(null);
 
  // Précédente localisation enregistrée dans le navigateur (si existante) :
  // const [lastCitySaved, setLastCitySaved] = useState("");

  const getLocation = () => {
    Axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((res) => setRiderProfile({...riderProfile,rider_postal_code: res.data.address.postcode }))
      .catch((err) => console.log(err));
  };
  // Get full and set gps coordinates from postal code within horse Context
  const getCoordinatesfromPostalCode = (postalcode) => {
    Axios.get(
      `https://nominatim.openstreetmap.org/search?state=France&postalcode=${postalcode}&format=json`
    )
      .then((res) => {
        setRiderProfile({
          ...riderProfile,
          rider_long: res.data[0].lon,
          rider_lat: res.data[0].lat,
          rider_localisation: res.data[0].display_name,
          rider_geolocation : [res.data[0].lon, res.data[0].lat]
        });
      })
      .catch((err) => console.log(err));
  };

  const { riderProfile, setRiderProfile } = useContext(RiderContext);

  // User Data storage:
  const [dataUser, setDataUser] = useState({
      user_lastname: "",
      user_firstname: "",
      user_email: "",
      user_avatar : "",
      user_phone : ""
    })

  // Authentification -> if not token (undefined), cannot acces to post hose
  const token = localStorage.token 
    
  // Get user profil
  const getMyProfile = () => {
    Axios.get('https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/users/profile', { 
      headers : { 'Authorization' : 'Bearer ' + token}
    })
    .then((res) => setDataUser(res.data))
    .catch((error)=> console.log(error))
  }


  // Carousel
  const [imageCarousel, setImageCarousel] = useState({});
  const [useUrl, setUseUrl] = useState([]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageCarousel(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${imageCarousel.name}`)
      .put(imageCarousel);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageCarousel.name)
          .getDownloadURL()
          .then((url) => {
            setUseUrl([...useUrl, url]);
            if (riderProfile.rider_photo1 === "") {
              setRiderProfile({ ...riderProfile, rider_photo1: url });
            } else if (riderProfile.rider_photo2 === "") {
              setRiderProfile({ ...riderProfile, rider_photo2: url });
            } else {
              setRiderProfile({ ...riderProfile, rider_photo3: url });
            }
          });
      }
    );
  };

  const [modalShow, setModalShow] = useState(false);
  const [home, setHome] = useState(false);

  const postDataRider = () => {
    // Post new Rider
      Axios
      .post(`https://mrs-js-p3-cavalcloud-back.jsrover.wilders.dev/api/riders`, riderProfile, 
          { headers : { 'Authorization' : 'Bearer ' + token}})
      .catch((err) =>console.log(err));
    
    // Display modal before going back Home
    setModalShow(true);
    setTimeout(() => setHome(true), 5000);
  };

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      {home ? <Redirect to="/home" /> : null}

      <Header title="Poster une annonce cavalier" />

      {token === undefined ? 
        <div className="postHorse_page">
          <p style={{'text-align' : 'center'}}>Vous devez être connecté(e) pour accéder à cette fonctionnalité.</p> 
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

      <div className="postRider_page">
        <div className="postRider_header">
          <img id='anchorRider_header'className="postRider_logo"
           src={dataUser.user_avatar}
            alt="logo"
          />
          <div className="postRider_forms">
            <p >
              {riderProfile.rider_firstname}
              <span>{riderProfile.rider_age}</span>
            </p>
            <p>
              {riderProfile.rider_selfWord1} {riderProfile.rider_selfWord2}{" "}
              {riderProfile.rider_selfWord3}
            </p>
          </div>
        </div>

        <div className="postRider_pres">
          <Link
            to={{
              pathname: "/PostRiderPresentation",
              style: { textDecoration: "none" },
            }}
          >
            <button className="postRider_edit-button">
              Editer votre présentation
            </button>
          </Link>
        </div>

        <br />
        <h4>Vos photos</h4>
        <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
          {useUrl &&
            useUrl.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt="" />
            ))}
        </Carousel>
        <br />
        <input type="file" onChange={handleChange} />
        <button
          onClick={handleUpload}
          id="upload-button"
        >
          Valider la photo
        </button>
        <hr />
        <div>
        <h4>Localisation </h4>
          <Localisation2
            value={riderProfile.rider_postal_code}
            onChange={(e) =>setRiderProfile({...riderProfile,rider_postal_code: e.target.value})}
            getLocation={getLocation}
            definePerimeter={(e) => setPerimeter(e.target.value)}
            perimeter={perimeter}
          />
            <button id="upload-button" onClick={ () => {
              getCoordinatesfromPostalCode(Number(riderProfile.rider_postal_code))}}>
              Valider ma position
          </button>
          <div>
            <p>{riderProfile.rider_localisation}</p>
          </div>

        </div>
        <hr />
        <div>
          <BudgetMensuel
            budgetTitle="Budget"
            budget={riderProfile.rider_budget}
            currency={riderProfile.rider_currency_budget}
            priceTitle={"Prix maximum par mois :"}
            onChange={(e) =>
              setRiderProfile({ ...riderProfile, rider_budget: e.target.value })
            }
            onClick={(e) =>
              setRiderProfile({
                ...riderProfile,
                rider_currency_budget: e.target.value,
              })
            }
          />
        </div>

        <div>
          <h4>Autonomie</h4>
          <div className="postRider-autonomy">
            <SlidingButton
              SlidingButtonText="Je suis véhiculé"
              SlidingButtonID="vehicledSwitch"
              onClick={() =>
                setRiderProfile({
                  ...riderProfile,
                  rider_vehiculed: !riderProfile.rider_vehiculed,
                })
              }
            />
            <SlidingButton
              SlidingButtonText="J'ai déjà eu un cheval sous ma responsabilité"
              SlidingButtonID="responsabilitySwitch"
              onClick={() =>
                setRiderProfile({
                  ...riderProfile,
                  rider_managed_horse: !riderProfile.rider_managed_horse,
                })
              }
            />
          </div>
        </div>
        <hr />
        <div>
          <h4>Mon niveau</h4>
          <h5>
            {" "}
            Nombre d'années de pratique : {riderProfile.rider_years_of_practice}
          </h5>

          <div className="divRangeSpan">
            <span>1 an</span>
            <RangeButton
              min="0"
              max="50"
              onChange={(e) =>
                setRiderProfile({
                  ...riderProfile,
                  rider_years_of_practice: e.target.value,
                })
              }
            />
            <span>50 ans</span>
          </div>
          <h5> Niveau de Galop : {riderProfile.rider_gallop_level} </h5>
          <div className="divRangeSpan">
            <span>0</span>
            <RangeButton
              min="0"
              max="7"
              list="niveau_galop"
              onChange={(e) =>
                setRiderProfile({
                  ...riderProfile,
                  rider_gallop_level: e.target.value,
                })
              }
            />
            <span>7</span>
          </div>
        </div>

        <div className="postRider-disc">
          <Disciplines
            onClick={(e) =>
              setRiderProfile({
                ...riderProfile,
                rider_disciplines: e.target.value,
              })
            }
          />
        </div>
        <div>
          <SlidingButton
            SlidingButtonText="Je suis ouvert à pratiquer d'autres disciplines"
            SlidingButtonID="otherSwitch"
            onClick={() =>
              setRiderProfile({
                ...riderProfile,
                rider_agree_other_discipline: !riderProfile.rider_agree_other_discipline,
              })
            }
          />
        </div>
        <hr />
        <div>
          <Pension
            frequencyTitle="Rythme de la demi-pension"
            onClick={(e) =>
              setRiderProfile({
                ...riderProfile,
                rider_riding_frequency: e.target.value,
              })
            }
            frequency={riderProfile.rider_riding_frequency}
            changeFixedFrequency={() =>
              setRiderProfile({
                ...riderProfile,
                rider_fixed_day: !riderProfile.rider_fixed_day,
              })
            }
          />
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <div className="idealHorse">
            <div className="horse_size">
              <h5> Taille : {riderProfile.ideal_horse_size} cm</h5>
              <div className="divRangeSpan">
                <span>80cm</span>
                <RangeButton
                  min="80"
                  max="200"
                  radioRangeBtnId="horseSize"
                  onChange={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_size: e.target.value,
                    })
                  }
                />
                <span>200cm</span>
              </div>
            </div>
            <hr />
            <div className="horse_temper">
              <h5> Tempérament :</h5>
              <div className="select_temper">
                <SelectButton
                  radioSelBtnId="Calme"
                  radioSelBtnValue="Calme"
                  radioSelBtnName="temperHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_temper: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="Dynamique"
                  radioSelBtnValue="Dynamique"
                  radioSelBtnName="temperHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_temper: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="Speed"
                  radioSelBtnValue="Speed"
                  radioSelBtnName="temperHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_temper: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="A canaliser"
                  radioSelBtnValue="A canaliser"
                  radioSelBtnName="temperHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_temper: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <hr />
            <div className="horse_caracter">
              <h5> Caractère :</h5>
              <div className="select_caracter">
                <SelectButton
                  radioSelBtnId="Affectueux"
                  radioSelBtnValue="Affectueux"
                  radioSelBtnName="caracterHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_character: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="Froid"
                  radioSelBtnValue="Froid"
                  radioSelBtnName="caracterHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_character: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="Joueur"
                  radioSelBtnValue="Joueur"
                  radioSelBtnName="caracterHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_character: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnId="Sensible"
                  radioSelBtnValue="Sensible"
                  radioSelBtnName="caracterHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_character: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <hr />
            <div className="horse_body">
              <h5> Physique :</h5>
              <div className="select_body">
                <SelectButton
                  radioSelBtnValue="Fin"
                  radioSelBtnId={"Fin"}
                  radioSelBtnName="bodyHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_body_type: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnValue={"Classique"}
                  radioSelBtnId={"Classique"}
                  radioSelBtnName="bodyHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_body_type: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnValue={"Porteur"}
                  radioSelBtnId={"Porteur"}
                  radioSelBtnName="bodyHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_body_type: e.target.value,
                    })
                  }
                />

                <SelectButton
                  radioSelBtnValue={"Lourd"}
                  radioSelBtnId={"Lourd"}
                  radioSelBtnName="bodyHorse"
                  onClick={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_body_type: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <hr />
            <div className="horse_age">
              <h5>
                {" "}
                Age du cheval <span>(+/- 3ans)</span> :{" "}
                {riderProfile.ideal_horse_age} ans
              </h5>
              <div className="divRangeSpan">
                <span>1 an</span>
                <RangeButton
                  id="ageHorse"
                  min="1"
                  max="30"
                  radioRangeBtnId="ageHorse"
                  onChange={(e) =>
                    setRiderProfile({
                      ...riderProfile,
                      ideal_horse_age: e.target.value,
                    })
                  }
                />
                <span>30 ans</span>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h4>Coaching</h4>
        <div className="coachingDiv">
          <SlidingButton
            SlidingButtonText="Sur place"
            SlidingButtonID="coachingSwitch"
            onClick={() =>
              setRiderProfile({
                ...riderProfile,
                rider_coaching_here: !riderProfile.rider_coaching_here,
              })
            }
          />
          <SlidingButton
            SlidingButtonText="Intervenant exterieur"
            SlidingButtonID="extCoachSwitch"
            onClick={() =>
              setRiderProfile({
                ...riderProfile,
                rider_external_coach: !riderProfile.rider_external_coach,
              })
            }
          />
        </div>
        <hr />
        <div>
          <Competition
            onClick={(e) =>
              setRiderProfile({
                ...riderProfile,
                rider_competition: e.target.value,
              })
            }
          />
        </div>
        {riderProfile.rider_localisation ? ( 
          <FloatingButton
            btnName={"Poster mon annonce"}
            onClick={() => postDataRider()}
          />
        ):(
          <FloatingButton
          btnName={"Veuillez valider la localisation"}
          disabled='true'
        />
        )}

      </div>
      }

      <ModalPost show={modalShow} />
      
    </>
  );
};
export default PostRider;
