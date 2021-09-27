import React from "react";
import './GoalsListItem.scss'

export default function GoalsListItem(props) {
  console.log(props)
  return (
    <li className="goal-entry">
      {props.goals[0].title}
    </li>
  );
}