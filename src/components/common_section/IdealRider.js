import React from 'react'
import './common_section.css'
import RangeButton from '../common/RangeButton'
import SlidingButton from '../common/SlidingButton'



const IdealRider = (props) => {



    return (
        <div className='idealRider'>
            <h5> Années de pratique : {props.yearPractice} ans</h5>
                    <div className='divRangeSpan'>
                        <span>1 an</span>
                        <RangeButton 
                            min="0" 
                            max="50"
                            onChange={props.changePractice} 
                        />
                        <span>50 ans</span>
                    </div>
                
                <hr />
            <h5> Niveau de Galop : {props.gallopLevel} </h5>
                <div className='divRangeSpan'>
                    <span>0</span>                   
                    <RangeButton 
                        min="0" 
                        max="7" 
                        list='niveau_galop'
                        onChange={props.changeGallop} 
                    />
                    <span>7</span>
                </div>
                <hr />
                <h5> Age du cavalier : {props.ageRider} ans</h5>
                    <div className='divRangeSpan'>
                        <span>5 ans</span>
                        <RangeButton 
                            min="5" 
                            max="99"
                            onChange={props.changeAgeRider} 
                        />
                        <span>99 ans</span>
                    </div>
                    <hr />
                    <SlidingButton
                    SlidingButtonText='Personne véhiculée' 
                    SlidingButtonID='vehiculed' 
                    onClick={props.isVehiculed}
                    />
                    <SlidingButton
                    SlidingButtonText='A déjà eu un cheval sous sa responsabilité' 
                    SlidingButtonID='experience' 
                    onClick={props.hasManaged}
                    />
            
            <hr />




        </div>




    )
}

export default IdealRider