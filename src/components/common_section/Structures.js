import React from 'react'
import Checkbox from '../common/Checkbox'
import './common_section.css'

const Structures = () => {
    
    return (
        
        
        <div className='structures'>
            <h4>Structure(s) disponible(s) </h4>
            <div className='structureList'>
                <Checkbox CheckboxText="Carrière" />
                <Checkbox CheckboxText="Manège couvert" />
                <Checkbox CheckboxText="Rond de longe" />
                <Checkbox CheckboxText="Piste de trotting" />
                <Checkbox CheckboxText="Cross" />
                <Checkbox CheckboxText="Chemins de balade" />
                <Checkbox CheckboxText="Champs" />
               
            </div>
        </div>
    )}

export default Structures