import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const BudgetMensuel = (props) => {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen(!isOpen)
    return (

        <div className='searchHorse_price' >
                <h4> Prix </h4>
        <p>{props.budget} {props.currency} /mois </p>
                <Button id='toggle_btn_chev'color="transparent" onClick={toggle} style={{ marginBottom: '1rem' }}><svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg></Button>
                <div className='searchHorse_price2'>
                <Collapse isOpen={isOpen}>
                  <h5>Prix mensuel maximum:</h5>
                    <label>
                      <input className="mainInput" 
                        onChange={props.onChange} 
                        type="number" 
                        placeholder="Budget" 
                        
                      />
                    </label>
                  <h5>Devise:</h5>
                  <div className="searchHorse_form-check">
                    Euros - €
                    <input className="searchHorse_form-check-input" 
                      type="radio" 
                      name="devise" 
                      id="selectEur" 
                      value="€" 
                      onClick={props.onClick}
                    />
                    <label className="searchHorse_form-check-label" for="selectEur"/>
                  </div>
                  <hr />
                  <div className="searchHorse_form-check">
                    Livre sterling - £
                    <input className="searchHorse_form-check-input" 
                      type="radio" 
                      name="devise" 
                      id="selectLiv" 
                      value="£"
                      onClick={props.onClick}
                    />
                    <label className="searchHorse_form-check-label" for="selectLiv"/>
                  </div>
                  <hr />
                  <div className="searchHorse_form-check">
                    Dollar - $
                    <input className="searchHorse_form-check-input" 
                      type="radio" 
                      name="devise" 
                      id="selectDol" 
                      value="$"
                      onClick={props.onClick}
                    />
                    <label className="searchHorse_form-check-label" for="selectDol"/>
                  </div>
                    </Collapse>
                </div>
        </div>
    )}

export default BudgetMensuel