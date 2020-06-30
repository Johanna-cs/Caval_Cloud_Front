import React, { useState, useEffect } from 'react'
import Checkbox from '../common/Checkbox'
import { Collapse, Button, Input } from 'reactstrap'
import './common_section.css'

const Disciplines = (props) => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (


        <div className="disc">
            <h4>Disciplines</h4>
        <div className="postRider-disciplineList">
          <Checkbox CheckboxText="Obstacle" name={"Obstacle"} onChange={props.onChange} onlog={props.onlog}/>
          <Checkbox CheckboxText="Dressage" name={"Dressage"} onChange={props.onChange} />
          <Checkbox CheckboxText="CCE" name={"CCE"} onChange={props.onChange} />
          <Checkbox CheckboxText="Ethologie" name={"Ethologie"} onChange={props.onChange} />
          <Checkbox CheckboxText="Attelage" name={"Attelage"} onChange={props.onChange} />
          <Checkbox CheckboxText="TREC" name={"TREC"} onChange={props.onChange} />
        </div>
        </div>
    )
}

export default Disciplines