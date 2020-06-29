import React, { useState, useEffect } from 'react'
import './floatingButton.css'
import './selectButton.css'

const FloatingButton = (props) => {

    // const [isOpen, setIsOpen] = useState(true)
    // const toggle = () => setIsOpen(!isOpen)

    return (
    
    <div className='search-button'>
        <button id="search-button"> {props.btnName}</button>
    </div>

    )}

export default FloatingButton
