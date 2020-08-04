import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Header from "../Header_footer/Header";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import Axios from "axios";
import { Results_Horse_Context} from '../context/Results_Horse_Context'
import { getDistanceFromLatLonInKm } from '../matching/calculDistance'



const HorseResultPage = () => {

  const currentRiderLat = 43.620761599999994
  const currentRiderLong = 5.308415999999999 

  const {resultsHorses, setResultsHorses} = useContext(Results_Horse_Context)

  // Requête à modifier, actuellement pas de critères pris en compte pour afficher les résultats
  const getHorses = () => {
    Axios
    .get(`http://localhost:4000/api/horses/`)
    .then(res => setResultsHorses(res.data))
    .catch(err=> console.error(err))
  }

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2-lat1);  // deg2rad below
    let dLon = deg2rad(lon2-lon1); 
    let a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    let d = R * c; // Distance in km
    return d;
  }
  
  const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }
  
  const getDistanceBetweenRiderAndHorse = (arrayOfresults) => {
    return (
    arrayOfresults.map(result => getDistanceFromLatLonInKm(currentRiderLat, currentRiderLong, result.horse_lat, result.horse_long)))

  }

  useEffect(() => {
    getHorses()
  }, 
  [])
  

  return (
    <>
      <Header className="header" title="Résultats de la recherche" />
      {/* <button onClick={() => getDistanceBetweenRiderAndHorse(resultsHorses)}>action</button> */}
      
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
      <div className="Result-Page">
      {resultsHorses.map(e=> 
        <HorseResultCard 
          key={e.horse_ID}
          fullResult={e} 
          horse_name={e.horse_name}
          horse_ID={e.horse_ID}
          photo={e.horse_photo1}
        />
        )
      }

      </div>
    </>
  );
}

export default HorseResultPage;
