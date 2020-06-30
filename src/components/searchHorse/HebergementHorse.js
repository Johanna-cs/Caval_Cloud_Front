import React from 'react'
import Checkbox from '../common/Checkbox'

const HebergementHorse = () => {
      
    return ( 
        
        
        
        
        <div className="searchHorse_hebergt">
            <h5>Comment est hebergé le cheval ? </h5>
                <div className="hebergtList">
                    <Checkbox CheckboxText="Boxe" />
                    <Checkbox CheckboxText="Paddock" />
                    <Checkbox CheckboxText="Stabulation" />
                    
                </div>
        </div>

    )}

export default HebergementHorse