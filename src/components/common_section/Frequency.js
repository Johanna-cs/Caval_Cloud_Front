import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'
import RadioButton from '../common/RadioButton'
import './common_section.css'
import SlidingButton from "../common/SlidingButton";

import { geoPropTypes } from 'react-geolocated'

const Frequency = (props) => {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)

    return (
      <>
        <div className="frenquencyDiv">
          <div className="toggle_place">
            <h4>{props.frequencyTitle} </h4>
          </div>
          <Button id="toggle_btn_chev" onClick={toggle}>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
          <p>Fréquence : 5 à 7 fois /semaine</p>
          <p>Régularité : jours fixes</p>
        </div>
        <Collapse isOpen={isOpen}>
          <div>
            <h5>Fréquence </h5>
            <RadioButton
              radioButtonText="5 à 7 fois / semaine"
              radioButtonName="7timesWeek"
              radioButtonId="7timesWeek"
            />
            <RadioButton
              radioButtonText="3 à 4 fois / semaine"
              radioButtonName="4timesWeek"
              radioButtonId="4timesWeek"
            />
            <RadioButton
              radioButtonText="2 fois / semaine"
              radioButtonName="2timesWeek"
              radioButtonId="2timesWeek"
            />
            <RadioButton
              radioButtonText="1 fois / semaine"
              radioButtonName="1timesWeek"
              radioButtonId="1timesWeek"
            />
          </div>
          <h5>Régularité:</h5>
          <SlidingButton
            SlidingButtonText="Jours fixes"
            SlidingButtonID="fixedDaysSwitch"
          />
        </Collapse>
      </>
    );
}

export default Frequency