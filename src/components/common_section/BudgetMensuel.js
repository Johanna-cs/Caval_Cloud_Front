import React, { useState} from "react";
import { Collapse, Button} from "reactstrap";
import RadioButton from "../common/RadioButton";
import './common_section.css'


const BudgetMensuel = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="priceDiv">
        <div className="toggle_place">
          <h4>{props.budgetTitle}</h4>{" "}
        </div>
        <Button id="toggle_btn_chev" onClick={toggle}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </Button>
      </div>
      <p>
        {props.budget} {props.currency}{" "}
      </p>
      <div className="searchHorse_price2">
        <Collapse isOpen={isOpen}>
          <h5>{props.priceTitle}</h5>
          <label>
            <input
              className="mainInput"
              onChange={props.onChange}
              type="number"
              placeholder="Budget"
              
            />
          </label>
          <h5>Devise :</h5>
          <RadioButton
            radioButtonText="Euros - €"
            radioButtonName="devise"
            radioButtonId="devise1"
            radioButtonValue="€"
            onClick={props.onClick}
            checked
          />
          <RadioButton
            radioButtonText="Livre sterling - £"
            radioButtonName="devise"
            radioButtonId="devise2"
            radioButtonValue="£"
            onClick={props.onClick}
          />
          <RadioButton
            radioButtonText="Dollar - $"
            radioButtonName="devise"
            radioButtonId="devise3"
            radioButtonValue="$"
            onClick={props.onClick}
          />
        </Collapse>
      </div>
    </>
  );
};

export default BudgetMensuel;
