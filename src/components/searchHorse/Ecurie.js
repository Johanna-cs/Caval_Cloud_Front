import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const Ecurie = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (



        <div className="searchHorse_ecuries">
                <h5>Quel est le type d'écuries ?</h5>
            <div className="ecuriesList">
                <div className="ecurie">
                    <label className="container" for="poneyclub">
                        Poney Club
                    <input className="ecurie-check" type="checkbox" id="poneyclub" name="poneyclub"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="centreequestre">
                        Centre équestre
                    <input className="ecurie-check" type="checkbox" id="centreequestre" name="centreequestre"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="ecurieProprio">
                        Ecurie du propriétaire
                    <input className="ecurie-check" type="checkbox" id="ecurieProprio" name="ecurieProprio"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="particulier">
                        Chez un particulier
                    <input className="ecurie-check" type="checkbox" id="particulier" name="particulier"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="elevage">
                        Elevage
                    <input className="ecurie-check" type="checkbox" id="elevage" name="elevage"/>
                    <span class="checkmark"></span>
                    </label>
                </div>

                <div className="ecurie">
                    <label className="container" for="ecurieAutre">
                        Autre
                    <input className="ecurie-check" type="checkbox" id="ecurieAutre" name="ecurieAutre"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
    </div>
    )}

export default Ecurie