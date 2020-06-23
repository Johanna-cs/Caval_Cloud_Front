import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const Structures = () => {
    
    return (
        
        
        <div className='searchHorse_struc'>
            <h4>Structure à disposition </h4>
            <div className='structureList'>
                <div className='structure'>
                    <label class="container"  for="longe">
                        Rond de longe
                    <input className="structure-check" type="checkbox" id="longe" name="longe" />
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className='structure'>
                    <label class="container"  for="carriere">
                        Carrière
                    <input className="structure-check" type="checkbox" id="carriere" name="carriere"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className='structure'>
                    <label class="container" for="manege">
                        Manège couvert
                    <input className="structure-check" type="checkbox" id="manege" name="manege"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className='structure'>
                    <label class="container" for="champs">
                        Champs
                    <input className="structure-check" type="checkbox" id="champs" name="champs"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className='structure'>
                    <label class="container" for="piste">
                        Piste de trotting
                    <input className="structure-check" type="checkbox" id="piste" name="piste"/>
                    <span class="checkmark"></span>
                    </label>
                </div>
                <div className='structure'>
                    <label class="container" for="check">
                        Chemins de balade
                    <input className="structure-check" type="checkbox" className="check" id="check" />
                    <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    )}

export default Structures