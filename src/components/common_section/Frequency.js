import React, {useState} from 'react'
import { Collapse, Button} from 'reactstrap'
import RadioButton from '../common/RadioButton'
import './common_section.css'
import SlidingButton from "../common/SlidingButton";
//1 à 2 fois / 3 à 4 fois / 5 à 7 fois

const Frequency = (props) => {

    return (
      <>
        <div className="frequencyDiv">
            <h4>{props.frequencyTitle} </h4>
          
        </div>
        
          <div className='select_frequency'>
            <RadioButton
              radioButtonText="1 fois /semaine"
              radioButtonValue="1 fois /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency4"
              onClick={props.onClick}
              radioButtonValue="1 fois /semaine"

            />
            <RadioButton
              radioButtonText="Plus de 3 fois /semaine"
              radioButtonValue="3 /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency2"
              onClick={props.onClick}
              radioButtonValue="Plus de 3 fois /semaine"
            />
          </div>
          <h5>Régularité :</h5>
          <SlidingButton
            SlidingButtonText="Jours fixes"
            SlidingButtonID="fixedDaysSwitch"
            onClick={props.changeFixedFrequency}
          />
        
      </>
    );
}

export default Frequency