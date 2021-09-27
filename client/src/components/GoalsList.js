import React from "react";
import { NavItem } from "react-bootstrap";
import "./GoalsList.scss";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList(props) {
  //Ternary prevents map of null error
  //Will display no components id no goals available
  const goalList = props.goals ?
  props.goals.map((goal) => {
    return (
      <GoalsListItem
        key={goal.goalId}
        title={goal.goalName}
        goalDescription={goal.goalDescription}
      />
    );
  }): null


  return (
    <div className="goals-list-item-container">
      {props.headerName}
      {goalList}
    </div>
  );
}
