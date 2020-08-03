import React from 'react'
import './rangeButton.css'

const RangeButton = (props) => {
    
    return (
        <div>
        <div className="rangeButtonSec">
            <input 
                type="range" 
                className="rangeBtn" 
                id={props.radioRangeBtnId} 
                name={props.radioRangeBtnText} 
                min={props.min} max={props.max} 
                value={props.onchange} 
                onChange={props.onChange}
            />
            <label htmlFor={props.radioSelBtnId}>{props.radioSelBtnText}</label>
        </div>
        </div>
    
    )}

export default RangeButton