import React, { useState, useEffect } from 'react'
import './flottingButton.css'
import './selectButton.css'

const FlottingButton = (props) => {

    // const [isOpen, setIsOpen] = useState(true)
    // const toggle = () => setIsOpen(!isOpen)

    return (
    
    <div className='search-button'>
        <button id="search-button"> {props.btnName}</button>
    </div>

    )}

export default FlottingButton
