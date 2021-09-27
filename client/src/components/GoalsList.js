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
      // <article className="goals">
      //   {props.headerName}
        <GoalsListItem
          key={goal.goalId}
          title={goal.goalName}
          goalDescription={goal.goalDescription}
          status={goal.status}
        />
      // </article>
    );
  }): null


  return (
    <article className="goals">
      {props.headerName}
      {goalList}
    </article>
  );
}
