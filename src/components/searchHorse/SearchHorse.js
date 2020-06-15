import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import { Collapse, Button } from 'reactstrap'




const SearchHorse = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
      
    return (
        <div className='searchHorse_page'>

            <div className='searchHorse_loc'>
                <h4 id='loc_title'>Localisation </h4>
                <input placeholder='Localisation'/>
                <button> </button>
                <div className='searchHorse_loc2'>
                <Button color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                    </svg></Button>
                <Collapse isOpen={isOpen}>
                    <h4 id='loc_title'>Localisation  :</h4>
                    <input placeholder='Saisissez une ville et un rayon'/>
                    <p className='loc_text'>Dans un rayon autour de : 
                        <output name="rayonOutputName" id="rayonOutputId">2</output> </p>
                    <form oninput='rayonOutputId.value = rayonInputId.value' >
                        <input type='range' id='rayonInput' name='rayonInputId' value='2' min='0' max='200'/>
                        <label for='rayonMin'>0km</label> <label for='rayonMax'>200km</label>
                    </form>
                </Collapse>
                </div>
            </div>

        </div>
    )
}

export default SearchHorse 