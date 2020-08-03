import React from 'react'
import Checkbox from '../common/Checkbox'
import './common_section.css'


const Structures = (props) => {
    
    return (
        
        
        <div className='structures'>
            <h4>Structure(s) disponible(s) </h4>
            <div className='structureList'>
                <Checkbox 
                    CheckboxText="Carrière"
                    CheckboxValue='Carrière'
                    onClick={props.onClick} />
                <Checkbox 
                    CheckboxText="Manège couvert"
                    CheckboxValue='Manège couvert'
                    onClick={props.onClick} />
                <Checkbox 
                    CheckboxText="Rond de longe" 
                    CheckboxValue='Rond de longe'
                    onClick={props.onClick}/>
                <Checkbox 
                    CheckboxText="Piste de trotting"
                    CheckboxValue='Piste de trotting'
                    onClick={props.onClick} />
                <Checkbox 
                    CheckboxText="Cross"
                    CheckboxValue='Cross'
                    onClick={props.onClick} />
                <Checkbox 
                    CheckboxText="Chemins de balade" 
                    CheckboxValue='Chemins de balade'
                    onClick={props.onClick}/>
                <Checkbox 
                    CheckboxText="Champs" 
                    CheckboxValue='Champs'
                    onClick={props.onClick}/>
               
            </div>
        </div>
    )}

export default Structures