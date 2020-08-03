import React from "react";
import "./radioButton.css";

const RadioButton = (props) => {
  return (
    <>
      <div className="radioButton-check">
        {props.radioButtonText}
        <input
          className="radioButton-check-input"
          type="radio"
          name={props.radioButtonName}
          id={props.radioButtonId}
          value={props.radioButtonValue}
          onChange={props.onClick}
        />
        <label className="radioButton-check-label" htmlFor={props.radioButtonId}></label>
      </div>
      <hr />
    </>
  )
}

export default RadioButton;
