import React from 'react'
import Checkbox from '../common/Checkbox'

const Ecurie = () => {

      
    return (



        <div className="searchHorse_ecuries">
                <h5>Quel est le type d'écuries ?</h5>
            <div className="ecuriesList">
            <Checkbox CheckboxText="Poney Club" />
            <Checkbox CheckboxText="Centre équestre" />
            <Checkbox CheckboxText="Ecurie du propiétaire" />
            <Checkbox CheckboxText="Chez un particulier" />
            <Checkbox CheckboxText="Elevage" />
            <Checkbox CheckboxText="Autre" />

            </div>
    </div>
    )}

export default Ecurie