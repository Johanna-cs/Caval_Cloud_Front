import React from 'react'
import { Button } from 'reactstrap'
import './selectButton.css'

const SelectButton = (props) => {
    
    return (
        <div>
            <Button type='checkbox' className='selectBtn' size='lg'> 
                {props.textBtn} 
            </Button>
        </div>
    
    )}

export default SelectButton