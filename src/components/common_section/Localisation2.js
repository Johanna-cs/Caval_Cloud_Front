import React, { useState} from 'react'
import { Collapse, Button} from 'reactstrap'
import './common_section.css'
import geoloc from '../SVG-icons/geolocalisation.svg'
import RangeButton from '../common/RangeButton'
import locmap from '../SVG-icons/map-marker-alt-solid.svg'

function Localisation(props) {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    let myLastCitySaved = localStorage.getItem('lastCitySaved')

    return (
        <>

        <div className='locationDiv'>
            <div className='toggle_place'>
            <h4>{props.locTitle}</h4>
            <div className='aroundMe' onClick={() =>  props.getLocation()}>
                <img src={geoloc} alt='logo loc' className='loc_map'/>
                <p> Autour de moi </p>
            </div>
                <input 
                    min="0" 
                    max="200"
                    className='mainInput' 
                    placeholder='Code postal' 
                    value={props.value}
                    onChange={props.onChange}
                    // onClick={props.resetvalue}
                />
                </div>
                
                </div>

        
        </>
    )}

export default Localisation