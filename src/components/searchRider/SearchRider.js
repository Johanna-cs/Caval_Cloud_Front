import React, {useState, useEffect, useContext} from 'react'
import Header from '../Header_footer/Header';
import Axios from 'axios'
import usePosition from '../common_section/usePosition';
import './SearchRider.css';
import FloatingButton from '../common/FloatingButton'
import Disciplines from '../common_section/Disciplines'
import Localisation from '../common_section/Localisation';
import SlidingButton from '../common/SlidingButton'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Frequency from '../common_section/Frequency'
import RangeButton from '../common/RangeButton'
import Competition from '../common_section/Competition'
import { Link } from 'react-router-dom'
import { Results_Rider_Context} from '../../components/context/Results_Rider_Context'
import Pension from '../common_section/Pension';



const SearchRider = () => {
    // Localisation des coordonnées GPS via le hook "usePosition" :
    const {latitude, longitude, error} = usePosition();    
    // Récupération de la ville géolocalisée depuis l'API OpenStreetMap :
    const [cityLocalisation, setCityLocalisation] = useState('');
    // Récupération de l'ancienne ville pour le locale storage
    localStorage.setItem('lastCitySaved',cityLocalisation);
    //Récupération du CP 
    const [postal, setPostal] = useState(null);
    // Choix du rayon de recherche des annonces :
    const [perimeter, setPerimeter] = useState(20);
    // Années de pratique :
    const [yearsOfPractice, setYearsOfPractice] = useState(null);
    // Niveau de galop : 
    const [galopLevel, setGalopLevel] = useState(null)
    // Age du cavalier :
    const [riderAge, setRiderAge] = useState(null)
    // Personne véhiculée ou non :
    const [isVehiculed, setIsVehiculed] = useState(false)
    // Disciplines :
    const [disciplines, setDisciplines] = useState([])
    // Budget mensuel :
    const [budget, setBudget] = useState(0)
    // Choix de la devise :
    const [currency, setCurrency] = useState('')
    // Fréquence de la demi-pension :
    const [frequency, setFrequency] = useState('')
    // Fréquence de la demi-pension, jours fixes :
    const [fixedFrequency, setFixedFrequency] = useState(false)
    // Concours ou pas :
    const [doCompetition, setDoCompetition] = useState('')
    // Materiel selle :
    const [haveMaterialSaddle, setHaveMaterialSaddle] = useState(false)
    // Résultats de la recherche de riders :
    const { resultsRiders, setResultsRiders } = useContext(Results_Rider_Context)
    // Rider a déjà managé des chevaux :
    const [hasManaged, setHasManaged] = useState(false)

    const getLocation = () => {
        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.log(err))
    }

    const getRiders = async () => {
        await Axios
        .get(`http://localhost:4000/api/riders/search/?age=${riderAge}&postal=${postal}&level=${galopLevel}&vehiculed=${isVehiculed}&budget=${budget}&competition=${doCompetition}&years=${yearsOfPractice}&frequency=${frequency}&regularity=${fixedFrequency}`)
        .then(res=> setResultsRiders(res))
        .catch(err => console.log(err))
        .finally(console.log(resultsRiders))
    }

    useEffect(() => {
        getLocation()
    }, )


    return (
        <>
        <Header title='Chercher un cavalier'/>
        <div className="searchRider_page">
            <div className="localisation">   
                <Localisation 
                    locTitle='Où ?'
                    value={cityLocalisation}
                    onChange={(e) => setCityLocalisation(e.target.value)}
                    definePerimeter={(e) => setPerimeter(e.target.value)}
                    perimeter={perimeter}
                />
                <h5> Années de pratique minimum : {yearsOfPractice} </h5>
                    <div className='divRangeSpan'>
                        <span>0</span>
                        <RangeButton 
                            min="0" 
                            max="99"
                            onChange={(e) => setYearsOfPractice(e.target.value)} 
                        />
                        <span>99 ans</span>
                    </div>
                
                <hr />
                <h5> Niveau de Galop minimum : {galopLevel} </h5>
                    <div className='divRangeSpan'>
                        <span>0</span>                   
                        <RangeButton 
                            min="0" 
                            max="7" 
                            list='niveau_galop'
                            onChange={(e) => setGalopLevel(e.target.value)} 
                        />
                        <span>7</span>
                    </div>
                

                <hr />
                <h5> Age du cavalier <span>(+/- 2ans)</span>: {riderAge} ans</h5>
                    <div className='divRangeSpan'>
                        <span>5 ans</span>
                        <RangeButton 
                            min="0" 
                            max="99"
                            onChange={(e) =>setRiderAge(e.target.value)} 
                        />
                        <span>99 ans</span>
                    </div>
                
                <SlidingButton
                    SlidingButtonText='Personne véhiculée' 
                    SlidingButtonID='vehiculed' 
                    onClick={() => setIsVehiculed(!isVehiculed)}
                />
                <SlidingButton
                    SlidingButtonText='A déjà eu un cheval sous sa responsabilité' 
                    SlidingButtonID='experience' 
                    onClick={() => setHasManaged(!hasManaged)}
                    />
            </div>
            <hr />
                <Disciplines
                    // onChange={(e) => manageDisciplines(e.target.name)}
                    // onlog = {console.log(disciplines)}
                    // onChange = {(e) => Checkboxes(e.target.name)}
                    
                />
            <hr />
                <BudgetMensuel 
                budgetTitle='Budget'
                    budget={budget} 
                    currency={currency}
                    priceTitle={'Prix maximum par mois :'}
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}
                />
            
            
            <div className='frequency_pension'>
                <Pension
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
                />
            </div>
            <hr />
            <div className='materialDiv'>
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
            <div className='competition'>
            <Competition 
                    onClick={(e) => setDoCompetition(e.target.value)}
            />
            </div>
        </div>
        <Link to={{pathname: "/rider/results"}}>
            <FloatingButton 
                btnName={'Lancer la recherche'} 
                onClick={async () => { await getRiders()} }
            />
        </Link>


        </>
        )
}
export default SearchRider