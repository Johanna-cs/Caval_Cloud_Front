import React, { useState } from 'react'
import SelectButton from '../common/SelectButton'
import RadioCheck from '../common/RadioCheck'
import RangeButton from '../common/RangeButton'
import RadioButton from '../common/RadioButton'
import Frequency from '../common_section/Frequency'


const IdealOwner = (props) => {

    // age du proprietaire
    const [ageOwner, setAgeOwner] = useState(null)

    // Fréquence :
    const [frequency, setFrequency] = useState('')

    // Fréquence jours fixes :
    const [fixedFrequency, setFixedFrequency] = useState(false)

    const [horseWork, setHorseWork] = useState('')

    return (

<>

        <div className='searchHorse_idealOwner'>
            <div className='owner_age'>
                    <h5> Age : {ageOwner} ans</h5>
                    <span>10 ans</span>
                    <RangeButton 
                        id='ageOwner'
                        min='10'
                        max='99'
                        radioSelBtnId='ageOwner'
                        onChange={(e) => setAgeOwner(e.target.value)
                    }/>
                    <span>99 ans</span>
            </div>
                <hr />
            <div className='rider_caracter'>
                    <h5> Caractère :</h5>
                <div className='select_caracter'>
                    <RadioCheck 
                    RadioCheckText1='Introverti'
                    radioCheckId1='introverti' 
                    
                    RadioCheckText2='Sociable'
                    radioCheckId2='sociable'

                    RadioCheckText3='Extraverti'
                    radioCheckId3='extraverti' 

                    RadioCheckText4='Solitaire'
                    radioCheckId4='solitaire' />

                    
                </div>
            </div>
                <hr />
            <div className='rider_communication'>
                <h5> Fréquence de communication :</h5>
                    <div className='select_communication'>
                    <Frequency 
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}/>
                    
                </div>
             </div>
                <hr />
            <div className='rider_horseWork'>
                <h5> Travail du cheval :</h5>
                    <div className='select_horseWork'>
                        <RadioButton radioButtonText="Ouvert à la nouveauté" 
                        radioButtonId='openToNew' radioButtonName='horseWork' radioButtonValue='Ouvert à la nouveauté'
                        onClick={(e) => setHorseWork(e.target.value)}
                        horseWork={horseWork}/>

                        <RadioButton radioButtonText="Normal" 
                        radioButtonId='normal' radioButtonName='horseWork' radioButtonValue='Normal'
                        onClick={(e) => setHorseWork(e.target.value)}
                        horseWork={horseWork}/>

                        <RadioButton radioButtonText="Cadré" 
                        radioButtonId='cadre' radioButtonName='horseWork' radioButtonValue='Cadré'
                        onClick={(e) => setHorseWork(e.target.value)}
                        horseWork={horseWork}/>
                    </div>
            </div>
        </div>
        </>
    )}

export default IdealOwner