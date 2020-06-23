import React from "react";
import "./radioCheck.css";

const RadioCheck = (props) => {
  return (
    <>
      <div className="radioCheck-list">
        <input type="checkbox" class="radioCheck" id="radioCheck1" />
        <label for="radioCheck1">{props.RadioCheckText1}</label>
        <input type="checkbox" class="radioCheck" id="radioCheck2" />
        <label for="radioCheck2">{props.RadioCheckText2}</label>
        <input type="checkbox" class="radioCheck" id="radioCheck3" />
        <label for="radioCheck3">{props.RadioCheckText3}</label>
        <input type="checkbox" class="radioCheck" id="radioCheck4" />
        <label for="radioCheck4">{props.RadioCheckText4}</label>
      </div>
    </>
  );
};

export default RadioCheck;
