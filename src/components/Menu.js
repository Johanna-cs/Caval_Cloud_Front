import React from 'react'
import './menu.css'
import { Link } from 'react-router-dom';
import Home from './SVG-icons/home.svg'
import Save from './SVG-icons/saved-researched.svg'
import Message from './SVG-icons/message.svg'
import Profil from './SVG-icons/profil.svg'




const Menu = (props)=>{

    return (
<>

<div className='menu'>
<div className='divBtn'>
  <Link className='menu_home' to='/home' style={{ textDecoration: "none" }} >
  <div className='logoM'>
    <img src={Home} width="30" height="30" alt='home caval cloud' className='logo-home logo'/>
    </div>
    <p>Accueil</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_save' to='/home' style={{ textDecoration: "none" }} >
  <div className='logoM'>
    <img src={Save} width="30" height="30" alt='home caval cloud' className='logo-save logo'/>
    </div>
    <p>Favoris</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_message' to='/home' style={{ textDecoration: "none" }} >
  <div className='logoM'>
    <img src={Message} width="30" height="30" alt='home caval cloud' className='logo-mess logo'/>
  </div>
    <p>Message</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_myprofil' to='/my-profile' style={{ textDecoration: "none" }} >
    <div className='logoM'>
    <img src={Profil} width="30" height="30" alt='home caval cloud'className='logo-profil logo'/>
    </div>
    <p>Mon Profil</p>
  </Link>
  
</div>

</div>
</>
    )
}

export default Menu