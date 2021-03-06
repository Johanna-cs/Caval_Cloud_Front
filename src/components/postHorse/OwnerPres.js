import React, { useContext } from 'react'
import './postHorse.css'
// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import FloatingButton from "../common/FloatingButton";
import Header from '../Header_footer/Header'
import RangeButton from '../common/RangeButton'
import SelectButton from '../common/SelectButton'
import Frequency from '../common_section/Frequency'
import RadioButton from '../common/RadioButton'
import { HorseContext } from '../context/HorseContext';


const OwnerPres = (props) => {

    // Call to the HorseProfile context to get and set information regarding the horse Owner biography
    const { horseProfile, setHorseProfile } = useContext(HorseContext)


    return (
        <div>
        <Header className='header' title='A propos de moi' />
        <div className='OwnerPres_page'>
            
            <form className="postHorse-form">
          <label>
            <input
              className="postHorse_input"
              type="text"
              placeholder="Votre prénom"
              onChange={(event) => setHorseProfile({...horseProfile, owner_firstname : event.target.value}) }
              autoFocus
            />
          </label>
        </form>
            <div className='owner_age'>
            <h5> Votre age : {horseProfile.owner_age} ans</h5>
            <div className='divRangeSpan'>
                    <span>4 ans</span>
                    <RangeButton 
                        id='ageOwner'
                        min='4'
                        max='99'
                        radioRangeBtnId='ageOwner'
                        onChange={(event) => setHorseProfile({...horseProfile, owner_age : event.target.value}) }
                        />
                    <span>99 ans</span>
                    </div>
            </div>
            <hr />
            
            <div className='owner_caracter'>
                    <h5> Caractère :</h5>
                    <div className='select_caracter'>
                    <SelectButton
                        radioSelBtnId='Introverti'
                        radioSelBtnValue='Introverti'
                        radioSelBtnName='caracterOwner'
                        onClick={(e) => setHorseProfile({...horseProfile, owner_caracter : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Sociable'
                        radioSelBtnValue='Sociable'
                        radioSelBtnName='caracterOwner'
                        onClick={(e) => setHorseProfile({...horseProfile, owner_caracter : e.target.value}) }
                    />

                    <SelectButton
                        radioSelBtnId='Extraverti'
                        radioSelBtnValue='Extraverti'
                        radioSelBtnName='caracterOwner'
                        onClick={(e) => setHorseProfile({...horseProfile, owner_caracter : e.target.value}) }
                    />

                    <SelectButton   
                        radioSelBtnId='Solitaire'
                        radioSelBtnValue='Solitaire'
                        radioSelBtnName='caracterOwner'
                        onClick={(e) => setHorseProfile({...horseProfile, owner_caracter : e.target.value}) }
                    />
                    </div>
            </div>
            <hr />
            <div className='owner_communication'>
                    <div className='select_communication'>
                    <Frequency 
                        frequencyTitle='A quelle fréquence aimez-vous communiquer avec le propriétaire ? '
                        onClick={(e) => setHorseProfile({...horseProfile, owner_communication_frequency : e.target.value}) }
                        frequency={horseProfile.horse_owner_communication_frequency}
                    />
                    
                </div>
             </div>
                <hr />
                <div className='owner_horseWork'>
                <h5> Travail du cheval :</h5>
                    <div className='select_horseWork'>
                        <RadioButton 
                            radioButtonText="Ouvert à la nouveauté" 
                            radioButtonId='openToNew' radioButtonName='horseWork' radioButtonValue='Ouvert à la nouveauté'
                            onClick={(e) => setHorseProfile({...horseProfile, owner_horse_work : e.target.value}) }
                            // horseWork={horseWork}
                        />

                        <RadioButton 
                            radioButtonText="Normal" 
                            radioButtonId='normal' radioButtonName='horseWork' radioButtonValue='Normal'
                            onClick={(e) => setHorseProfile({...horseProfile, owner_horse_work : e.target.value}) }
                            // horseWork={horseWork}
                        />

                        <RadioButton 
                            radioButtonText="Cadré" 
                            radioButtonId='cadre' radioButtonName='horseWork' radioButtonValue='Cadré'
                            onClick={(e) => setHorseProfile({...horseProfile, owner_horse_work : e.target.value}) }
                            // horseWork={horseWork}
                        />
                    </div>
            </div>
            
            <h5>Message :</h5>
                <form className="postHorse_msg">
                <label>
                    <textarea
                    className="postHorse_input"
                    type="text"
                    placeholder="Ajoutez quelques mots"
                    onChange={(event) => setHorseProfile({...horseProfile, owner_message : event.target.value}) }
                    />
                </label>
                </form>

            <Link to="/post-horse#anchorIdealRider" style={{ textDecoration: "none" }}>
                <FloatingButton
                btnName={"Valider"}
                type="submit"
                />
             </Link>

        
        </div>

        </div>


    )
}

export default OwnerPres