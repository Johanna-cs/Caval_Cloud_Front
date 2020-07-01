import React, {useState, useEffect} from 'react'
import './searchHorse.css'
import Header from '../Header_footer/Header';
import Localisation from '../common_section/Localisation'
import Disciplines from '../common_section/Disciplines'
import Structures from './Structures'
import IdealHorse from './IdealHorse'
import IdealOwner from './IdealOwner'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Scuring from './Scuring'
import HebergementHorse from './HebergementHorse'
import FloatingButton from '../common/FloatingButton'
import SlidingButton from '../common/SlidingButton'
import Axios from 'axios'
import usePosition from '../common_section/usePosition';


const SearchHorse = (props) => {
    
    const {latitude, longitude, error} = usePosition();
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

    //Ecurie
    const [scuringType, setScuringType] = useState('')

    //Coaching 
    const [coachingHere, setCoachingHere] = useState(false)
    const [externalCoach, setExternalCoach] = useState(false)

    // Materiel selle et de soin :
    const [haveMaterialSaddle, setHaveMaterialSaddle] = useState(false)
    const [haveMaterialCare, setHaveMaterialCare] = useState(false)

    // Concours :
    const [doCompetition, setDoCompetition] = useState(false)
    

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
        <Header className='header' title='CHERCHER UN CHEVAL'/>
        <div className='searchHorse_page'>
                <Localisation 
                value={cityLocalisation}
                onChange={(e) => setCityLocalisation(e.target.value)}
                definePerimeter={(e) => setPerimeter(e.target.value)}
                perimeter={perimeter} 
                />
            <hr />
                <BudgetMensuel budget={budget} 
                    currency={currency}
                    onChange={(e) => setBudget(e.target.value)}
                    onClick={(e) => setCurrency(e.target.value)}/>
            
                <Disciplines />
            <hr />
                <Structures />
            <hr />
            <div className='searchHorse_bal'>
                <h4>Balade</h4>
                <div className='balade'>
                    <SlidingButton 
                    SlidingButtonText="J'aimerais pouvoir partir en balade"
                    SlidingButtonID="baladSwitch"
                    onClick={() => setDoBalad(!doBalad)}
                    />
                </div>
            </div>
            <hr />
                <h4>Cheval idéal</h4>
                <IdealHorse />
            <hr />
                <h4>Propriétaire idéal</h4>
                <IdealOwner 
                    ageOwner={props.ageOwner}
                    frequency={props.frequency}
                    horseWork={props.horseWork}
                />
            
            <h4>Ecuries et moniteur </h4>
                <Scuring
                scuringType={scuringType}
                onClick={(e) => setScuringType(e.target.value)}/>
            <hr />
                <HebergementHorse />
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
            <div className='searchHorse_materiel'>
                <h4>Materiel</h4>
                <div className='materiel'>
                        <SlidingButton 
                        SlidingButtonText="J'ai ma selle"
                        SlidingButtonID="materialSwitch"
                        onClick={() => setHaveMaterialSaddle(!haveMaterialSaddle)}
                        />
                </div>
                <div className='materiel'>
                    <SlidingButton 
                        SlidingButtonText="J'ai mon materiel de soin"
                        SlidingButtonID="materialCareSwitch"
                        onClick={() => setHaveMaterialCare(!haveMaterialCare)}
                        />
                </div>
            </div>
            <hr />
            <div className='searchHorse_compet'>
                <h4>Concours</h4>
                <div className='competiton'>
                <SlidingButton 
                        SlidingButtonText="J'aimerais pouvoir sortir en concours"
                        SlidingButtonID="competitionSwitch"
                        onClick={() => setDoCompetition(!doCompetition)}
                        />
                </div>
            </div>    
            </div>
            <FloatingButton btnName={'Lancer la recherche'}/>
        
    </>
    )
}

export default SearchHorse 