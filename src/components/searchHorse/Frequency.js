import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const Frequency = () => {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)

    return (



        <div className="searchHorse_rythme">
            <h4>Rythme de venue</h4>
            <p>Fréquence : 5 à 7 fois / semaine</p>
            <p>Régularité: jours fixes</p>
            <div>
                <Button id="toggle_btn_chev" onClick={toggle}>
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </Button>
                <Collapse isOpen={isOpen}>
                    <div>
                        <h4>Fréquence:</h4>
                        <div className="searchHorse_form-check">
                            5 à 7 fois / semaine
                            <input
                                className="searchHorse_form-check-input"
                                type="radio"
                                name="frequency"
                                id="frequency1"
                                value="option1"
                                checked
                            />
                            <label
                                className="searchHorse_form-check-label"
                                for="frequency1"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            3 à 4 fois / semaine
                            <input
                                className="searchHorse_form-check-input"
                                type="radio"
                                name="frequency"
                                id="frequency2"
                                value="option2"
                                checked
                            />
                            <label
                                className="searchHorse_form-check-label"
                                for="frequency2"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            2 fois / semaine
                            <input
                                className="searchHorse_form-check-input"
                                type="radio"
                                name="frequency"
                                id="frequency3"
                                value="option3"
                                checked
                            />
                            <label
                                className="searchHorse_form-check-label"
                                for="frequency3"
                            ></label>
                        </div>
                        <hr />
                        <div className="searchHorse_form-check">
                            1 fois / semaine
                            <input
                                className="searchHorse_form-check-input"
                                type="radio"
                                name="frequency"
                                id="frequency4"
                                value="option4"
                                checked
                            />
                            <label
                                className="searchHorse_form-check-label"
                                for="frequency4"
                            ></label>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>

    )
}

export default Frequency