import React, {useState, useContext, useEffect} from "react";
import "./Result.css";
import Header from "../Header_footer/Header";
import ResultCard from "./ResultCard";
import Axios from "axios";
import { Results_Rider_Context} from '../context/Results_Rider_Context'


function ResultPage(props) {

  const [resultsRiders, setResultsRiders] = useState([])


  const getRiders = async () => {
    await Axios
    .get(`http://localhost:4000/api/riders/search/?`)
    .then(res=> setResultsRiders(res))
    .catch(err=> console.error(err))
    .finally(console.log(resultsRiders))
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
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </>
  );
}

export default ResultPage;
