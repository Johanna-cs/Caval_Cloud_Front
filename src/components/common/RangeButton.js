import React from 'react'
import './rangeButton.css'

const RangeButton = (props) => {
    
    return (
        <div>
        <div className="rangeButtonSec">
        <input 
            type="range" 
            class="rangeBtn" 
            id={props.radioSelBtnId} 
            name={props.radioSelBtnText} 
            min={props.min} max={props.max} 
            value={props.onchange} 
            onChange={props.onChange}
            />
            <label for={props.radioSelBtnId}>{props.radioSelBtnText}</label>
        </div>
        </div>
    
    )}

export default RangeButton