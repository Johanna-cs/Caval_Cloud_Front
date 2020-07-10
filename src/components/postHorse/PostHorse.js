import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './postHorse.css'
import Header from '../Header_footer/Header'
import { Link } from "react-router-dom";
import RangeButton from '../common/RangeButton'
import SelectButton from '../common/SelectButton'
import SlidingButton from '../common/SlidingButton'
import Scuring from '../common_section/Scuring'
import Structures from '../common_section/Structures'
import Localisation from '../common_section/Localisation'
import usePosition from '../common_section/usePosition';
import Disciplines from '../common_section/Disciplines'
import Frequency from '../common_section/Frequency'
import BudgetMensuel from '../common_section/BudgetMensuel'
import IdealRider from './IdealRider'
import FloatingButton from '../common/FloatingButton'
import Competition from '../common_section/Competition'
import HebergementHorse from '../common_section/HebergementHorse'
import Carousel from '../common/Carousel'


const PostHorse = (props) => {
    
    // Présentation cheval nom, age, taile
    const [name, setName] = useState('');
    const [ageHorse, setAgeHorse] = useState('')
    const [horseSize, setHorseSize] = useState('')

    const {latitude, longitude, error} = usePosition();
    const [cityLocalisation, setCityLocalisation] = useState('')
    // Récupération de l'ancienne ville pour le locale storage
    localStorage.setItem('lastCitySaved',cityLocalisation);
    // Choix du rayon de recherche des annonces :
    const [perimeter, setPerimeter] = useState(null);
    // Précédente localisation enregistrée dans le navigateur (si existante) :
    const [lastCitySaved, setLastCitySaved] = useState('');

    //Coaching 
    const [coachingHere, setCoachingHere] = useState(false)
    const [externalCoach, setExternalCoach] = useState(false)
    // Fréquence de la demi-pension :
    const [frequency, setFrequency] = useState('')
    // Fréquence de la demi-pension, jours fixes :
    const [fixedFrequency, setFixedFrequency] = useState(false)

    // Materiel selle :
    const [haveMaterialSaddle, setHaveMaterialSaddle] = useState(false)
    //Hebergement 
    const [boxeType, setBoxeType] = useState('')

    //balade
    const [doBalad, setDoBalad] = useState(false)

    // Concours :
    const [doCompetition, setDoCompetition] = useState(false)

     // Budget mensuel 
     const [budget, setBudget] = useState(null)
     const [currency, setCurrency] = useState('')

     const getLocation = () => {
        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getLocation()
    }, )


    return (
        <>
        <Header className='header' title='POSTER UNE ANNONCE CHEVAL' />
        <div className='postHorse_page'>
            <div className='postHorse_pres'>
        <h4>Présentation :</h4>
            <form className="postHorse-form">
            <label>
                <input
                className="postHorse_input"
                type="text"
                placeholder="Nom du cheval"
                onChange={(event) => setName(event.target.value)}
                autoFocus
                />
            </label>
            </form>

            </div>
            <div className='horse_age'>
            <h5> Age du cheval : {ageHorse} ans</h5>
            <div className='divRangeSpan'>
                    <span>1 an</span>
                    <RangeButton 
                        id='ageHorse'
                        min='1'
                        max='30'
                        radioRangeBtnId='ageHorse'
                        onChange={(e) => setAgeHorse(e.target.value)
                    }/>
                    <span>30 ans</span>
                </div>
            </div>
            <hr />
            <div className='horse_size'>
                <h5> Taille : {horseSize} cm</h5>
                <div className='divRangeSpan'>
                    <span>100 cm</span>
                    <RangeButton 
                        min='80'
                        max='200'
                        radioRangeBtnId='horseSize'
                        onChange={(e) => setHorseSize(e.target.value)
                    }/>
                    <span>200 cm</span>
                </div>
            </div>
            <Carousel />
            
            <div className='localisation_horse'>
            <h5>Où se trouve le cheval ? </h5>
                <Localisation 
                value={cityLocalisation}
                onChange={(e) => setCityLocalisation(e.target.value)}
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
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Dynamique'
                        radioSelBtnValue='Dynamique'
                        radioSelBtnName='temperHorse'
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Speed'
                        radioSelBtnValue='Speed'
                        radioSelBtnName='temperHorse'
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='A canaliser'
                        radioSelBtnValue='A canaliser'
                        radioSelBtnName='temperHorse'
                        onClick={props.onClick} />

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
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Froid'
                        radioSelBtnValue='Froid'
                        radioSelBtnName='caracterHorse'
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Joueur'
                        radioSelBtnValue='Joueur'
                        radioSelBtnName='caracterHorse'
                        onClick={props.onClick} />

                    <SelectButton   
                        radioSelBtnId='Sensible'
                        radioSelBtnValue='Sensible'
                        radioSelBtnName='caracterHorse'
                        onClick={props.onClick}  />
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
                        onClick={props.onClick}  />

                    <SelectButton 
                        radioSelBtnValue={'Classique'}
                        radioSelBtnId={'Classique'}
                        radioSelBtnName='bodyHorse'
                        onClick={props.onClick}  />

                    <SelectButton 
                        radioSelBtnValue={'Porteur'}
                        radioSelBtnId={'Porteur'} 
                        radioSelBtnName='bodyHorse'
                        onClick={props.onClick}  />

                    <SelectButton 
                        radioSelBtnValue={'Lourd'}
                        radioSelBtnId={'Lourd'}
                        radioSelBtnName='bodyHorse'
                        onClick={props.onClick}  />
                    </div>
            </div>
            <hr />
            <h4>Ecuries et moniteur </h4>
            <Scuring />
            <HebergementHorse 
                    boxeType={boxeType}
                    onClick={(e) => setBoxeType(e.target.value)}/>
            <hr />
            <Structures />
            <hr />
            <div className='searchHorse_coaching'>
                <h4>Coaching</h4>
                <div className='coaching'>
                    <SlidingButton 
                    SlidingButtonText="Sur place"
                    SlidingButtonID="coachSwitch"
                    onClick={() => setCoachingHere(!coachingHere)}
                    />
                </div>
                
                <div className='coaching'>
                    <SlidingButton 
                    SlidingButtonText="Intervenant exterieur"
                    SlidingButtonID="coachExtSwitch"
                    onClick={() => setExternalCoach(!externalCoach)}
                    />
                </div>
            </div>
            <hr />
            <Disciplines />
            <hr />
            <h4>Rythme de la demi-pension</h4>
            <div className='frequency_pension'>
                <Frequency
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
                />
            </div>
            <hr />
            <div className='postHorse_materiel'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="Le cavalier doit avoir sa selle"
                        SlidingButtonID="materialSwitch"
                        onClick={() => setHaveMaterialSaddle(!haveMaterialSaddle)}
                        />
                </div>
                
            </div>
            <hr />
            <div className='postHorse_bal'>
                <h4>Balade</h4>
                <div className='balade'>
                    <SlidingButton 
                    SlidingButtonText="Possibilité de partir seul en balade"
                    SlidingButtonID="baladSwitch"
                    onClick={() => setDoBalad(!doBalad)}
                    />
                </div>
            </div>
            <hr />
            
                <div className='competiton'>
                <Competition onClick={() => setDoCompetition(!doCompetition)}/>
                </div>
            
            
                <BudgetMensuel budget={budget} 
                    currency={currency}
                    priceTitle={'prix minimum :'}
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}/>



            <hr />
            <div className='owner_presentation'>
                <h4> A propos de vous </h4> 
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
                <IdealRider />
            </div>
        </div>


        <FloatingButton btnName={'Poster mon annonce'}/>

        </>
    )

}

export default PostHorse