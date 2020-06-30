import React from 'react'
import SelectButton from '../common/SelectButton'
import RadioCheck from '../common/RadioCheck'
import RangeButton from '../common/RangeButton'


const IdealOwner = () => {
      
    return (

<>

        <div className='searchHorse_idealRider'>
            <div className='rider_age'>
                    <h5> Age :</h5>
                    <span>10 ans</span>
                    <RangeButton radioSelBtnText='ans'/>
            </div>
                <hr />
            <div className='rider_caracter'>
                    <h5> Caractère :</h5>
                <div className='select_caracter'>
                    <RadioCheck 
                    RadioCheckText1={'Introverti'}
                    radioCheckId1={'introverti'} 
                    RadioCheckText2={'Sociable'}
                    radioCheckId2={'sociable'}
                    RadioCheckText3={'Extraverti'}
                    radioCheckId3={'extraverti'} 
                    RadioCheckText4={'Solitaire'}
                    radioCheckId4={'solitaire'} />

                    
                </div>
            </div>
                <hr />
            <div className='rider_communication'>
                <h5> Fréquence de communication :</h5>
                    <div className='select_communication'>
                    <SelectButton radioSelBtnText={"Moins d'une fois par semaine"} radioSelBtnId={'0timeWeek'} />
                    <SelectButton radioSelBtnText={'Une fois par semaine'} radioSelBtnId={'1timeWeek'}/>
                    <SelectButton radioSelBtnText={"Plus d'une fois par semaine"} radioSelBtnId={'manytimesWeek'}/>
                    
                </div>
             </div>
                <hr />
            <div className='rider_horseWork'>
                <h5> Travail du cheval :</h5>
                    <div className='select_horseWork'>
                    <SelectButton radioSelBtnText={"Ouvert à la nouveauté"} radioSelBtnId={'openToNew'} />
                    <SelectButton radioSelBtnText={'Normal'} radioSelBtnId={'normal'} />
                    <SelectButton radioSelBtnText={"Cadré"} radioSelBtnId={'cadre'} />
                    
                    </div>
            </div>
        </div>
        </>
    )}

export default IdealOwner