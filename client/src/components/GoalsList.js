import React from "react";
import { NavItem } from "react-bootstrap";
import "./GoalsList.scss";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList(props) {
  //Ternary prevents 'map of' error
  //Will display no components if no goals available
  const goalList = props.goals !== -1 ?
  props.goals.map((goal) => {
    return (
        <GoalsListItem
          key={goal.goalId}
          goalId={goal.goalId}
          title={goal.goalName}
          goalDescription={goal.goalDescription}
          status={goal.status}
        />
    );
  }): null


  return (
    <article className="goals">
      <h3>{props.headerName}</h3>
      {goalList}
    </article>
  );
}
