import React, {useState, useEffect} from 'react'
import { Collapse, Button } from 'reactstrap';
import Header from '../Header_footer/Header';
import Axios from 'axios'
import usePosition from '../usePosition';
import './SearchRider.css';
import FloatingButton from '../common/FloatingButton'
import Disciplines from '../common_section/Disciplines'
import Localisation from '../common_section/Localisation';
import SlidingButton from '../common/SlidingButton'
import BudgetMensuel from '../common_section/BudgetMensuel'
import Frenquency from '../common_section/Frequency'


const SearchRider = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {latitude, longitude, error} = usePosition();
    
    const [location, setLocation] = useState(null);
    const [cityLocalisation, setCityLocalisation] = useState('')

    const toggle = () => setIsOpen(!isOpen);


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

        <Header title='CHERCHER UN CAVALIER'/>

        <div className="searchRider_page">

            <div className="localisation">            
                <Localisation 
                    value={cityLocalisation}
                    onChange={(e) => setCityLocalisation(e.target.value)}
                />
                <div> Années de pratique
                </div>
                <hr />
                <div> Niveau de Galop
                </div>
                <hr />
                <div> Age du cavalier 

                </div>
                <hr />
                <SlidingButton SlidingButtonText='Personne véhiculée' SlidingButtonID='vehiculed' />
            </div>
            <hr />
                <Disciplines />
            <hr />
                <BudgetMensuel />
                <Frenquency frequencyTitle='Rythme de la demi-pension'/>
            <h4>Concours</h4>
                <SlidingButton SlidingButtonText='Le cavalier peut faire du concours avec mon cheval' SlidingButtonID='competitionOk' />

        </div>
        <FloatingButton btnName={'Lancer la recherche'}/>

        </>
    )

}

export default SearchRider