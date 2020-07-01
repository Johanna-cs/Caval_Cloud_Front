import React, {useState, useEffect} from 'react'
import Header from '../Header_footer/Header';
import Axios from 'axios'
import usePosition from '../usePosition';
import './SearchRider.css';
import FloatingButton from '../common/FloatingButton'
import Disciplines from '../common_section/Disciplines'
import Localisation from '../common_section/Localisation';
import SlidingButton from '../common/SlidingButton'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Frequency from '../common_section/Frequency'
import RangeButton from '../common/RangeButton'

const SearchRider = () => {
    // Localisation des coordonnées GPS via le hook "usePosition" :
    const {latitude, longitude, error} = usePosition();    
    // Récupération de la ville géolocalisée depuis l'API OpenStreetMap :
    const [cityLocalisation, setCityLocalisation] = useState('');
    // Récupération de l'ancienne ville pour le locale storage
    localStorage.setItem('lastCitySaved',cityLocalisation);
    // Choix du rayon de recherche des annonces :
    const [perimeter, setPerimeter] = useState(20);
    // Précédente localisation enregistrée dans le navigateur (si existante) :
    const [lastCitySaved, setLastCitySaved] = useState('');
    // Années de pratique :
    const [yearsOfPractice, setYearsOfPractice] = useState(null);
    // Niveau de galop : 
    const [gallopLevel, setGallopLevel] = useState(null)
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
    const [doCompetition, setDoCompetition] = useState(false)
    // Fonction qui permet de transformer les coordonnées GPS en adresse physique, ici la ville ('municipality'), depuis l'API openstreetmap
    const getLocation = () => {
        Axios
        .get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.error(err))
        .finally(console.log(cityLocalisation))
    }
    useEffect(() => {
        getLocation()
    }, [])
    return (
        <>
        <Header title='CHERCHER UN CAVALIER'/>
        <div className="searchRider_page">
            <div className="localisation">   
            {latitude}{longitude}
            <h1>ville : {cityLocalisation} </h1>
                <Localisation
                    value={cityLocalisation}
                    onChange={(e) => setCityLocalisation(e.target.value)}
                    definePerimeter={(e) => setPerimeter(e.target.value)}
                    perimeter={perimeter}
                />
                <div> Années de pratique : {yearsOfPractice}
                    <div className='annees_pratique'>
                        <span>0</span>
                        <RangeButton
                            min="0" 
                            max="99"
                            onChange={(e) => setYearsOfPractice(e.target.value)
                            }
                        />
                        <span>99</span>
                    </div>
                </div>
                <hr />
                <div> Niveau de Galop : {gallopLevel}
                    <div className='niveau_galop'>
                        <span>0</span>
                        <RangeButton
                            min="0" 
                            max="7" 
                            list='niveau_galop'
                            onChange={(e) => setGallopLevel(e.target.value)} 
                        />
                        <span>7</span>
                    </div>
                </div>
                <hr />
                <div> Age du cavalier : {riderAge}
                    <div className='age_cavalier'>
                        <span>5</span>
                        <RangeButton
                            min="0" 
                            max="99"
                            onChange={(e) =>setRiderAge(e.target.value)} 
                        />
                        <span>99</span>
                    </div>
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
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}
                />
            <hr />
            <h4>Rythme de la demi-pension</h4>
                <Frequency
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
                />
            <h4>Concours</h4>
                <SlidingButton
                    SlidingButtonText='Le cavalier peut faire du concours avec mon cheval' 
                    SlidingButtonID='competitionOk' 
                    onClick={() => setDoCompetition(!doCompetition)}
                />
        </div>
        <FloatingButton btnName={'Lancer la recherche'}/>
        </>
    )
}
export default SearchRider