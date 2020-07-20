import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import './postHorse.css'
import Header from '../Header_footer/Header'
import { Link } from "react-router-dom"
import RangeButton from '../common/RangeButton'
import SelectButton from '../common/SelectButton'
import SlidingButton from '../common/SlidingButton'
import Scuring from '../common_section/Scuring'
import Structures from '../common_section/Structures'
import Localisation from '../common_section/Localisation'
import usePosition from '../common_section/usePosition';
import Disciplines from '../common_section/Disciplines'
import Pension from '../common_section/Pension'
import BudgetMensuel from '../common_section/BudgetMensuel'
import IdealRider from '../common_section/IdealRider'
import FloatingButton from '../common/FloatingButton'
import Competition from '../common_section/Competition'
import HebergementHorse from '../common_section/HebergementHorse'
import Carousel from '../common/Carousel'
import { HorseContext } from '../context/HorseContext';


const PostHorse = (props) => {
    
    // Get Localisation
    const {latitude, longitude, error} = usePosition();
    const [cityLocalisation, setCityLocalisation] = useState('')

    // Store city in localstorage for next uses
    localStorage.setItem('lastCitySaved',cityLocalisation);

    // Selection on perimeter for localisation :
    const [perimeter, setPerimeter] = useState(null);

    // Get horseProfile Context in order to get and set information about it
    const { horseProfile, setHorseProfile } = useContext(HorseContext)

    
    const getLocation = () => {
        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.log(err))
    }

    const postDataHorse = () => {
        Axios
        .post(`http://localhost:4000/api/horses`, horseProfile)
        .catch((err) => console.log(err))
      };
    
    useEffect(() => {
        getLocation()
    }, )
// Check if subscribe successfull or not
    // const [success, setSuccess] = useState(null);

    // const createPostHorse = (e) => {
    //     e.preventDefault()
    //     Axios.post('http://localhost:4000/api/horses', dataHorse)
    //     .catch((err) => console.error(err))
    //     .finally(setSuccess(true));
    // }

    return (
        <>
        <Header className='header' title='Poster une annonce cheval' />
        <div className='postHorse_page'>
            
            <div className='postHorse_pres'>
        <h4>Présentation :</h4>
            <form className="postHorse-form">
            <label>
                <input
                className="postHorse_input"
                type="text"
                placeholder="Nom du cheval"
                onChange={(event) => setHorseProfile({...horseProfile, horse_name : event.target.value}) }
                autoFocus
                />
            </label>
            </form>

            
            <div className='horse_age'>
            <h5> Age du cheval : {horseProfile.horse_age} ans</h5>
            <div className='divRangeSpan'>
                    <span>1 an</span>
                    <RangeButton 
                        id='ageHorse'
                        min='1'
                        max='30'
                        radioRangeBtnId='ageHorse'
                        onChange={(e) => setHorseProfile({...horseProfile, horse_age : e.target.value}) }
                    />
                    <span>30 ans</span>
                </div>
            </div>
            <hr />
            <div className='horse_size'>
                <h5> Taille : {horseProfile.horse_height} cm</h5>
                <div className='divRangeSpan'>
                    <span>100 cm</span>
                    <RangeButton 
                        min='80'
                        max='200'
                        radioRangeBtnId='horseSize'
                        onChange={(e) => setHorseProfile({...horseProfile, horse_height : e.target.value}) }
                    />
                    <span>200 cm</span>
                </div>
            </div>
            </div>
            <Carousel />
            
            <div className='localisation_horse'>
            <h5>Où se trouve le cheval ? </h5>
                <Localisation 
                value={cityLocalisation}
                onChange={(e) => {setCityLocalisation(e.target.value); setHorseProfile({...horseProfile, horse_localisation : e.target.value}) }}
                definePerimeter={(e) => setPerimeter(e.target.value)}
                perimeter={perimeter} />
            </div>
            <hr />
            <div className='horse_temper'>
                    <h5> Tempérament :</h5>
                    <div className='select_temper'>
                    <SelectButton
                        radioSelBtnId='Calme'
                        radioSelBtnValue='Calme'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_temper : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Dynamique'
                        radioSelBtnValue='Dynamique'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_temper : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Speed'
                        radioSelBtnValue='Speed'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_temper : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='A canaliser'
                        radioSelBtnValue='A canaliser'
                        radioSelBtnName='temperHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_temper : e.target.value}) }
                    />

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
                        onClick={(e) => setHorseProfile({...horseProfile, horse_character : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Froid'
                        radioSelBtnValue='Froid'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_character : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Joueur'
                        radioSelBtnValue='Joueur'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_character : e.target.value}) }
                    />

                    <SelectButton   
                        radioSelBtnId='Sensible'
                        radioSelBtnValue='Sensible'
                        radioSelBtnName='caracterHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_character : e.target.value}) }
                    />
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
                        onClick={(e) => setHorseProfile({...horseProfile, horse_body_type : e.target.value}) }
                    />

                    <SelectButton 
                        radioSelBtnValue={'Classique'}
                        radioSelBtnId={'Classique'}
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_body_type : e.target.value}) }
                    />

                    <SelectButton 
                        radioSelBtnValue={'Porteur'}
                        radioSelBtnId={'Porteur'} 
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_body_type : e.target.value}) }
                    />

                    <SelectButton 
                        radioSelBtnValue={'Lourd'}
                        radioSelBtnId={'Lourd'}
                        radioSelBtnName='bodyHorse'
                        onClick={(e) => setHorseProfile({...horseProfile, horse_body_type : e.target.value}) }
                    />
                    </div>
            </div>
            <hr />
            <h4>Type d'écurie </h4>
            <Scuring
                    onClick={(e) => setHorseProfile({...horseProfile, horse_practice_structure : e.target.value}) }
            />
            <HebergementHorse 
                    onClick={(e) => setHorseProfile({...horseProfile, horse_accomodation : e.target.value}) }
            />
            <hr />
            <Structures />
            <hr />
            <div className='coaching'>
                <h4>Coaching</h4>
                <div className='coaching'>
                    <SlidingButton 
                    SlidingButtonText="Sur place"
                    SlidingButtonID="coachSwitch"
                    onClick={() => setHorseProfile({...horseProfile, horse_coaching_here : !horseProfile.horse_coaching_here}) }
                    />
                    <SlidingButton
                    SlidingButtonText="Intervenant exterieur"
                    SlidingButtonID="extCoachSwitch"
                    onClick={() => setHorseProfile({...horseProfile, horse_external_coach : !horseProfile.horse_external_coach}) }
                    />
                </div>
                
            </div>
            <hr />
            <Disciplines />
            <hr />
            <div className='frequency_pension'>
                <Pension
                    onClick={(e) => setHorseProfile({...horseProfile, horse_riding_frequency : e.target.value})}
                    frequency={horseProfile.horse_riding_frequency}
                    changeFixedFrequency={() => setHorseProfile({...horseProfile, horse_fixed_day : !horseProfile.horse_fixed_day}) }
                />
            </div>
            <hr />
            <div className='materialDiv'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="Le cavalier doit avoir sa selle"
                        SlidingButtonID="materialSwitch"
                        onClick={() => setHorseProfile({...horseProfile, horse_rider_need_own_saddle : !horseProfile.horse_rider_need_own_saddle}) }
                        />
                </div>
                
            </div>
            <hr />
            <div className='baladeDiv'>
                <h4>Balade</h4>
                <div className='balade'>
                    <SlidingButton 
                    SlidingButtonText="Possibilité de partir seul en balade"
                    SlidingButtonID="baladSwitch"
                    onClick={() => setHorseProfile({...horseProfile, horse_stroll_along : !horseProfile.horse_stroll_along}) }
                    />
                </div>
            </div>
            <hr />
            
                <div className='competiton'>
                <Competition 
                    onClick={(e) => setHorseProfile({...horseProfile, horse_competition : e.target.value})}
                />
                </div>
                
                <BudgetMensuel 
                    budgetTitle='Budget'
                    budget={horseProfile.horse_budget} 
                    currency={horseProfile.horse_budget_currency}
                    priceTitle={'Prix par mois :'}
                    onChange={(e) => setHorseProfile({...horseProfile, horse_budget : e.target.value}) }
                    onClick={(e) => setHorseProfile({...horseProfile, horse_currency_budget : e.target.value}) }
                />

            <hr />
            <div className='owner_presentation'>
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
            <div className='postHorse_idealRider'>
            <h4>Cavalier idéal</h4>
                <IdealRider 
                yearPractice={horseProfile.idealRiderYearsOfPractice}
                changePractice={(e) => setHorseProfile({...horseProfile, idealRiderYearsOfPractice : e.target.value}) }
                gallopLevel={horseProfile.idealRiderGallopLevel}
                changeGallop={(e) => setHorseProfile({...horseProfile, idealRiderGallopLevel : e.target.value}) }
                ageRider={horseProfile.idealRiderAge}
                changeAgeRider={(e) => setHorseProfile({...horseProfile, idealRiderAge : e.target.value}) }
                isVehiculed={()=> setHorseProfile({...horseProfile, idealRiderIsVehiculed : !horseProfile.idealRiderIsVehiculed}) }
                hasManaged={()=> setHorseProfile({...horseProfile, idealRiderHasManaged : !horseProfile.idealRiderHasManaged}) }
                />
            </div>
        </div>
        {/* {success === true ? (
            <div class="alert alert-success" role="alert">
                <h5> Votre annonce est créée !</h5>
            </div>
        ) : success === false ? (
            <div class="alert alert-danger" role="alert">
                <h5> Un problème est survenu lors de la création de votre annonce, veuillez
            réessayer. </h5>
            </div>
        ) : (
            ""
        )} */}

        <FloatingButton 
            btnName={'Poster mon annonce'}
            onClick={() => postDataHorse()}
        />

        </>
    )

}

export default PostHorse