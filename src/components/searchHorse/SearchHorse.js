import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import Header from '../Header_footer/Header';
import Localisation from '../common_section/Localisation'
import Disciplines from '../common_section/Disciplines'
import Structures from '../common_section/Structures'
import Pension from '../common_section/Pension'
import IdealHorse from '../common_section/IdealHorse'
import IdealOwner from '../common_section/IdealOwner'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Scuring from '../common_section/Scuring'
import HebergementHorse from '../common_section/HebergementHorse'
import FloatingButton from '../common/FloatingButton'
import SlidingButton from '../common/SlidingButton'
import Axios from 'axios'
import usePosition from '../common_section/usePosition';
import Competition from '../common_section/Competition';
import { Results_Horse_Context} from '../../components/context/Results_Horse_Context'




const SearchHorse = (props) => {
    
    const {latitude, longitude} = usePosition();
    const [cityLocalisation, setCityLocalisation] = useState('')
    // Récupération de l'ancienne ville pour le locale storage
    localStorage.setItem('lastCitySaved',cityLocalisation);
    // Choix du rayon de recherche des annonces :
    const [perimeter, setPerimeter] = useState(null);
    // Précédente localisation enregistrée dans le navigateur (si existante) :
    const [lastCitySaved, setLastCitySaved] = useState('');
    
    // Budget mensuel 
    const [budget, setBudget] = useState(null)
    const [currency, setCurrency] = useState('')

    //balade
    const [doBalad, setDoBalad] = useState(false)

    // Taille du cheval idéal
    const [horseSize, setHorseSize] = useState('')
    // Age du cheval idéal
    const [ageHorse, setAgeHorse] = useState('')

    // age du proprietaire ideal
    const [ageOwner, setAgeOwner] = useState(null);
    // Fréquence :
    const [frequency, setFrequency] = useState("");
    // Fréquence jours fixes :
    const [fixedFrequency, setFixedFrequency] = useState(false);
    const [horseWork, setHorseWork] = useState("");


    //Ecurie
    const [scuringType, setScuringType] = useState('')

    //Hebergement 
    const [boxeType, setBoxeType] = useState('')

    //Coaching 
    const [coachingHere, setCoachingHere] = useState(false)
    const [externalCoach, setExternalCoach] = useState(false)

    // Materiel selle et de soin :
    const [haveMaterialSaddle, setHaveMaterialSaddle] = useState(false)
    

    // Concours :
    const [doCompetition, setDoCompetition] = useState('')

    // Résultats de la recherche de cheval :
    const { resultsHorses, setResultsHorses } = useContext(Results_Horse_Context)

    

    const getLocation = () => {
        Axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
        .then(res => setCityLocalisation(res.data.address.municipality))
        .catch(err => console.log(err))
    }
    const getHorses = async () => {
        await Axios.get(`http://localhost:4000/api/horses/search/?`)
        .then(res=> setResultsHorses(res))
        .catch(err => console.log(err))
        .finally(console.log(resultsHorses))
    }
    //http://localhost:4000/api/horses/search/?localisation=${cityLocalisation}&budget=${budget}&discipline=${}&structure=${}&rythme=${frequency}&stroll=${doBalad}&temper=&character=&type=&horseage=${ageHorse}&height=${horseSize}&ownerage=&ownercaracter=&communication=${frequency}&fixed=${fixedFrequency}&work=${horseWork}&loctype=${scuringType}&accomodation=${boxeType}&coachhere=${coachingHere}&coachext=${externalCoach}&competition=${doCompetition}&material=${haveMaterialSaddle}

    useEffect(() => {
        getLocation();
        getHorses();
    }, [])

    return (
        <>
        <Header className='header' title='Chercher un équidé'/>
        <div className='searchHorse_page'>
                <Localisation 
                locTitle='Où ?'
                value={cityLocalisation}
                onChange={(e) => setCityLocalisation(e.target.value)}
                definePerimeter={(e) => setPerimeter(e.target.value)}
                perimeter={perimeter} 
                />
            <hr />
                <BudgetMensuel 
                    budgetTitle='Budget'
                    budget={budget} 
                    currency={currency}
                    priceTitle={'Prix maximum par mois :'}
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}/>
            
                <Disciplines />
            <hr />
                <Structures />
            <hr />
            <div className='frequency_pension'>
                <Pension
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}
                />
            </div>
            <hr />
            <div className='searchHorse_bal'>
                <h4>Balade</h4>
                <div className='balade'>
                    <SlidingButton 
                    SlidingButtonText="Pouvoir partir seul en balade"
                    SlidingButtonID="baladSwitch"
                    onClick={() => setDoBalad(!doBalad)}
                    />
                </div>
            </div>
            <hr />
                <h4>Cheval idéal</h4>
                <IdealHorse 
                    horseSize={horseSize}
                    changeSize={(e) => setHorseSize(e.target.value)}
                    changeAge={(f) => setAgeHorse(f.target.value)}
                    ageHorse={ageHorse}
                     />
            <hr />
                <h4>Propriétaire idéal</h4>
                <IdealOwner 
                    ageOwner={ageOwner}
                    selectAge={(e) => setAgeOwner(e.target.value)}

                    frequency={frequency}
                    selectFrequency={(e) => setFrequency(e.target.value)}
                    fixedDay={() => setFixedFrequency(!fixedFrequency)}

                    selectHorseWork={(e) => setHorseWork(e.target.value)}
                    horseWork={horseWork}
                />
            
            <h4>Type d'écurie</h4>
                <Scuring
                    scuringType={scuringType}
                    onClick={(e) => setScuringType(e.target.value)}/>
            <hr />
                <HebergementHorse 
                    boxeType={boxeType}
                    onClick={(e) => setBoxeType(e.target.value)}/>
            <hr />
            <div className='coachingDiv'>
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
            <div className='materialDiv'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="J'ai ma selle"
                        SlidingButtonID="materialSwitch"
                        onClick={() => setHaveMaterialSaddle(!haveMaterialSaddle)}
                        />
                </div>

            </div>
            <hr />
            <div className='competition'>
                <Competition 
                onClick={(e) => setDoCompetition(e.target.value)}/>
            </div>    
            </div>
            <Link to={{pathname: "/horse/results"}}>
            <FloatingButton 
                btnName={'Lancer la recherche'} 
                // onClick={async () => { await getRiders()} }
            />
        </Link>
        
    </>
    )
}

export default SearchHorse 