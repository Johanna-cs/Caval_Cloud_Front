import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'
import '../searchHorse/searchHorse.css'
import geoloc from '../SVG-icons/geolocalisation.svg'
import loc from '../SVG-icons/geolocation-icon2.svg'
import locmap from '../SVG-icons/map-marker-alt-solid.svg'

function Localisation(props) {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (


        <div className='searchHorse_loc'>
            <h4>Localisation </h4>
                <input 
                    className='mainInput' 
                    placeholder='Localisation' 
                    value={props.value}
                    onChange={props.onChange}
                />
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg></Button>
            <div className='searchHorse_loc2'>
                <Collapse isOpen={isOpen}>
                    <h5>Localisation  :</h5>
                    <p className='loc_text'>Dans un rayon autour de : </p>
                    <div className='rayon_loc'>
                            <span>0</span>
                            <input type="range" min="0" max="200" />
                            <span>200</span>
                    </div>
                    <div className='last_loc'>
                    <h5>Localisations récentes :</h5>
                    
                    <div className='lastLoc'>
                        <img src={locmap} alt='logo loc' className='loc_map'/>
                        <p> Aix derniere localisation</p>
                    </div>
                    <div className='aroundMe'>
                        <img src={geoloc} alt='logo loc' className='loc_map'/>
                        <p> Autour de moi </p>
                    </div>
                    </div>
                </Collapse>
            </div>
        </div>
    )}

export default Localisation