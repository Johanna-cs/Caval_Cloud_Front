import React from 'react'
import SelectButton from '../common/SelectButton'

const HebergementHorse = (props) => {
      
    return ( 
        
        
        
        
        <div className="searchHorse_hebergt">
            <h5>Comment est hebergé le cheval ? </h5>
                <div className="hebergtList">
                <SelectButton radioSelBtnId="Boxe" radioSelBtnValue="Boxe" radioSelBtnName='boxeType' onClick={props.onClick} />
                <SelectButton radioSelBtnId="Paddock" radioSelBtnValue="Paddock" radioSelBtnName='boxeType' onClick={props.onClick} />
                <SelectButton radioSelBtnId="Stabulation" radioSelBtnValue="Stabulation" radioSelBtnName='boxeType' onClick={props.onClick} />
                    
                </div>
        </div>

    )}

export default HebergementHorse