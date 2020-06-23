import React, {useState, useEffect} from 'react'
import { Collapse, Button } from 'reactstrap';
import Header from '../Header_footer/Header';
import Axios from 'axios'
import usePosition from '../usePosition';
import './SearchRider.css';
import FlottingButton from '../common/FlottingButton'
import Disciplines from '../common_section/Disciplines'
import Localisation from '../common_section/Localisation';

const latitudes = 43.620761599999994
const longitudes = 5.305139200000001

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

        {/* <code>
            latitude: {latitude}<br/>
            longitude: {longitude}<br/>
            error: {error}
        </code> */}

        <div className="searchRider_page">

            <div className="localisation">            
                <h4>Localisation section à modifier</h4>
                <input name='localisation' id='localisation' type='text' placeholder='  Saisissez une ville et un rayon' value={cityLocalisation} onChange={(e) => setCityLocalisation(e.target.value)}></input>
                {/* <Position /> */}
                <Localisation />

            </div>
            <hr />
                <Disciplines />
            <hr />

            <div className='section'>

                <h4>Balade</h4>
                <div className='btn-on-off'>
                    
                    <p>J'aimerais pouvoir partir en balade</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>

                </div>

            </div>

            <div className='section'>

                <h4>Concours</h4>
                <div className='btn-on-off'>
                    
                    <p>J'aimerais pouvoir sortir en concours</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>

                </div>

            </div>
            <div className='section'>

                <h4>Autonomie</h4>

                <div className='btn-on-off'>
                
                    <p>Je suis véhiculé</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>

                </div>

                <div className='btn-on-off'>

                    <p>J'ai déjà eu un cheval sous ma responsabilité</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>

                </div>
            </div>
        </div>
        <FlottingButton btnName={'Lancer la recherche'}/>

        </>
    )

}

export default SearchRider