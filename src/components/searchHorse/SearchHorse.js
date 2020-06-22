import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './searchHorse.css'
import { Collapse, Button, Input } from 'reactstrap'
import Localisation from './Localisation'
import Disciplines from './Disciplines'
import Structures from './Structures'
import IdealHorse from './IdealHorse'
import IdealOwner from './IdealOwner'
import BudgetMensuel from './BudgetMensuel'
import Ecurie from './Ecurie'
import HebergementHorse from './HebergementHorse'
import FlottingButton from '../common/FlottingButton'


const SearchHorse = (props) => {

    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div className='searchHorse_page'>
                <Localisation />
            <hr />
                <BudgetMensuel />
            <hr />
                <Disciplines />
            <hr />
                <Structures />
            <hr />
            <div className='searchHorse_bal'>
                <h4>Balade</h4>
                <div className='balade'>
                    <p>J'aimerais pouvoir partir en balade</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <hr />
                <h4>Cheval idéal</h4>
                <IdealHorse />
            <hr />
                <h4>Propriétaire idéal</h4>
                <IdealOwner />
            <hr />
            <h4>Ecuries et moniteur </h4>
                <Ecurie />
            <hr />
                <HebergementHorse />
            <hr />
            <div className='searchHorse_coaching'>
                <h4>Coaching</h4>
                <div className='coaching'>
                    <p>Sur place</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div className='coaching'>
                    <p>Intervenant exterieur</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <hr />

            <hr />
            <div className='searchHorse_materiel'>
                <h4>Materiel</h4>
                <div className='materiel'>
                    <p>J'ai ma selle</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
                <div className='materiel'>
                    <p>J'ai mon materiel de soin </p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <hr />
            <div className='searchHorse_compet'>
                <h4>Concours</h4>
                <div className='competiton'>
                    <p>J'aimerais pouvoir sortir en concours</p>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>

                <FlottingButton btnName={'Lancer la recherche'}/>

        </div>
    )
}

export default SearchHorse 