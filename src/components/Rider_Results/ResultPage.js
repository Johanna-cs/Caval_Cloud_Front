import React, {useState, useContext, useEffect} from "react";
import "./Result.css";
import Header from "../Header_footer/Header";
import ResultCard from "./ResultCard";
import Axios from "axios";
import { Results_Rider_Context} from '../context/Results_Rider_Context'


function ResultPage() {

  const {resultsRiders, setResultsRiders} = useContext(Results_Rider_Context)


  const getRiders = () => {
    Axios
    .get(`http://localhost:4000/api/riders`)
    .then(res => setResultsRiders(res.data))
    .catch(err=> console.error(err))
  }

  useEffect(() => {
    getRiders()
}, [])
  

  return (
    <>
      <Header className="header" title="Résultats de la recherche" />
      <div className="Result-Page">
        <div className="Result-filterbar">
          <button className="Result-filterbar-button">
            Retour à la recherche
          </button>
        </div>
      {resultsRiders.map(e=> 
        <ResultCard 
          fullResult={e} 
          firstname={e.rider_firstname}
          rider_ID={e.rider_ID}
        />
        )
      }

      </div>
    </>
  );
}

export default ResultPage;
