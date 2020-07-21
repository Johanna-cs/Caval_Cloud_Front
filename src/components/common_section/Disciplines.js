import React, { useState, useEffect, useReducer} from "react";
import Checkbox from "../common/Checkbox";
import "./common_section.css";



const initialDiscipline = [
  {
    id: "a",
    name: "Obstacle",
    checked: false,
  },
  {
    id: "b",
    name: "Dressage",
    checked: false,
  },
  {
    id: "c",
    name: "CCE",
    checked: false,
  },
  {
    id: "d",
    name: "Ethologie",
    checked: false,
  },
  {
    id: "e",
    name: "Attelage",
    checked: false,
  },
  {
    id: "f",
    name: "TREC",
    checked: false,
  },
];

const disciplineReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state.map((discipline) => {
        if (discipline.id === action.id) {
          return { ...discipline, checked: true };
        } else {
          return discipline;
        }
      });
    case "REMOVE":
      return state.map((discipline) => {
        if (discipline.id === action.id) {
          return { ...discipline, checked: false };
        } else {
          return discipline;
        }
      });
    default:
      return state;
  }
};

const Disciplines = (props) => {
  const [disciplines, dispatch] = useReducer(
    disciplineReducer,
    initialDiscipline
  );

  const handleChange = (discipline) => {
    dispatch({
      type: discipline.checked ? "REMOVE" : "ADD",
      id: discipline.id,
    });
  };

  return (
    <div className='disciplines'>
      <h4>Discipline(s) souhaitée(s)</h4>
      <div className="disciplineList">
        {disciplines.map((discipline) => (
          <Checkbox
            CheckboxText={discipline.name}
            type="checkbox"
            checked={discipline.checked}
            onChange={() => handleChange(discipline)}
          />
        ))}
      </div>
    </div>
  );
};

export default Disciplines
