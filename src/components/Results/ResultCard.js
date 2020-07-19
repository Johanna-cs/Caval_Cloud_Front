import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Result.css";
import Axios from "axios";
import heart from "../SVG-icons/coeur-hors-selection.svg";
import heartFull from "../SVG-icons/coeur-selection.svg";

const ResultCard = (props) => {
  
  const [favorite, setFavorite] = useState(heart);

  const favoriteCard = () => {
    if (favorite === { heartFull }) {
      Axios.post("http://localhost:3010/api/favorite", favorite).catch((err) =>
        console.error(err)
      );
    }
    else if (favorite === { heart }) {
      Axios.delete("http://localhost:3010/api/favorite", favorite).catch((err) =>
        console.error(err)
      );
    }
  };

  return (
    <>
      <div className="resultCard">
        <Link
          to={{
            pathname: `/results/${props.id}`,
            results: props.results,
          }}
        >
          <div className="resultCard-container">
            <img
              className="resultPhoto"
              src="https://cdnfr1.img.sputniknews.com/img/104237/27/1042372789_0:0:1921:1039_1000x541_80_0_0_615949ee93fd8244dcec868f3df5a7f4.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="resultDetails">
          <h7 id="resultName">Machin propose Tornado</h7>
          <img
            className="resultHeart"
            onClick={
              (favoriteCard(),
              () => setFavorite(favorite === heart ? heartFull : heart))
            }
            src={favorite}
            alt="favoris"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default ResultCard;
