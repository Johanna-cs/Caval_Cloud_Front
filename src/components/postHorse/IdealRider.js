import React, { useState } from 'react'
import './postHorse.css'
import RangeButton from '../common/RangeButton'
import SlidingButton from '../common/SlidingButton'



const IdealRider = (props) => {

    const [yearsOfPractice, setYearsOfPractice] = useState ('')
    const [galopLevel, setGalopLevel] = useState ('')
    const [riderAge, setRiderAge] = useState('')
    const [isVehiculed, setIsVehiculed] = useState(false)
    const [isExperienced, setIsExperienced] = useState(false)



    return (
        <div className='postHorse_idealRider'>
            <h5> Années de pratique : {yearsOfPractice} ans</h5>
                    <div className='annees_pratique'>
                        <span>0</span>
                        <RangeButton 
                            min="0" 
                            max="99"
                            onChange={(e) => setYearsOfPractice(e.target.value)
                            } 
                        />
                        <span>99</span>
                    </div>
                
                <hr />
            <h5> Niveau de Galop : {galopLevel} </h5>
                <div className='niveau_galop'>
                    <span>0</span>                   
                    <RangeButton 
                        min="0" 
                        max="7" 
                        list='niveau_galop'
                        onChange={(e) => setGalopLevel(e.target.value)} 
                    />
                    <span>7</span>
                </div>
                <hr />
                <h5> Age du cavalier : {riderAge} ans</h5>
                    <div className='age_cavalier'>
                        <span>5 ans</span>
                        <RangeButton 
                            min="0" 
                            max="99"
                            onChange={(e) =>setRiderAge(e.target.value)} 
                        />
                        <span>99 ans</span>
                    </div>
                    <hr />
                    <SlidingButton
                    SlidingButtonText='Personne véhiculée' 
                    SlidingButtonID='vehiculed' 
                    onClick={() => setIsVehiculed(!isVehiculed)}
                    />
                    <SlidingButton
                    SlidingButtonText='A déjà eu un cheval sous sa responsabilité' 
                    SlidingButtonID='experience' 
                    onClick={() => setIsExperienced(!isExperienced)}
                    />
            
            <hr />




        </div>




    )
}

export default IdealRider