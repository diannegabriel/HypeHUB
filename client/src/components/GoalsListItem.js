import React from "react";
import './GoalsListItem.scss'

export default function GoalsListItem(props) {
  return (
    <>
    <li className="goal-entry">
      {props.title}
    </li>
      {props.status}
      </>
  );
}