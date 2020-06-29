import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'
import RadioButton from '../common/RadioButton'
import './common_section.css'

const BudgetMensuel = () => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
  const [budget, setBudget] = useState("0");
  const [devise, setDevise] = useState("€");
    return (
      <>
        <div className="mensuel_price">
          <div className="toggle_place">
            <h4> Prix </h4>
            <p>
              {budget} {devise} /mois
            </p>
          </div>
          <Button
            id="toggle_btn_chev"
            color="transparent"
            onClick={toggle}
            style={{ marginBottom: "1rem" }}
          >
            <svg
              class="bi bi-chevron-down"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </Button>
        </div>
        <div className="mensuel_price2">
          <Collapse isOpen={isOpen}>
            <h5>Prix mensuel maximum :</h5>
            <label>
              <input
                className="mainInput"
                type="number"
                placeholder="Budget par mois"
                onChange={(event) => setBudget(event.target.value)}
              />
            </label>
            <h5>Devise:</h5>

            <RadioButton
              radioButtonText="Euros - €"
              radioButtonName="devise"
              radioButtonId="devise1"
              onClick={() => setDevise("€")}
            />
            <RadioButton
              radioButtonText="Livre sterling - £"
              radioButtonName="devise"
              radioButtonId="devise2"
              onClick={() => setDevise("£")}
            />
            <RadioButton
              radioButtonText="Dollar - $"
              radioButtonName="devise"
              radioButtonId="devise3"
              onClick={() => setDevise("$")}
            />
          </Collapse>
        </div>
      </>
    );}

export default BudgetMensuel