import React, { useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import Header from "../Header_footer/Header";
import ResultCard from "./ResultCard";
import Axios from "axios";
import { Results_Rider_Context} from '../context/Results_Rider_Context'
import { UserContext } from '../context/UserContext'
import { SearchRiderContext } from '../context/SearchRiderContext'



function ResultPage() {

  // Chargement des résultats de recherche dans le "ResultsRiderContext" :
  const {resultsRiders, setResultsRiders} = useContext(Results_Rider_Context)

  // Chargement des informations de localisation du user dans le "UserContext" :
  const { userPosition, setUserPosition } = useContext(UserContext)

  // Chargement des informations de recherche dans le "SearchRiderContext" :
  const { searchRiders, setSearchRiders } = useContext(SearchRiderContext)

  // Data stored ?
  const [ dataStored, setDataStored ] = useState(false)

  // Préparation de getRiders  :
  const longitude = Number(userPosition.user_longitude) || 2.33902 // Paris 1er
  const latitude = Number(userPosition.user_latitude) || 48.8635 // Paris 1er
  const distanceMax = Number(userPosition.user_perimeter) * 1000 || 1000000 // Si pas précisé, par défaut le rayon est de 10000 KM (unité de base en mètres)

  const getRiders = () => {
    Axios
    .get(`http://localhost:4000/api/riders/search/?longitude=${longitude}&latitude=${latitude}&distanceMax=${distanceMax}`)
    .then(res => setResultsRiders(res.data))
    .finally(setDataStored(true))
    .catch(err=> console.error(err))
    
  }

  useEffect(() => {
    getRiders()
    },[]
  )
  
  return (
    <>
      <Header className="header" title="Résultats de la recherche" />

      
        <div className="Result-filterbarTop">
          <Link to ={{
            pathname : '/search-rider'
          }}>
          <button className="Result-filterbar-button">
            Retour à la recherche
          </button>
          </Link>
        </div>

        { dataStored === true ? 

        <div className="Result-PageRider">
      {resultsRiders.map(e=> 
        <ResultCard 
          key={e.rider_ID}
          fullResult={e} 
          firstname={e.rider_firstname}
          statusFavorite={false}
          rider_ID={e.rider_ID}
          photo={e.rider_photos}
        />
        )
      }
      </div>

      : 
      null }

    </>
  );
}

export default ResultPage;
