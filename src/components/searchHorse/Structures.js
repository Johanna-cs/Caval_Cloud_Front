import React from 'react'
import Checkbox from '../common/Checkbox'

const Structures = () => {
    
    return (
        
        
        <div className='searchHorse_struc'>
            <h4>Structure à disposition </h4>
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