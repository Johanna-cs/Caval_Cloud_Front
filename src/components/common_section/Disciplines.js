import React, { useState } from "react";
import Checkbox from "../common/Checkbox";
import "./common_section.css";

const Disciplines = (props) => {
    
      
    return (

    <div className="disc">
      <h4>Disciplines</h4>
      <div className="disciplineList">
        <Checkbox CheckboxText="Obstacle" />
        <Checkbox CheckboxText="Dressage" />
        <Checkbox CheckboxText="CCE" />
        <Checkbox CheckboxText="Ethologie" />
        <Checkbox CheckboxText="Attelage" />
        <Checkbox CheckboxText="TREC" />
      </div>
    </div>
  )
}

export default Disciplines
