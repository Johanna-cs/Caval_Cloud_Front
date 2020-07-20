import React from 'react'
import Checkbox from '../common/Checkbox'
import './common_section.css'

const Structures = () => {
    
    return (
        
        
        <div className='structures'>
            <h4>Structure(s) disponible(s) </h4>
            <div className='structureList'>
               
                <Checkbox CheckboxText="Rond de longe" />
                <Checkbox CheckboxText="Carrière" />
                <Checkbox CheckboxText="Manège à couvert" />
                <Checkbox CheckboxText="Champs" />
                <Checkbox CheckboxText="Piste de trotting" />
                <Checkbox CheckboxText="Chemins de balade" />
                    
               
            </div>
        </div>
    )}

export default Structures