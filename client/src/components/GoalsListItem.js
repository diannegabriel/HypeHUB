import React from "react";
import "./GoalsListItem.scss";

export default function GoalsListItem(props) {
  const handleClick = () => {
    console.log(`-----------\ncomponent clicked -> ${props.goalId}`);
  };

  return (
    <li className="goal-entry">
      {props.title}
      <button onClick={handleClick}>{props.status}</button>
    </li>
  );
}
