import React from "react";
import "./GoalsList.scss";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList(props) {
  const goalList = props.goals.map((goal) => {
    return (
      <GoalsListItem
        title={goal.goalName}
        goalDescription={goal.goalDescription}
      />
    );
  });
  return (
    <div className="goals-list-item-container">
      {props.headerName}
      {goalList}
    </div>
  );
}
