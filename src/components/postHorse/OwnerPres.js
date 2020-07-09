import React, { useState } from 'react'
import './postHorse.css'
import Header from '../Header_footer/Header'
import RangeButton from '../common/RangeButton'
import SelectButton from '../common/SelectButton'
import Frequency from '../common_section/Frequency'
import RadioButton from '../common/RadioButton'

const OwnerPres = (props) => {
    // Prénom du proprietaire
    const [prenom, setPrenom] = useState('')
    // age du proprietaire
    const [ageOwner, setAgeOwner] = useState('')
    // mots de présentation
    const [message, setMessage] = useState('')
    // Fréquence 
    const [frequency, setFrequency] = useState('')
    // Fréquence jours fixes 
    const [fixedFrequency, setFixedFrequency] = useState(false)
    // travail du cheval
    const [horseWork, setHorseWork] = useState('')

    return (
        <div>
        <Header className='header' title='A PROPOS DE VOUS' />
        <div className='OwnerPres_page'>
            <h4> A propos de vous </h4>
            <form className="postHorse-form">
          <label>
            <input
              className="postHorse_input"
              type="text"
              placeholder="Votre prénom"
              onChange={(event) => setPrenom(event.target.value)}
              autoFocus
            />
          </label>
        </form>
            <div className='owner_age'>
            <h5> Votre age : {ageOwner} ans</h5>
                    <span>4 ans</span>
                    <RangeButton 
                        id='ageOwner'
                        min='4'
                        max='99'
                        radioRangeBtnId='ageOwner'
                        onChange={(e) => setAgeOwner(e.target.value)
                    }/>
                    <span>99 ans</span>
            </div>
            <hr />
            <h5>Message :</h5>
                <form className="postHorse_msg">
                <label>
                    <textarea
                    className="postHorse_input"
                    type="text"
                    placeholder="Ajoutez quelques mots"
                    onChange={(event) => setMessage(event.target.value)}
                    />
                </label>
                </form>
        <hr />
            <div className='owner_caracter'>
                    <h5> Caractère :</h5>
                    <div className='select_caracter'>
                    <SelectButton
                        radioSelBtnId='Introverti'
                        radioSelBtnValue='Introverti'
                        radioSelBtnName='caracterOwner'
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Sociable'
                        radioSelBtnValue='Sociable'
                        radioSelBtnName='caracterOwner'
                        onClick={props.onClick} />

                    <SelectButton
                        radioSelBtnId='Extraverti'
                        radioSelBtnValue='Extraverti'
                        radioSelBtnName='caracterOwner'
                        onClick={props.onClick} />

                    <SelectButton   
                        radioSelBtnId='Solitaire'
                        radioSelBtnValue='Solitaire'
                        radioSelBtnName='caracterOwner'
                        onClick={props.onClick}  />
                    </div>
            </div>
            <hr />
            <div className='owner_communication'>
                    <div className='select_communication'>
                    <Frequency 
                    frequencyTitle='Fréquence de communication :'
                    onClick={(e) => setFrequency(e.target.value)}
                    frequency={frequency}
                    changeFixedFrequency={() => setFixedFrequency(!fixedFrequency)}/>
                    
                </div>
             </div>
                <hr />
                <div className='owner_horseWork'>
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

        </div>


    )
}

export default OwnerPres