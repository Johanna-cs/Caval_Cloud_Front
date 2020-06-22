import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const HebergementHorse = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return ( 
        
        
        
        
        <div className="searchHorse_hebergt">
            <h5>Comment est hebergé le cheval ? </h5>
                    <div className="hebergtList">
                        <div className="hebergt">
                            <label className="container" for="poneyclub">
                                Boxe
                            <input className="hebergt-check" type="checkbox" id="poneyclub" name="poneyclub"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                        
                        <div className="hebergt">
                            <label className="container" for="centreequestre">
                                Paddock
                            <input className="hebergt-check" type="checkbox" id="centreequestre" name="centreequestre"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>

                        <div className="hebergt">
                            <label className="container" for="ecurieProprio">
                                Stabulation
                            <input className="hebergt-check" type="checkbox" id="ecurieProprio" name="ecurieProprio"/>
                            <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
        </div>

    )}

export default HebergementHorse