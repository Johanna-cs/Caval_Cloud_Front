import React from "react";
import "./radioCheck.css";

const RadioCheck = (props) => {
  return (
    <>
      <div className="radioCheck-list">
        <div className="row1">
          <input type="checkbox" class="radioCheck" id={props.radioCheckId1} name={props.RadioCheckText1} />
          <label for={props.radioCheckId1}>{props.RadioCheckText1} </label>

          <input type="checkbox" class="radioCheck" id={props.radioCheckId2} name={props.RadioCheckText2}/>
          <label for={props.radioCheckId2}>{props.RadioCheckText2}</label>
        </div>
        <div className="row2">
          <input type="checkbox" class="radioCheck" id={props.radioCheckId3} name={props.RadioCheckText3} />
          <label for={props.radioCheckId3}>{props.RadioCheckText3}</label>
          
          <input type="checkbox" class="radioCheck" id={props.radioCheckId4} name={props.rRadioCheckText4} />
          <label for={props.radioCheckId4}>{props.RadioCheckText4}</label>
        </div>
      </div>
    </>
  );
};

export default RadioCheck;
