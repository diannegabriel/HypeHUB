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
          goalType={props.headerName.toLowerCase()}
          goalId={goal.goalId}
          title={goal.goalName}
          goalDescription={goal.goalDescription}
          status={goal.status}
        />
    );
  }): null


  return (
    <article className="goals rpgui-container framed-golden-2">
      <h2>{props.headerName}</h2>
      {goalList}
    </article>
  );
}
