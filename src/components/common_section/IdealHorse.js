import React from 'react'
import RadioCheck from '../common/RadioCheck'
import RangeButton from '../common/RangeButton'
import './common_section.css'


const IdealHorse = (props) => {

    

    return (

        <div className='idealHorse'>
            <div className='horse_size'>
                <h5> Taille : {props.horseSize} cm</h5>
                <div className='divRangeSpan'>
                    <span>80cm</span>
                    <RangeButton 
                        min='80'
                        max='200'
                        radioRangeBtnId='horseSize'
                        onChange={props.changeSize}

                        />
                    <span>200cm</span>
                </div>
            </div>
                <hr />
            <div className='horse_temper'>
                    <h5> Tempérament :</h5>
                    <div className='select_temper'>
                    <RadioCheck 
                        RadioCheckText1='Calme'
                        radioCheckId1='Calme'
                        RadioCheckText2='Dynamique'
                        radioCheckId2='Dynamique'
                        RadioCheckText3='Speed'
                        radioCheckId3='Speed'
                        RadioCheckText4='A canaliser'
                        radioCheckId4='A canaliser' />
                    </div>
            </div>
                <hr />
            <div className='horse_caracter'>
                    <h5> Caractère :</h5>
                    <div className='select_caracter'>
                    <RadioCheck 
                        RadioCheckText1={'Affectueux'}
                        radioCheckId1={'affectueux'} 
                        RadioCheckText2={'Froid'}
                        radioCheckId2={'froid'}
                        RadioCheckText3={'Joueur'}
                        radioCheckId3={'joueur'} 
                        RadioCheckText4={'Sensible'}
                        radioCheckId4={'sensible'} />
                    </div>
            </div>
                <hr />
            <div className='horse_body'>
                    <h5> Physique :</h5>
                    <div className='select_body'>
                    <RadioCheck 
                        RadioCheckText1={'Fin'}
                        radioCheckId1={'fin'} 
                        RadioCheckText2={'Classique'}
                        radioCheckId2={'classique'}
                        RadioCheckText3={'Porteur'}
                        radioCheckId3={'porteur'} 
                        RadioCheckText4={'Lourd'}
                        radioCheckId4={'lourd'} />
                    </div>
            </div>
                <hr />
            <div className='horse_age'>
            <h5> Age du cheval <span>(+/- 3ans)</span> : {props.ageHorse} ans</h5>
            <div className='divRangeSpan'>
                    <span>1 an</span>
                    <RangeButton 
                        id='ageHorse'
                        min='1'
                        max='30'
                        radioRangeBtnId='ageHorse'
                        onChange={props.changeAge}/>
                    <span>30 ans</span>
                </div>
            </div>
            </div>
        

    )}

export default IdealHorse