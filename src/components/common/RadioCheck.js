import React from "react";
import "./radioCheck.css";

const RadioCheck = (props) => {
  return (
    <>
      <div className="radioCheck-list">
        <input
          type="radio"
          name="radioCheck"
          class="radioCheck"
          id="radioCheck-a"
        />
        <label for="radioCheck-a">{props.RadioCheckText1}</label>
        <input
          type="radio"
          name="radioCheck"
          class="radioCheck"
          id="radioCheck-b"
        />
        <label for="radioCheck-b">{props.RadioCheckText2}</label>
        <input
          type="radio"
          name="radioCheck"
          class="radioCheck"
          id="radioCheck-c"
        />
        <label for="radioCheck-c">{props.RadioCheckText3}</label>
        <input
          type="radio"
          name="radioCheck"
          class="radioCheck"
          id="radioCheck-d"
        />
        <label for="radioCheck-d">{props.RadioCheckText4}</label>

        <div>
          RadioCheckText1="Calme" RadioCheckText2="Dynamique"
          RadioCheckText3="Speed" RadioCheckText4="A Canaliser"
        </div>
      </div>
    </>
  );
};

export default RadioCheck;
