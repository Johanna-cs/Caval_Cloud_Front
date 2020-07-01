import React from 'react'
import './floatingButton.css'


const FloatingButton = (props) => {

    return (
      <div className="floating-button">
        <button id="floating-button"> {props.btnName}</button>
      </div>
    );}

export default FloatingButton
