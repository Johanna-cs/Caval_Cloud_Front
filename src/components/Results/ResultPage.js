import React from "react";
import "./Result.css";
import Header from "../Header_footer/Header";
import ResultCard from "./ResultCard";

function ResultPage(props) {
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
