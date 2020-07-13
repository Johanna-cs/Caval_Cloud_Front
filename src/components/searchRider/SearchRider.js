import React, {useState, useEffect} from 'react'
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


const SearchRider = () => {
    // Localisation des coordonnées GPS via le hook "usePosition" :
    const {latitude, longitude, error} = usePosition();    
    // Récupération de la ville géolocalisée depuis l'API OpenStreetMap :
    const [cityLocalisation, setCityLocalisation] = useState('');
    // Récupération de l'ancienne ville pour le locale storage
    localStorage.setItem('lastCitySaved',cityLocalisation);
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
    const [disciplines, setDisciplines] = useState([1,2])
    // Budget mensuel :
    const [budget, setBudget] = useState(null)
    // Choix de la devise :
    const [currency, setCurrency] = useState('')
    // Fréquence de la demi-pension :
    const [frequency, setFrequency] = useState('')
    // Fréquence de la demi-pension, jours fixes :
    const [fixedFrequency, setFixedFrequency] = useState(false)
    // Concours ou pas :
    const [doCompetition, setDoCompetition] = useState('')
    // Résultats de la recherche de riders :
    const [riders, setRiders] = useState([])

    const getLocation = () => {
        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.log(err))
    }

    const getRiders = async () => {
        await Axios
        .get(`http://localhost:4000/api/riders/search/?`)
        .then(res=> setRiders(res))
        .catch(err => console.log(err))
        .finally(console.log(riders))
    }

    useEffect(() => {
        getLocation()
    }, )


    return (
        <>
        <Header title='CHERCHER UN CAVALIER'/>
        <div className="searchRider_page">
            <div className="localisation">   
                <Localisation 
                    value={cityLocalisation}
                    onChange={(e) => setCityLocalisation(e.target.value)}
                    definePerimeter={(e) => setPerimeter(e.target.value)}
                    perimeter={perimeter}
                />
                <h5> Années de pratique minimum : {yearsOfPractice} ans</h5>
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
                <h5> Age du cavalier <span>(+/- 3ans)</span>: {riderAge} ans</h5>
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
            </div>
            <hr />
                <Disciplines
                    // onChange={(e) => manageDisciplines(e.target.name)}
                    // onlog = {console.log(disciplines)}
                    // onChange = {(e) => Checkboxes(e.target.name)}
                    
                />
            <hr />
                <BudgetMensuel 
                    budget={budget} 
                    currency={currency}
                    priceTitle={'prix macimum :'}
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}
                />
            
            
            <div className='frequency_pension'>
                <Frequency
                    frequencyTitle='Rythme de la demi-pension'
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
                />
            </div>
            <hr />
            <Competition onClick={(e) => setDoCompetition(e.target.value)}/>
        </div>
        <FloatingButton 
            btnName={'Lancer la recherche'} 
            onClick={() => getRiders()}
        />

        </>
        )
}
export default SearchRider