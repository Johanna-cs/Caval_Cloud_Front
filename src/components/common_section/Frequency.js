import React, {useState} from 'react'
import { Collapse, Button} from 'reactstrap'
import RadioButton from '../common/RadioButton'
import './common_section.css'
import SlidingButton from "../common/SlidingButton";


const Frequency = (props) => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
      <>
        <div className="frequencyDiv">
            <h4>{props.frequencyTitle} </h4>
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
        </div>
        <Collapse isOpen={isOpen}>
        <h5>Fréquence :</h5>
          <div className='select_frequency'>
            <RadioButton
              radioButtonText="5 à 7 fois /semaine"
              radioButtonValue="5 à 7 fois /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency1"
              onClick={props.onClick}
              radioButtonValue="5 à 7 fois /semaine"

            />
            <RadioButton
              radioButtonText="3 à 4 fois /semaine"
              radioButtonValue="3 à 4 fois /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency2"
              onClick={props.onClick}
              radioButtonValue="3 à 4 fois /semaine"
            />
            <RadioButton
              radioButtonText="2 fois /semaine"
              radioButtonValue="2 fois /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency3"
              onClick={props.onClick}
              radioButtonValue="2 fois /semaine"
            />
            <RadioButton
              radioButtonText="1 fois /semaine"
              radioButtonValue="1 fois /semaine"
              radioButtonName="frequency"
              radioButtonId="frequency4"
              onClick={props.onClick}
            />
          </div>
          <h5>Régularité :</h5>
          <SlidingButton
            SlidingButtonText="Jours fixes"
            SlidingButtonID="fixedDaysSwitch"
            onClick={props.changeFixedFrequency}
          />
        </Collapse>
      </>
    );
}

export default Frequency