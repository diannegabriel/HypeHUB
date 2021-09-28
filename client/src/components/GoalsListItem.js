import React from "react";
import "./GoalsListItem.scss";
import useData from "./../hooks/useData";

export default function GoalsListItem({goalId, status, title}) {
  const { updateGoalStatus } = useData();

  const handleClick = () => {
    updateGoalStatus({
      goalId: goalId,
      status: status,
    });
  };

  return (
    <li className="goal-entry">
      {title}
      <button onClick={handleClick}>{status}</button>
    </li>
  );
}
