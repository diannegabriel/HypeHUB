import React from "react";
import "./GoalsListItem.scss";
import useData from "./../hooks/useData";

export default function GoalsListItem(props) {
  const { updateGoalStatus } = useData();

  const handleClick = () => {
    updateGoalStatus({
      goalId: props.goalId,
      status: "xyz",
    });
  };

  return (
    <li className="goal-entry">
      {props.title}
      <button onClick={handleClick}>{props.status}</button>
    </li>
  );
}
