import React from 'react'
import RadioButton from '../common/RadioButton'
import './common_section.css'



const Competition = (props) => {

   

    return (
      <>
        <div className="competDiv">
            <h4>Concours </h4>
          
        </div>
        
          <div className='select_compet'>
            <RadioButton
              radioButtonText="Possible"
              radioButtonValue="Possible"
              radioButtonName="competition"
              radioButtonId="compet1"
              onClick={props.onClick}
            />
            <RadioButton
              radioButtonText="Obligatoire"
              radioButtonValue="Obligatoire"
              radioButtonName="competition"
              radioButtonId="compet2"
              onClick={props.onClick}
            />
            <RadioButton
              radioButtonText="Non"
              radioButtonValue="Non"
              radioButtonName="competition"
              radioButtonId="compet3"
              onClick={props.onClick}
            />
          </div>
          
        
      </>
    );
}

export default Competition