import React from 'react'
import SelectButton from '../common/SelectButton'
import RadioCheck from '../common/RadioCheck'


const IdealOwner = () => {
      
    return (

<>

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
                    <RadioCheck 
                    RadioCheckText1='Introverti' 
                    RadioCheckText2='Sociable'
                    RadioCheckText3='Extraverti' 
                    RadioCheckText4='Solitaire' />

                    
                </div>
            </div>
                <hr />
            <div className='rider_communication'>
                <h5> Fréquence de communication :</h5>
                    <div className='select_communication'>
                    <SelectButton textBtn={"Moins d'une fois par semaine"}/>
                    <SelectButton textBtn={"Une fois par semaine"}/>
                    <SelectButton textBtn={"Plus d'une fois par semaine"}/>
                    </div>
             </div>
                <hr />
            <div className='rider_horseWork'>
                <h5> Travail du cheval :</h5>
                    <div className='select_horseWork'>
                    <SelectButton textBtn={"Ouvert à la nouveauté"}/>
                    <SelectButton textBtn={"Normal"}/>
                    <SelectButton textBtn={"Cadré"}/>
                    </div>
            </div>
        </div>
        </>
    )}

export default IdealOwner