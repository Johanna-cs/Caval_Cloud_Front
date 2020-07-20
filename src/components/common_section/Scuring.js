import React from "react";
import SelectButton from "../common/SelectButton";
import './common_section.css'

const Scuring = (props) => {
  return (
    <div className="scuring">
      <h5>Quel est le type d'écuries ?</h5>
      <div className="scuringList">
        <SelectButton
          radioSelBtnId="Poney Club"
          radioSelBtnValue="Poney Club"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Centre équestre"
          radioSelBtnValue="Centre équestre"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Ecurie du propiétaire"
          radioSelBtnValue="Ecurie du propiétaire"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Chez un particulier"
          radioSelBtnValue="Chez un particulier"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Elevage"
          radioSelBtnValue="Elevage"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Autre"
          radioSelBtnValue="Autre"
          radioSelBtnName="scuringType"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default Scuring;
