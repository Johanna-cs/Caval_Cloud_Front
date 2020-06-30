import React from 'react'
import './rangeButton.css'

const RangeButton = (props) => {
    
    return (
        <div>
        <div className="rangeButtonSec">
            <input type="range" class="rangeBtn" 
            id={props.radioSelBtnId} name={props.radioSelBtnText}  value={props.onchange}/>
            <label for={props.radioSelBtnId}>{props.radioSelBtnText}</label>
        </div>
        </div>
    
    )}

export default RangeButton