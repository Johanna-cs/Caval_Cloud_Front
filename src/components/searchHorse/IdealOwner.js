import React, { useState, useEffect } from 'react'
import { Collapse, Button, Input } from 'reactstrap'

const IdealOwner = () => {
    
    const [isOpen, setIsOpen] = useState(true)
    const toggle = () => setIsOpen(!isOpen)
      
    return (



        <div className='searchHorse_idealRider'>
            <div className='rider_age'>
                    <h5> Age :</h5>
                    <span>10 ans</span>
                    <input type="range" min="10" max="100" />
            </div>
                <hr />
            <div className='rider_caracter'>
                    <h5> Caractère :</h5>
                <div className='select_caracter'>
                        <Button className='selectBtn' size='lg'>Introverti</Button>
                        <Button className='selectBtn' size='lg'>Sociable</Button>
                        <Button className='selectBtn' size='lg'>Extraverti</Button>
                        <Button className='selectBtn' size='lg'>Solitaire</Button>
                    </div>
            </div>
                <hr />
            <div className='rider_communication'>
                <h5> Fréquence de communication :</h5>
                    <div className='select_communication'>
                        <Button className='selectBtn2' size='lg'>Moins d'une fois par semaine</Button>
                        <Button className='selectBtn2' size='lg'>Une fois par semaine</Button>
                        <Button className='selectBtn2' size='lg'>Plus d'une fois par semaine</Button>
                    </div>
             </div>
                <hr />
            <div className='rider_horseWork'>
                <h5> Travail du cheval :</h5>
                    <div className='select_horseWork'>
                        <Button className='selectBtn2' size='lg'>Ouvert à la nouveauté</Button>
                        <Button className='selectBtn2' size='lg'>Normal</Button>
                        <Button className='selectBtn2' size='lg'>Cadré</Button>
                    </div>
            </div>
        </div>
    )}

export default IdealOwner