import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import { Collapse, Button } from 'reactstrap'
import geoloc from '../SVG-icons/geolocalisation.svg'
import loc from '../SVG-icons/geolocation-icon2.svg'
import locmap from '../SVG-icons/map-marker-alt-solid.svg'




const SearchHorse = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (
        <div className='searchHorse_page'>

            <div className='searchHorse_loc'>
                <h4>Localisation </h4>
                <input id='locInput' placeholder='Localisation'/>
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg></Button>
                <div className='searchHorse_loc2'>
                <Collapse isOpen={isOpen}>
                    <h4>Localisation  :</h4>
                    <p className='loc_text'>Dans un rayon autour de : </p>
                    <div className='rayon_loc'>
                            <span>0</span>
                            <input type="range" min="0" max="200" />
                            <span>200</span>
                    </div>
                    <div className='last_loc'>
                    <h4>Localisations récentes :</h4>
                    <img src={locmap} alt='logo loc' className='loc_map'/>
                    <p> Aix derniere localisation</p>
                    <img src={geoloc} alt='logo loc' className='loc_map'/>
                    <p> Autour de moi </p>
                    </div>
                </Collapse>
                </div>
            </div>


            <div className='searchHorse_price' >
            
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg></Button>
                <div className='searchHorse_price2'>
                <Collapse isOpen={isOpen}>
                    <h4> Prix mensuel maximum : </h4>
                    <input id='priceInput' placeholder='prix/mois'/>
                            <h4> Devise : </h4>
                            <div className='selectDevise'> 
                                <input className='deviseInput' name='selectEur' type="radio" value="option1" checked/>
                                <label className='deviseLabel' for='selectEur'> Euros - € </label>
                                <hr />
                                <input className='deviseInput' name='selectLiv' type="radio" value="option2" checked/>
                                <label className='deviseLabel' for='selectLiv'> Livre Sterling - £ </label>
                                <hr />
                                <input className='deviseInput' name='selectDol' type="radio" value="option3" checked/>
                                <label className='deviseLabel' for='selectDol'> Dollar - $ </label>
                                <hr />
                            </div>
                    </Collapse>
                    </div>
            </div>
            
        </div>
    )
}

export default SearchHorse 