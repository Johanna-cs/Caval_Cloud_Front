import React from "react";
import { Link } from "react-router-dom";
import "./Result.css";

const ResultCard = (props) => {

  return (
    <>
      <div className="resultCard">
        <img className="resultPhoto" src={props.image} alt={props.label} />
        <div className="resultDetails">
          <h3 id="resultName">{props.prenom} propose {props.horseName}</h3>
        </div>
        <Link
          to={{
            pathname: `/results/${props.id}`,
            results: props.results,
          }}
        >
          <button className="resultButton">Résultat</button>
        </Link>
      </div>
    </>
  );
};

export default ResultCard;