import React from 'react'
import './floatingButton.css'


const FloatingButton = (props) => {

    return (
      <div className="floating-button">
        <button 
          id="floating-button"
          onClick={props.onClick}
        > 
          {props.btnName}
        </button>
      </div>
    );}

export default FloatingButton
