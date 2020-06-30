import React from 'react'
import './selectButton.css'

const SelectButton = (props) => {
    
    return (
        <div>
        <div className="selectBtn-list">
            <input type="radio" class="radioSelBtn" 
            id={props.radioSelBtnId} name={props.radioSelBtnText} value='optionSelect' />
            <label for={props.radioSelBtnId}>{props.radioSelBtnText} </label>
        </div>
        </div>
    
    )}

export default SelectButton