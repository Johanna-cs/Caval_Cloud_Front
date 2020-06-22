import React from "react";
import "./slidingButton.css";


const SlidingButton = (props) =>{
  return (
    <>
      <div className="slidingButton-check">
        {props.SlidingButtonText}
        <div className="slidingButton-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.SlidingButtonID}
          />
          <label
            className="custom-control-label"
            for={props.SlidingButtonID}
          ></label>
        </div>
      </div>
    </>
  );
}

export default SlidingButton;