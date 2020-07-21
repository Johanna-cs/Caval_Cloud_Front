import React, {useState, useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import "./HorseResult.css";
import Header from "../Header_footer/Header";
import HorseResultCard from "../Horse_Results/HorseResultCard";
import Axios from "axios";
import { Results_Horse_Context} from '../context/Results_Horse_Context'


const HorseResultPage = () => {

  const {resultsHorses, setResultsHorses} = useContext(Results_Horse_Context)


  const getHorses = () => {
    Axios
    .get(`http://localhost:4000/api/horses/`)
    .then(res => setResultsHorses(res.data))
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
      <div className="Result-Page">
      {resultsHorses.map(e=> 
        <HorseResultCard 
          fullResult={e} 
          horse_name={e.horse_name}
          horse_ID={e.horse_ID}
        />
        )
      }

      </div>
    </>
  );
}

export default HorseResultPage;
