import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import { Link } from 'react-router-dom';
import '../App.css'
import horse from './SVG-icons/horse-icon.SVG'
import helmet from './SVG-icons/bombe-icon.svg'
import boot from './SVG-icons/botte-icon.svg'
import horseFrame from './SVG-icons/horse-in-cadre-icon.svg'
import cavalCloudLogo from './SVG-icons/cavalcloud-logo-OK.svg'


function Home(props) {
    // const [searchHorse, setSearchHorse] = useState(props.location.searchHorse)
    // const [searchRider, setSearchRider] = useState(props.location.searchRider)
    // const [postRider, setPostRider] = useState(props.location.postRider)
    // const [postHorse, setPostHorse] = useState(props.location.postHorse)

    return (

       <div className='HomePage'> 
            <h5 className='welcome'> Bienvenue sur Cavalcloud ! </h5>
            <p className='welcomeText'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
                <div className='searchHorse'>
                    <img className='logoHome' src={horse} alt='horse icon'/>
                    <p className='textBtn'> Chercher un équidé </p>
                </div>

                <div className='searchRider'>
                    <img className='logoHome' src={helmet} alt='helmet icon'/>
                    <p className='textBtn'> Chercher un cavalier </p>
                </div>
                
                <div className='postrider'>
                    <img className='logoHome' src={boot} alt='boot icon'/>
                    <p className='textBtn'> Poster une annonce cavalier </p>
                </div>

                <div className='postHorse'>
                    <img className='logoHome' src={horseFrame} alt='horse frame icon'/>
                    <p className='textBtn'> Poster une annonce cheval </p>
                </div>

                <div className='aboutUs'>
                    <img className='logoHome' src={cavalCloudLogo} alt='caval cloud logo'/>
                    <p className='textUs'> Qui sommes-nous ? </p>
                </div>

       </div>
    )
}

export default Home ;
