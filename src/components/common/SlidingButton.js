import React from "react";
import "./slidingButton.css";


const SlidingButton = (props) =>{
  return (
    <div className='slidingBtn_zone'>
      <div className="slidingButton-check">
        {props.SlidingButtonText}
        <div className="slidingButton-check">
          <input
            type="checkbox"
            className="custom-control-input"
            id={props.SlidingButtonID}
            name={props.SlidingButtonID}
            onClick={props.onClick}
          />
          <label
            className="custom-control-label"
            for={props.SlidingButtonID}
          ></label>
        </div>
      </div>
    </div>
  );
}

export default SlidingButton;
