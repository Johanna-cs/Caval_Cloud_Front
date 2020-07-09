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
              radioButtonValue="possible"
              radioButtonName="competition"
              radioButtonId="compet1"
              onClick={props.onClick}
            />
            <RadioButton
              radioButtonText="Obligatoire"
              radioButtonValue="mandatory"
              radioButtonName="competition"
              radioButtonId="compet2"
              onClick={props.onClick}
            />
            <RadioButton
              radioButtonText="Non"
              radioButtonValue="no"
              radioButtonName="competition"
              radioButtonId="compet2"
              onClick={props.onClick}
            />
          </div>
          
        
      </>
    );
}

export default Competition