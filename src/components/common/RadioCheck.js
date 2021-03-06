import React from "react";
import "./radioCheck.css";

const RadioCheck = (props) => {
  return (
    <>
      <div className="radioCheck-list">
        <div className="row1">
          <input
            type="checkbox"
            className="radioCheck"
            id={props.radioCheckId1}
            name={props.RadioCheckText1}
            onClick={props.onClick}
          />
          <label htmlFor={props.radioCheckId1}>{props.RadioCheckText1} </label>

          <input
            type="checkbox"
            className="radioCheck"
            id={props.radioCheckId2}
            name={props.RadioCheckText2}
            onClick={props.onClick}
          />
          <label htmlFor={props.radioCheckId2}>{props.RadioCheckText2}</label>
        </div>
        <div className="row2">
          <input
            type="checkbox"
            className="radioCheck"
            id={props.radioCheckId3}
            name={props.RadioCheckText3}
            onClick={props.onClick}
          />
          <label htmlFor={props.radioCheckId3}>{props.RadioCheckText3}</label>

          <input
            type="checkbox"
            className="radioCheck"
            id={props.radioCheckId4}
            name={props.rRadioCheckText4}
            onClick={props.onClick}
          />
          <label htmlFor={props.radioCheckId4}>{props.RadioCheckText4}</label>
        </div>
      </div>
    </>
  );
};

export default RadioCheck;
