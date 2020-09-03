import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Header from "../Header_footer/Header";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import Axios from "axios";
import { Results_Horse_Context} from '../context/Results_Horse_Context'
import { UserContext } from '../context/UserContext'



const HorseResultPage = () => {

  // Chargement des informations de localisation du user dans le "UserContext" :
  const { userPosition, setUserPosition } = useContext(UserContext)

  // Chargement des réssultats dans le context ResultsHorse
  const { resultsHorses, setResultsHorses } = useContext(Results_Horse_Context)

  // Data stored ?
  const [ dataStored, setDataStored ] = useState(false)

  // Préparation de getRiders  :
  const longitude = Number(userPosition.user_longitude) || 2.33902 // Paris 1er
  const latitude = Number(userPosition.user_latitude) || 48.8635 // Paris 1er
  const distanceMax = Number(userPosition.user_perimeter) * 1000 || 1000000 // Si pas précisé, par défaut le rayon est de 10000 KM (unité de base en mètres)
  

  // Requête à modifier, actuellement pas de critères pris en compte pour afficher les résultats
  const getHorses = () => {
    Axios
    .get(`http://localhost:4000/api/horses/search/?longitude=${longitude}&latitude=${latitude}&distanceMax=${distanceMax}`)
    .then(res => setResultsHorses(res.data))
    .finally(setDataStored(true))
    .catch(err=> console.error(err))
  }

 
  useEffect(() => {
    getHorses()
  }, 
  [])
  

  return (
    <>
      <Header className="header" title="Résultats de la recherche" />
      
        <div className="Result-filterbarTop">
        <Link to={{
            pathname: `/search-horse`,
          }}
        >
          <button className="Result-filterbar-button">
            Retour à la recherche
          </button>
        </Link>
        </div>

      { dataStored === true ? 

      <div className="Result-Page">
      {resultsHorses.map(e=> 
        <HorseResultCard 
          key={e.horse_ID}
          fullResult={e} 
          horse_name={e.horse_name}
          statusFavorite={false}
          horse_ID={e.horse_ID}
          photo={e.horse_photo1}
        />
        )
      }
      </div>

      : 
      null }
      
    </>
  );
}

export default HorseResultPage;
