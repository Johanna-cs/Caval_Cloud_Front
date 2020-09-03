import React from "react";
import "./checkbox.css";

const Checkbox = (props) => {
  return (
    <>
      <div className="checkboxList">
        <div className="checkboxObject">
          <label className="container" htmlFor={props.CheckboxText}>
            {props.CheckboxText}
            <input
              className="checkboxInput"
              type="checkbox"
              id={props.CheckboxText}
              name={props.CheckboxText}
              value={props.CheckboxValue}
              onClick={props.onClick}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
