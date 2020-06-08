import React, { useState } from 'react'
import Axios from 'axios'
import './landing.css'
import logoCavalCloud from '../SVG-icons/cavalcloud-logo.png'

function Landing(props) {
    const [createProfile, setCreateProfile] = useState(props.Register)
    const [loginProfile, setLoginProfile] = useState(props.Login)

    
        return (
            <div className='LandingPage'>
                <div>
                    <img className='CavalCloudLogo' src={logoCavalCloud} alt='CavalCloud logo' /> 
                </div>
                <div>
                    <p> Dédié à la demi-pension </p>
                </div>
                <div className='create' >
                    <button type='button' id='createBtn' > Créer un compte </button>
                </div>
                <div className='login' > 
                    <button type='button' id='loginBtn' > Se connecter </button>
                </div>
                <div>
                    <p> Parcourir sans créer de compte </p>
                </div>
            </div>



        )
    
}
export default Landing ;