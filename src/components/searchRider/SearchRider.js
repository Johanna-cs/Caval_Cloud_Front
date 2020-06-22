import React, {useState, useEffect} from 'react'
import { Collapse, Button } from 'reactstrap';
import Header from '../Header_footer/Header';
import Axios from 'axios'
import usePosition from '../usePosition';
import './SearchRider.css';

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

        <div className="main">

            <div className="localisation">            
                <h4>Localisation</h4>
                <input name='localisation' id='localisation' type='text' placeholder='  Saisissez une ville et un rayon' value={cityLocalisation} onChange={(e) => setCityLocalisation(e.target.value)}></input>
                {/* <Position /> */}

                <Button onClick={toggle} id="btn-discipline" style={{ marginBottom: '1rem', border : 'none'}}>
                    <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Button>

                <Collapse isOpen={isOpen}>
                        <label for="rayon">Dans un rayon autour de :</label>
                        <input type="range" id="rayon" name="rayon" min="0" max="11"></input>
                </Collapse>
            </div>

            <div className='list-disciplines'>

                <h4>Disciplines</h4>
                <div className='discipline'>
                    <label for="obstacle">Obstacle</label>
                    <input type="checkbox" id="obstacle" name="obstacle"></input>
                </div>

                <div className='discipline'>
                    <label for="dressage">Dressage</label>
                    <input type="checkbox" id="dressage" name="dressage"></input>
                </div>

                <div className='discipline'>
                    <label for="cce">CCE</label>
                    <input type="checkbox" id="cce" name="cce"></input>
                </div>

                <div className='discipline'>
                    <label for="ethologie">Ethologie</label>
                    <input type="checkbox" id="ethologie" name="ethologie"></input>
                </div>

                <div className='discipline'>
                    <label for="attelage">Attelage</label>
                    <input type="checkbox" id="attelage" name="attelage"></input>
                </div>

                <div className='discipline'>
                    <label for="trec">TREC</label>
                    <input type="checkbox" id="trec" name="trec"></input>
                </div>

            </div>

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

            <div className='search-button'>
                <button id="search-button">LANCER MA RECHERCHE</button>
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


        </>
    )

}

export default SearchRider