import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import horse from './SVG-icons/horse-icon.svg'
import helmet from './SVG-icons/bombe-icon.svg' 
import boot from './SVG-icons/botte-icon.svg'
import horseFrame from './SVG-icons/horse-in-cadre-icon.svg'
import cavalCloudLogo from './SVG-icons/cavalcloud-logoTest.jpg'
import Menu from './Menu'


function Home(props) {
    // const [searchHorse, setSearchHorse] = useState(props.location.searchHorse)
    // const [searchRider, setSearchRider] = useState(props.location.searchRider)
    // const [postRider, setPostRider] = useState(props.location.postRider)
    // const [postHorse, setPostHorse] = useState(props.location.postHorse)

    return (
    <>
        {/* <Header className='header' title='ACCUEIL'/> */}
        <div className='headerHome'><h3 id='homeTitle'>Accueil</h3> </div>
       <div className='HomePage'> 
            <h3 className='welcome'> Bienvenue sur Cavalcloud ! </h3>

                <Link to='/search-horse' style={{ textDecoration: "none" }} >
                    <div className='homeBtn' >
                        <img className='logoHorse' src={horse} alt='horse icon'/>
                        <p className='textBtn'> Chercher un équidé </p>
                    </div>
                </Link>

                <Link to='/search-rider' style={{ textDecoration: "none" }} >
                    <div  className='homeBtn' >
                        <img className='logoHelmet' src={helmet} alt='helmet icon'/>
                        <p className='textBtn'> Chercher un cavalier </p>
                    </div>
                </Link>

                <Link to='/post-rider' style={{ textDecoration: "none" }} >
                <div  className='homeBtn'>
                    <img className='logoboot' src={boot} alt='boot icon'/>
                    <p className='textBtn'> Poster une annonce cavalier </p>
                </div>
                </Link>

                <Link to='/post-horse' style={{ textDecoration: "none" }} >
                    <div  className='homeBtn'>
                        <img className='logoHorseframe' src={horseFrame} alt='horse frame icon'/>
                        <p className='textBtn'> Poster une annonce cheval </p>
                    </div>
                </Link>

                <Link to='/about-us' style={{ textDecoration: "none" }} >
                    <div  className='AboutUSBtn'>
                        <img className='logoCaval' src={cavalCloudLogo} alt='caval cloud logo'/>
                        <p className='textUs'> Qui sommes-nous ? </p>
                    </div>
                </Link>
            <Menu />
       </div>
       </>
    )
}

export default Home ;
