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
    <img src={Home} width="30" height="30" alt='home caval cloud' className='logo-home logoM'/>
    <p>Accueil</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_save' to='/home' style={{ textDecoration: "none" }} >
    <img src={Save} width="30" height="30" alt='home caval cloud' className='logo-save logoM'/>
    <p>Sauvegardes</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_message' to='/home' style={{ textDecoration: "none" }} >
    <img src={Message} width="30" height="30" alt='home caval cloud' className='logo-mess logoM'/>
    <p>Message</p>
  </Link>
  
</div>

<div className='divBtn'>
  <Link className='menu_myprofil' to='/home' style={{ textDecoration: "none" }} >
    <img src={Profil} width="30" height="30" alt='home caval cloud'className='logo-profil logoM'/>
    <p>Mon Profil</p>
  </Link>
  
</div>

</div>
</>
    )
}

export default Menu