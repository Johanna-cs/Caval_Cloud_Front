import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
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
      
        <div className="Result-filterbarTop">
          <Link to ={{
            pathname : '/search-rider'
          }}>
          <button className="Result-filterbar-button">
            Retour à la recherche
          </button>
          </Link>
        </div>
        <div className="Result-PageRider">
      {resultsRiders.map(e=> 
        <ResultCard 
          key={e.rider_ID}
          fullResult={e} 
          firstname={e.rider_firstname}
          rider_ID={e.rider_ID}
          photo={e.rider_photos}
        />
        )
      }

      </div>
    </>
  );
}

export default ResultPage;
