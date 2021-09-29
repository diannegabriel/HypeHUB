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

  if (status === 'complete') {
    status = <i class="nes-icon star"></i>;
  } else if (status === 'incomplete') {
    status = <i class="nes-icon star is-empty"></i>;
  } else if (status === 'in progress') {
    status = <i class="nes-icon star is-half"></i>;
  }

  return (
    <li className="goal-entry">
      <button onClick={handleClick} className="goals-status-name">{status}</button>
      <p className="goals-title-name">{title}</p>
      <div className="rpgui-icon sword edit-button"></div>
      {/* <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/015a5440cba9551.png" className="pencil-edit-button" /> */}
    </li>
  );
}
