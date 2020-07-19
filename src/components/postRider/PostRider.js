import React, { useState, useEffect, useContext } from "react"
import "./postRider.css"
import { Link } from "react-router-dom"
import Header from "../Header_footer/Header"
import SlidingButton from "../common/SlidingButton"
import RangeButton from '../common/RangeButton'
import RadioCheck from '../common/RadioCheck'
import SelectButton from '../common/SelectButton'
import Carousel from "../common/Carousel"
import logo from "../SVG-icons/cavalcloud-logo.png"
import FloatingButton from "../common/FloatingButton"
import Disciplines from "../common_section/Disciplines"
import BudgetMensuel from "../common_section/BudgetMensuel"
import Frequency from "../common_section/Frequency"
import Axios from "axios"
import Competition from "../common_section/Competition"
import { RiderContext } from "../context/RiderContext"


const PostRider = () => {
  const [ageHorse, setAgeHorse] = useState("");
  const [horseSize, setHorseSize] = useState("");
  
  const { riderProfile, setRiderProfile } = useContext(RiderContext)

  const postDataRider = () => {
    Axios
    .post(`http://localhost:4000/api/riders`, riderProfile)
    .catch((err) => console.log(err))
    .finally(console.log(riderProfile))
  };

  return (
    <>
      <Header title="Poster une annonce cavalier" />
      <div className="postRider_page">
        <div className="postRider_header">
          <img className="postRider_logo" src={logo} alt="logo" />
          <div className="postRider_forms">
            <p>
              {/* {profile.prenom}, <span>{profile.age}</span> */}
              {riderProfile.rider_firstname} <span>{riderProfile.rider_age}</span>
            </p>
            <p>
              {riderProfile.rider_selfWord1} {riderProfile.rider_selfWord2}{" "}
              {riderProfile.rider_selfWord3}
            </p>
          </div>
          <div>
            <h4>Localisation</h4>
          </div>
        </div>
        <Carousel />
        <div>
          <h4>Equitation :</h4>
          <p>
            {riderProfile.rider_ridingWord1} {riderProfile.rider_ridingWord2}{" "}
            {riderProfile.rider_ridingWord3}
          </p>
        </div>
        <div className="postRider_message">
          <h4>Message : </h4>
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
        <hr />
        <div>
          <BudgetMensuel
            budget={riderProfile.rider_budget}
            currency={riderProfile.rider_currency_budget}
            priceTitle={'prix minimum :'}
            onChange={(e) => setRiderProfile({...riderProfile, rider_budget : e.target.value })}
            onClick={(e) => setRiderProfile({...riderProfile, rider_currency_budget : e.target.value })}
          />
        </div>
      
        <div>
          <h4>Autonomie</h4>
          <div className="postRider-autonomy">
            <SlidingButton
              SlidingButtonText="Je suis véhiculé"
              SlidingButtonID="vehicledSwitch"
              onClick={() => setRiderProfile({...riderProfile, rider_vehiculed: !riderProfile.rider_vehiculed })}
            />
            <SlidingButton
              SlidingButtonText="J'ai déjà eu un cheval sous ma responsabilité"
              SlidingButtonID="responsabilitySwitch"
              onClick={() => setRiderProfile({...riderProfile, rider_managed_horse : !riderProfile.rider_managed_horse })}

            />
          </div>
        </div>
        <hr />
        <div>
          <h4>Niveau</h4>
          <h5> Années de pratique : {riderProfile.yearsOfPractice} ans</h5>
          <p>Nombre d'années de pratique cumulées</p>
                    <div className='divRangeSpan'>
                        <span>1 an</span>
                        <RangeButton 
                            min="0" 
                            max="50"
                            onChange={(e) => setRiderProfile({...riderProfile, yearsOfPractice : e.target.value })}
                        />
                        <span>50 ans</span>
                    </div>
                    <h5> Niveau de Galop : {riderProfile.gallopLevel} </h5>
                <div className='divRangeSpan'>
                    <span>0</span>                   
                    <RangeButton 
                        min="0" 
                        max="7" 
                        list='niveau_galop'
                        onChange={(e) => setRiderProfile({...riderProfile, gallopLevel : e.target.value})}
                    />
                    <span>7</span>
                </div>
        </div>

        

        <div className="postRider-disc">
          <Disciplines />
        </div>
        <hr />
        <div>
          <h4>Autre</h4>
          <SlidingButton
            SlidingButtonText="Je suis ouvert à pratiquer d'autres disciplines"
            SlidingButtonID="otherSwitch"
            onClick={() => setRiderProfile({...riderProfile, rider_agree_other_discipline : !riderProfile.rider_agree_other_discipline })}
          />
        </div>
        <hr />
        <div>
          <Frequency
            frequencyTitle="Rythme de la demi-pension"
            onClick={(e) => setRiderProfile({...riderProfile, rider_riding_frequency : e.target.value })}
            frequency={riderProfile.rider_riding_frequency}
            changeFixedFrequency={() => setRiderProfile({...riderProfile, rider_fixed_day : !riderProfile.rider_fixed_day })}
          />
        </div>
        <hr />
        <div>
          <h4>Cheval idéal</h4>
          <div className='idealHorse'>
            <div className='horse_size'>
                <h5> Taille : {riderProfile.idealHorseSize} cm</h5>
                <div className='divRangeSpan'>
                    <span>80cm</span>
                    <RangeButton 
                        min='80'
                        max='200'
                        radioRangeBtnId='horseSize'
                        onChange={(e) => setRiderProfile({...riderProfile, idealHorseSize: e.target.value })}

                        />
                    <span>200cm</span>
                </div>
            </div>
                <hr />
            <div className='horse_temper'>
                <h5> Tempérament :</h5>
                  <div className='select_temper'>
                    <SelectButton
                        radioSelBtnId='Calme'
                        radioSelBtnValue='Calme'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseTemper: e.target.value })} />

                    <SelectButton
                        radioSelBtnId='Dynamique'
                        radioSelBtnValue='Dynamique'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseTemper: e.target.value })} />

                    <SelectButton
                        radioSelBtnId='Speed'
                        radioSelBtnValue='Speed'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseTemper: e.target.value })} />

                    <SelectButton
                        radioSelBtnId='A canaliser'
                        radioSelBtnValue='A canaliser'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseTemper: e.target.value })} />

                    </div>
            </div>
                <hr />
                <div className='horse_caracter'>
                    <h5> Caractère :</h5>
                    <div className='select_caracter'>
                    <SelectButton
                        radioSelBtnId='Affectueux'
                        radioSelBtnValue='Affectueux'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseCaracter: e.target.value })}/>

                    <SelectButton
                        radioSelBtnId='Froid'
                        radioSelBtnValue='Froid'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseCaracter: e.target.value })} />

                    <SelectButton
                        radioSelBtnId='Joueur'
                        radioSelBtnValue='Joueur'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseCaracter: e.target.value })}/>

                    <SelectButton   
                        radioSelBtnId='Sensible'
                        radioSelBtnValue='Sensible'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseCaracter: e.target.value })}/>
                    </div>
            </div>
            <hr />
            <div className='horse_body'>
                    <h5> Physique :</h5>
                    <div className='select_body'>
                    <SelectButton 
                        radioSelBtnValue='Fin'
                        radioSelBtnId={'Fin'} 
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseBody: e.target.value })}/>

                    <SelectButton 
                        radioSelBtnValue={'Classique'}
                        radioSelBtnId={'Classique'}
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseBody: e.target.value })}/>

                    <SelectButton 
                        radioSelBtnValue={'Porteur'}
                        radioSelBtnId={'Porteur'} 
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseBody: e.target.value })}/>

                    <SelectButton 
                        radioSelBtnValue={'Lourd'}
                        radioSelBtnId={'Lourd'}
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setRiderProfile({...riderProfile, idealHorseBody: e.target.value })}/>
                    </div>
            </div>
                <hr />
            <div className='horse_age'>
            <h5> Age du cheval <span>(+/- 3ans)</span> : {riderProfile.idealHorseAge} ans</h5>
            <div className='divRangeSpan'>
                    <span>1 an</span>
                    <RangeButton 
                        id='ageHorse'
                        min='1'
                        max='30'
                        radioRangeBtnId='ageHorse'
                        onChange={(e) => setRiderProfile({...riderProfile, idealHorseAge: e.target.value })}/>
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
            onClick={() => setRiderProfile({...riderProfile, rider_coaching_here: !riderProfile.rider_coaching_here })}
          />
          <SlidingButton
            SlidingButtonText="Intervenant exterieur"
            SlidingButtonID="extCoachSwitch"
            onClick={() => setRiderProfile({...riderProfile, rider_external_coach: !riderProfile.rider_external_coach })}
          />
        </div>
        <hr />
        <div>
        <Competition 
            onClick={(e) => setRiderProfile({...riderProfile, rider_competition : e.target.value })}
            />
        </div>
          <FloatingButton btnName={"Poster mon annonce"} onClick={() => postDataRider()} />
      </div>
    </>
  );
};
export default PostRider;
