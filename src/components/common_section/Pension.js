import React from 'react'
import RadioButton from '../common/RadioButton'
import './common_section.css'
import SlidingButton from "../common/SlidingButton";
//1 à 2 fois / 3 à 4 fois / 5 à 7 fois

const Pension = (props) => {

    return (
      <>
        <div className="frequencyDiv">
            <h4>Rythme de la demi-pension</h4>
          
        </div>
        
          <div className='select_frequency'>
            <RadioButton
              radioButtonText="1 à 2 fois /semaine"
              radioButtonValue="1xsemaine"
              radioButtonName="frequency"
              radioButtonId="frequency1"
              onClick={props.onClick}
            />

            <RadioButton
              radioButtonText="3 à 4 fois /semaine"
              radioButtonValue="3xsemaine"
              radioButtonName="frequency"
              radioButtonId="frequency2"
              onClick={props.onClick}
              />

            <RadioButton
              radioButtonText="5 à 7 fois /semaine"
              radioButtonValue="5xsemaine"
              radioButtonName="frequency"
              radioButtonId="frequency3"
              onClick={props.onClick}
            />

          </div>
          <h5>Jours de venue</h5>
          <SlidingButton
            SlidingButtonText="Les mêmes jours d'une semaine sur l'autre"
            SlidingButtonID="fixedDaysSwitch"
            onClick={props.changeFixedFrequency}
          />
        
      </>
    );
}

export default Pension