import React from "react";
import SelectButton from "../common/SelectButton";
import './common_section.css'

const HebergementHorse = (props) => {
  return (
    <div className="hebergement">
      <h5>Type d'hébergement </h5>
      <div className="hebergtList">
        <SelectButton
          radioSelBtnId="Boxe"
          radioSelBtnValue="Boxe"
          radioSelBtnName="boxeType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Paddock"
          radioSelBtnValue="Paddock"
          radioSelBtnName="boxeType"
          onClick={props.onClick}
        />
        <SelectButton
          radioSelBtnId="Stabulation"
          radioSelBtnValue="Stabulation"
          radioSelBtnName="boxeType"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default HebergementHorse;
