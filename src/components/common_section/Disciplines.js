import React, { useContext } from "react";
import Checkbox from "../common/Checkbox";
import { SearchRiderContext } from '../context/SearchRiderContext'

const Disciplines = () => {

    // Chargement et modifications des informations de recherche dans le "SearchRiderContext" :
    const { searchRiders, setSearchRiders } = useContext(SearchRiderContext)


    return (
        <>

        <div className="toggle_place">
            <h4>Disciplines :</h4>
        </div>

            <Checkbox 
                CheckboxText='Obstacle'
                CheckboxValue='Obstacle'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Obstacle : !searchRiders.rider_disciplines.Obstacle}
                })}/>
            <Checkbox 
                CheckboxText='Dressage'
                CheckboxValue='Dressage'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Dressage : !searchRiders.rider_disciplines.Dressage}
                })}/>
            <Checkbox 
                CheckboxText='CCE'
                CheckboxValue='CCE'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, CCE : !searchRiders.rider_disciplines.CCE}
                })}/>
            <Checkbox 
                CheckboxText='TREC - Equifun'
                CheckboxValue='TREC - Equifun'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, TREC_Equifun : !searchRiders.rider_disciplines.TREC_Equifun}
                })}/>
            <Checkbox 
                CheckboxText='Balade - Randonnée'
                CheckboxValue='Balade - Randonnée'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Balade_Randonnee : !searchRiders.rider_disciplines.Balade_Randonnee}
                })}/>
            <Checkbox 
                CheckboxText='Ethologie - Equifeel'
                CheckboxValue='Ethologie - Equifeel'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Ethologie_Equifeel : !searchRiders.rider_disciplines.Ethologie_Equifeel}
                })}/>
            <Checkbox 
                CheckboxText='Hunter'
                CheckboxValue='Hunter'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Hunter : !searchRiders.rider_disciplines.Hunter}
                })}/>
            <Checkbox 
                CheckboxText='Horse-Ball'
                CheckboxValue='Horse-Ball'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Horse_Ball : !searchRiders.rider_disciplines.Horse_Ball}
                })}/>
            <Checkbox 
                CheckboxText='Pony-Games'
                CheckboxValue='Pony-Games'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Pony_Games : !searchRiders.rider_disciplines.Pony_Games}
                })}/>
            <Checkbox 
                CheckboxText='Reining-Western'
                CheckboxValue='Reining-Western'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Reining_Western : !searchRiders.rider_disciplines.Reining_Western}
                })}/>
            <Checkbox 
                CheckboxText='Endurance'
                CheckboxValue='Endurance'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Endurance : !searchRiders.rider_disciplines.Endurance}
                })}/>
            <Checkbox 
                CheckboxText='Attelage'
                CheckboxValue='Attelage'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Attelage : !searchRiders.rider_disciplines.Attelage}
                })}/>
            <Checkbox 
                CheckboxText='Voltige'
                CheckboxValue='Voltige'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Voltige : !searchRiders.rider_disciplines.Voltige}
                })}/>
            <Checkbox 
                CheckboxText='Disciplines culturelles'
                CheckboxValue='Disciplines culturelles'
                onClick={() => setSearchRiders({
                    ...searchRiders,
                    rider_disciplines :  
                    {...searchRiders.rider_disciplines, Disciplines_culturelles : !searchRiders.rider_disciplines.Disciplines_culturelles}
                })}/>
        </>
    )
}

export default Disciplines