import React from 'react'
import RadioButton from '../common/RadioButton'
import './common_section.css'
import SlidingButton from "../common/SlidingButton";


const Frequency = (props) => {

    return (
      <>
        <div className="frequencyDiv">
            <h4>{props.frequencyTitle} </h4>
          
        </div>
        
          <div className='select_frequency'>
            <RadioButton
              radioButtonText="1 fois /semaine"
              radioButtonValue="1xsemaine"
              radioButtonName="frequency"
              radioButtonId="frequency4"
              onClick={props.onClick}
              

            />
            <RadioButton
              radioButtonText="Plus de 3 fois /semaine"
              radioButtonValue="3xsemaine"
              radioButtonName="frequency"
              radioButtonId="frequency2"
              onClick={props.onClick}
          
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