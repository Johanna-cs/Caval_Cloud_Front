import React, { useState, useEffect } from 'react'
import Checkbox from '../common/Checkbox'
import { Collapse, Button, Input } from 'reactstrap'

const Disciplines = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (


        <div className="postRider-disc">
            <h4>Disciplines</h4>
        <div className="postRider-disciplineList">
          <Checkbox CheckboxText="Obstacle" />
          <Checkbox CheckboxText="Dressage" />
          <Checkbox CheckboxText="CCE" />
          <Checkbox CheckboxText="Ethologie" />
          <Checkbox CheckboxText="Attelage" />
          <Checkbox CheckboxText="TREC" />
        </div>
        </div>
    )
}

export default Disciplines