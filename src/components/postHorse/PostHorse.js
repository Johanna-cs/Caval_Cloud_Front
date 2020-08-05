import React, { useState, useEffect, useContext } from "react";
import { storage } from "../Firebase";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Axios from "axios";
import "./postHorse.css";
import Header from "../Header_footer/Header";
import { Link, Redirect } from "react-router-dom";
import RangeButton from "../common/RangeButton";
import SelectButton from "../common/SelectButton";
import SlidingButton from "../common/SlidingButton";
import Scuring from "../common_section/Scuring";
import Structures from "../common_section/Structures";
import Localisation from "../common_section/Localisation";
import usePosition from "../common_section/usePosition";
import Disciplines from "../common_section/Disciplines";
import Pension from "../common_section/Pension";
import BudgetMensuel from "../common_section/BudgetMensuel";
import IdealRider from "../common_section/IdealRider";
import FloatingButton from "../common/FloatingButton";
import Competition from "../common_section/Competition";
import HebergementHorse from "../common_section/HebergementHorse";
import { HorseContext } from "../context/HorseContext";
import ModalPost from "../common/ModalPost";

const PostHorse = () => {
  // Get Localisation
  const { latitude, longitude } = usePosition();

  // Store city in localstorage for next uses
  // localStorage.setItem("lastCitySaved", cityLocalisation);

  // Selection on perimeter for localisation :
  const [perimeter, setPerimeter] = useState(null);
  

  // Get horseProfile Context in order to get and set information about it
  const { horseProfile, setHorseProfile } = useContext(HorseContext);
  const [modalShow, setModalShow] = useState(false);
  const [home, setHome] = useState(false);
  const [locValue, setLocValue] = useState(horseProfile.horse_postal);

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
            if (horseProfile.horse_photo1 === "") {
              setHorseProfile({ ...horseProfile, horse_photo1: url });
            } else if (horseProfile.horse_photo2 === "") {
              setHorseProfile({ ...horseProfile, horse_photo2: url });
            } else {
              setHorseProfile({ ...horseProfile, horse_photo3: url });
            }
          });
      }
    );
  };

  // Get the location from reverse geocoding

  const getLocation = () => {
    Axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    )
      .then((res) =>
        setHorseProfile({
          ...horseProfile,
          horse_postal: res.data.address.postcode,
        })
      )
      .catch((err) => console.log(err));
  };

  // Get full and set gps coordinates from postal code within horse Context
  const getCoordinatesfromPostalCode = (postalcode) => {
    Axios.get(
      `https://nominatim.openstreetmap.org/search?state=France&postalcode=${postalcode}&format=json`
    )
      .then((res) => {
        setHorseProfile({
          ...horseProfile,
          horse_long: res.data[0].lon,
          horse_lat: res.data[0].lat,
          horse_localisation: res.data[0].display_name,
        });
      })
      .catch((err) => console.log(err));
  };

  const postDataHorse = () => {
    Axios.post(`http://localhost:4000/api/horses`, horseProfile).catch((err) =>
      console.log(err)
    );
    setModalShow(true);
    setTimeout(() => setHome(true), 5000);
  };

  useEffect(() => {
<<<<<<< HEAD
    getCoordinatesfromPostalCode(horseProfile.horse_postal);
  }, [horseProfile.horse_postal]);
=======
    
   
  }, []);
>>>>>>> 373aa3e3a2c4f808b0cbc04959326ead1b3123df

  const cancelLoc = () => {
    document.getElementById("localisation").reset();
  };

  return (
    <>
      {home ? <Redirect to="/home" /> : null}

      <Header className="header" title="Poster une annonce cheval" />
      {/* <button onClick={ () => {
          getCoordinatesfromPostalCode(horseProfile.horse_postal)
          }}>
        Convert
      </button>
      <p>Lat : {latitude}</p>
      <p>Long : {longitude}</p> */}
      <div className="postHorse_page">
        <div className="postHorse_pres">
          <h4>Présentation :</h4>
          <form className="postHorse-form">
            <label>
              <input
                className="postHorse_input"
                type="text"
                placeholder="Nom du cheval"
                onChange={(event) =>
                  setHorseProfile({
                    ...horseProfile,
                    horse_name: event.target.value,
                  })
                }
              />
            </label>
          </form>

          <div className="horse_age">
            <h5> Age du cheval : {horseProfile.horse_age} ans</h5>
            <div className="divRangeSpan">
              <span>1 an</span>
              <RangeButton
                id="ageHorse"
                min="1"
                max="30"
                step="0"
                radioRangeBtnId="ageHorse"
                onChange={(e) =>
                  setHorseProfile({
                    ...horseProfile,
                    horse_age: e.target.value,
                  })
                }
              />
              <span>30 ans</span>
            </div>
          </div>
          <hr />
          <div className="horse_size">
            <h5> Taille : {horseProfile.horse_height} cm</h5>
            <div className="divRangeSpan">
              <span>80 cm</span>
              <RangeButton
                min="80"
                max="210"
                radioRangeBtnId="horseSize"
                onChange={(e) =>
                  setHorseProfile({
                    ...horseProfile,
                    horse_height: e.target.value,
                  })
                }
              />
              <span>210 cm</span>
            </div>
          </div>
        </div>
        <hr />
        <h4>Photos de votre cheval</h4>
        <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
          {useUrl &&
            useUrl.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt="" />
            ))}
        </Carousel>
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload} className="upload-button">
          Valider la photo
        </button>
        <hr />
        <div className="localisation_horse">
          <h5>Où se trouve le cheval ? </h5>
          <Localisation
            value={horseProfile.horse_postal}
            getLocation={getLocation}
            onChange={(e) =>
              setHorseProfile({ ...horseProfile, horse_postal: e.target.value })
            }
            definePerimeter={(e) => setPerimeter(e.target.value)}
            perimeter={perimeter}
          />
           <button className="upload-button" id='setPosition'onClick={ () => {
            getCoordinatesfromPostalCode(horseProfile.horse_postal)}}>
              Valider ma position
          </button>
          <div>
          <p>{horseProfile.horse_localisation}</p>
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
                setHorseProfile({
                  ...horseProfile,
                  horse_temper: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="Dynamique"
              radioSelBtnValue="Dynamique"
              radioSelBtnName="temperHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_temper: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="Speed"
              radioSelBtnValue="Speed"
              radioSelBtnName="temperHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_temper: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="A canaliser"
              radioSelBtnValue="A canaliser"
              radioSelBtnName="temperHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_temper: e.target.value,
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
                setHorseProfile({
                  ...horseProfile,
                  horse_character: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="Froid"
              radioSelBtnValue="Froid"
              radioSelBtnName="caracterHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_character: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="Joueur"
              radioSelBtnValue="Joueur"
              radioSelBtnName="caracterHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_character: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnId="Sensible"
              radioSelBtnValue="Sensible"
              radioSelBtnName="caracterHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_character: e.target.value,
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
                setHorseProfile({
                  ...horseProfile,
                  horse_body_type: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnValue={"Classique"}
              radioSelBtnId={"Classique"}
              radioSelBtnName="bodyHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_body_type: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnValue={"Porteur"}
              radioSelBtnId={"Porteur"}
              radioSelBtnName="bodyHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_body_type: e.target.value,
                })
              }
            />

            <SelectButton
              radioSelBtnValue={"Lourd"}
              radioSelBtnId={"Lourd"}
              radioSelBtnName="bodyHorse"
              onClick={(e) =>
                setHorseProfile({
                  ...horseProfile,
                  horse_body_type: e.target.value,
                })
              }
            />
          </div>
        </div>
        <hr />
        <h4>Type d'écurie </h4>
        <Scuring
          onClick={(e) =>
            setHorseProfile({
              ...horseProfile,
              horse_location_type: e.target.value,
            })
          }
        />
        <HebergementHorse
          onClick={(e) =>
            setHorseProfile({
              ...horseProfile,
              horse_accomodation: e.target.value,
            })
          }
        />
        <hr />
        <Structures
          onClick={(e) =>
            setHorseProfile({
              ...horseProfile,
              horse_practice_structure: e.target.value,
            })
          }
        />
        <hr />
        <div className="coaching">
          <h4>Coaching</h4>
          <div className="coaching">
            <SlidingButton
              SlidingButtonText="Sur place"
              SlidingButtonID="coachSwitch"
              onClick={() =>
                setHorseProfile({
                  ...horseProfile,
                  horse_coaching_here: !horseProfile.horse_coaching_here,
                })
              }
            />
            <SlidingButton
              SlidingButtonText="Intervenant exterieur"
              SlidingButtonID="extCoachSwitch"
              onClick={() =>
                setHorseProfile({
                  ...horseProfile,
                  horse_external_coach: !horseProfile.horse_external_coach,
                })
              }
            />
          </div>
        </div>
        <hr />
        <Disciplines />
        <hr />
        <div className="frequency_pension">
          <Pension
            onClick={(e) =>
              setHorseProfile({
                ...horseProfile,
                horse_riding_frequency: e.target.value,
              })
            }
            frequency={horseProfile.horse_riding_frequency}
            changeFixedFrequency={() =>
              setHorseProfile({
                ...horseProfile,
                horse_fixed_day: !horseProfile.horse_fixed_day,
              })
            }
          />
        </div>
        <hr />
        <div className="materialDiv">
          <h4>Materiel</h4>
          <div className="materiel">
            <SlidingButton
              SlidingButtonText="Le cavalier doit avoir sa selle"
              SlidingButtonID="materialSwitch"
              onClick={() =>
                setHorseProfile({
                  ...horseProfile,
                  horse_rider_need_own_saddle: !horseProfile.horse_rider_need_own_saddle,
                })
              }
            />
          </div>
        </div>
        <hr />
        <div className="baladeDiv">
          <h4>Balade</h4>
          <div className="balade">
            <SlidingButton
              SlidingButtonText="Possibilité de partir seul en balade"
              SlidingButtonID="baladSwitch"
              onClick={() =>
                setHorseProfile({
                  ...horseProfile,
                  horse_stroll_along: !horseProfile.horse_stroll_along,
                })
              }
            />
          </div>
        </div>
        <hr />

        <div className="competiton">
          <Competition
            onClick={(e) =>
              setHorseProfile({
                ...horseProfile,
                horse_competition_preferences: e.target.value,
              })
            }
          />
        </div>

        <BudgetMensuel
          budgetTitle="Budget"
          budget={horseProfile.horse_budget}
          currency={horseProfile.horse_currency_budget}
          priceTitle={"Prix maximum par mois :"}
          onChange={(e) =>
            setHorseProfile({
              ...horseProfile,
              horse_budget: e.target.value,
            })
          }
          onClick={(e) =>
            setHorseProfile({
              ...horseProfile,
              horse_currency_budget: e.target.value,
            })
          }
        />

        <hr />
        <div className="owner_presentation">
          <h4> A propos de moi </h4>
          <div>
            <Link to="/post-horse-owner" style={{ textDecoration: "none" }}>
              <button className="postHorse_edit-button">
                Editer votre présentation
              </button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="postHorse_idealRider">
          <h4 id="anchorIdealRider">Cavalier idéal</h4>
          <IdealRider
            yearPractice={horseProfile.ideal_rider_years_of_practice}
            changePractice={(e) =>
              setHorseProfile({
                ...horseProfile,
                ideal_rider_years_of_practice: e.target.value,
              })
            }
            gallopLevel={horseProfile.ideal_rider_gallop_level}
            changeGallop={(e) =>
              setHorseProfile({
                ...horseProfile,
                ideal_rider_gallop_level: e.target.value,
              })
            }
            ageRider={horseProfile.ideal_rider_age}
            changeAgeRider={(e) =>
              setHorseProfile({
                ...horseProfile,
                ideal_rider_age: e.target.value,
              })
            }
            isVehiculed={() =>
              setHorseProfile({
                ...horseProfile,
                ideal_rider_vehiculed: !horseProfile.ideal_rider_vehiculed,
              })
            }
            hasManaged={() =>
              setHorseProfile({
                ...horseProfile,
                ideal_rider_managed_horse: !horseProfile.ideal_rider_managed_horse,
              })
            }
          />
        </div>
      </div>

      <FloatingButton
        btnName={"Poster mon annonce"}
        onClick={() => postDataHorse()}
      />
      <ModalPost show={modalShow} />
    </>
  );
};

export default PostHorse;
