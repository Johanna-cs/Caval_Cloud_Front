import React, { useState, useEffect } from 'react'
import SelectButton from '../common/SelectButton'
import { Collapse, Button, Input } from 'reactstrap'

const IdealHorse = (props) => {

    return (

        <div className='searchHorse_idealHorse'>
            <div className='horse_size'>
                    <h5> Taille :</h5>
                    <input type="range" min="1" max="2,2" />
            </div>
                <hr />
            <div className='horse_temper'>
                    <h5> Tempérament :</h5>
                    <div className='select_temper'>
                        <SelectButton textBtn={'Calme'}/>
                        <SelectButton textBtn={'Dynamique'}/>
                        <SelectButton textBtn={'Speed'}/>
                        <SelectButton textBtn={'A canaliser'}/>
                    </div>
            </div>
                <hr />
            <div className='horse_caracter'>
                    <h5> Caractère :</h5>
                    <div className='select_caracter'>
                        <SelectButton textBtn={'Affectueux'}/>
                        <SelectButton textBtn={'Froid'}/>
                        <SelectButton textBtn={'Joueur'}/>
                        <SelectButton textBtn={'Sensible'}/>
                    </div>
            </div>
                <hr />
            <div className='horse_body'>
                    <h5> Physique :</h5>
                    <div className='select_body'>
                        <SelectButton textBtn={'Fin'}/>
                        <SelectButton textBtn={'Classique'}/>
                        <SelectButton textBtn={'Porteur'}/>
                        <SelectButton textBtn={'Lourd'}/>
                    </div>
            </div>
                <hr />
            <div className='horse_age'>
                    <h5> Age :</h5>
                    <span>1 an </span>
                    <input type="range" min="0" max="30" />
            </div>
        </div>

    )}

export default IdealHorse