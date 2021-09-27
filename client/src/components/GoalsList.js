import React from "react";
import "./GoalsList.scss";
import GoalsListItem from "./GoalsListItem";

export default function GoalsList(props) {


  const goalList = props.goals.map((goal) => {
    return <GoalsListItem title={goal.title} something={goal.something} />;
  });
  return (
    
      <div className="goals-list-item-container">
      {props.headerName}
      {goalList}
      </div>
    
  );
}
