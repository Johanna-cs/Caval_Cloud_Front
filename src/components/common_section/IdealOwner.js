import React from "react";
import RadioCheck from "../common/RadioCheck";
import RangeButton from "../common/RangeButton";
import RadioButton from "../common/RadioButton";
import Frequency from "./Frequency";
import './common_section.css'

const IdealOwner = (props) => {


  return (
    <>
      <div className="idealOwner">
        <div className="owner_age">
          <h5> Age <span>(+/- 3ans)</span>: {props.ageOwner} ans</h5>
          <div className='divRangeSpan'>
          <span>10 ans</span>
          <RangeButton
            id="ageOwner"
            min="10"
            max="99"
            radioSelBtnId="ageOwner"
            onChange={props.selectAge}
          />
          <span>99 ans</span>
          </div>
        </div>
        <hr />
        <div className="rider_caracter">
          <h5> Caractère :</h5>
          <div className="select_caracter">
            <RadioCheck
              RadioCheckText1="Introverti"
              radioCheckId1="introverti"
              RadioCheckText2="Sociable"
              radioCheckId2="sociable"
              RadioCheckText3="Extraverti"
              radioCheckId3="extraverti"
              RadioCheckText4="Solitaire"
              radioCheckId4="solitaire"
            />
          </div>
        </div>
        <hr />
        <div className="rider_communication">
          <h5> Fréquence de communication :</h5>
          <div className="select_communication">
            <Frequency
              onClick={props.selectFrequency}
              frequency={props.frequency}
              changeFixedFrequency={props.fixedDay}
            />
          </div>
        </div>
        <hr />
        <div className="rider_horseWork">
          <h5> Travail du cheval :</h5>
          <div className="select_horseWork">
            <RadioButton
              radioButtonText="Ouvert à la nouveauté"
              radioButtonId="openToNew"
              radioButtonName="horseWork"
              radioButtonValue="Ouvert à la nouveauté"
              onClick={props.selectHorseWork}
              horseWork={props.horseWork}
            />

            <RadioButton
              radioButtonText="Normal"
              radioButtonId="normal"
              radioButtonName="horseWork"
              radioButtonValue="Normal"
              onClick={props.selectHorseWork}
              horseWork={props.horseWork}
            />

            <RadioButton
              radioButtonText="Cadré"
              radioButtonId="cadre"
              radioButtonName="horseWork"
              radioButtonValue="Cadré"
              onClick={props.selectHorseWork}
              horseWork={props.horseWork}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default IdealOwner;
