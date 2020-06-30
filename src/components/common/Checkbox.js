import React from "react";
import "./checkbox.css";

const Checkbox = (props) => {
  return (
    <>
      <div className="checkboxList">
        <div className="checkboxObject">
          <label className="container" for={props.CheckboxText}>
            {props.CheckboxText}
            <input
              className="checkboxInput"
              type="checkbox"
              id={props.CheckboxText}
              name={props.CheckboxText}
              onChange={props.onChange}
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Checkbox;
