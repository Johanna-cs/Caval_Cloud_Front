import React from 'react'
import { Link, useHistory } from "react-router-dom";


function ReturnButton() {
    let history = useHistory();
    return (
      <div className="Result-filterbarTop">
          <button onClick={()=>history.goBack()} className="Result-filterbar-button">
            Page précédente
          </button>
      </div>
    );
}

export default ReturnButton
