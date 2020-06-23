import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const Disciplines = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (


            <div className="searchHorse_disc">
                        <h4>Disciplines</h4>
                    <div className="disciplineList">
                        <div className="discipline">
                            <label className="container" for="obstacle">
                                Obstacle
                            <input className="discipline-check" type="checkbox" id="obstacle" name="obstacle"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="discipline">
                            <label class="container" for="dressage">
                                Dressage
                            <input className="discipline-check" type="checkbox" id="dressage" name="dressage"/>
                            <span className="checkmark"></span>
                            </label>
                        </div>

                        <div className="discipline">
                            <label class="container" for="cce">
                                CCE
                            <input className="discipline-check" type="checkbox" id="cce" name="cce"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="discipline">
                            <label class="container" for="ethologie">
                                Ethologie
                            <input className="discipline-check" type="checkbox" id="ethologie" name="ethologie"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="discipline">
                            <label class="container" for="attelage">
                                Attelage
                            <input className="discipline-check" type="checkbox" id="attelage" name="attelage"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="discipline">
                            <label class="container" for="trec">
                                TREC
                            <input className="discipline-check" type="checkbox" id="trec" name="trec"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
            </div>
    )
}

export default Disciplines