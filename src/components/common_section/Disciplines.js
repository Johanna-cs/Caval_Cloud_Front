import React from "react";
import Checkbox from "../common/Checkbox";

const Disciplines = (props) => {




    return (
        <>
            <Checkbox 
                CheckboxText='Obstacle'
                CheckboxValue='Obstacle'
                onChange={props.setObstacle}
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Dressage'
                CheckboxValue='Dressage'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='CCE'
                CheckboxValue='CCE'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='TREC - Equifun'
                CheckboxValue='TREC - Equifun'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Balade - Randonnée'
                CheckboxValue='Balade - Randonnée'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Ethologie - Equifeel'
                CheckboxValue='Ethologie - Equifeel'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Hunter'
                CheckboxValue='Hunter'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Horse-Ball'
                CheckboxValue='Horse-Ball'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Pony-Games'
                CheckboxValue='Pony-Games'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Reining-Western'
                CheckboxValue='Reining-Western'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Endurance'
                CheckboxValue='Endurance'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Attelage'
                CheckboxValue='Attelage'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Voltige'
                CheckboxValue='Voltige'
                onClick={props.onClick}/>
            <Checkbox 
                CheckboxText='Disciplines culturelles'
                CheckboxValue='Disciplines culturelles'
                onClick={props.onClick}/>
        </>
    )
}

export default Disciplines