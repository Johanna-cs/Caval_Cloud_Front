import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import './landing.css'
import logoCavalCloud from '../SVG-icons/cavalcloud-logo.png'

const Landing = () => {

        return (
            <div className='LandingPage'>
                <div>
                    <img className='CavalCloudLogo' src={logoCavalCloud} alt='CavalCloud logo' /> 
                </div>
                <div>
                    <p className='slogan'> Dédié à la demi-pension </p>
                </div>
                
                <div className='create' >
                    <Link to='/register' style={{ textDecoration: "none" }}>
                        <button type='button' id='createBtn' > Créer un compte </button>
                    </Link>
                </div>
                <div className='login' > 
                    <Link to='/login' style={{ textDecoration: "none" }}>
                        <button type='button' id='loginBtn' > Se connecter </button>
                    </Link>
                </div>
                <div>
                    <Link to="/" style={{ textDecoration: "none" }}>
                            <p id='invite'> Parcourir sans créer de compte </p>
                    </Link>
                </div>
            </div>



        )
    
}
export default Landing 