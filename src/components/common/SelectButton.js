import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'
import './selectButton.css'

const SelectButton = (props) => {
    
    return (
        <div>
            <Button type='checkbox' className='selectBtn' size='lg'> {props.textBtn} </Button>
        </div>
    
    )}

export default SelectButton