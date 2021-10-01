import React, { useState, useEffect, useRef } from "react";
import "./GoalsListItem.scss";
import GoalUpdate from "./GoalUpdate";
import useData from "./../hooks/useData";
import Collapse from "react-bootstrap/Collapse";

export default function GoalsListItem({
  goalId,
  status,
  title,
  goalType,
  goalDescription,
}) {
  const [open, setOpen] = useState(false);
  const { updateGoalStatus, updateUserStats } = useData();

  const handleStatusClick = () => {
    updateGoalStatus({
      goalType: goalType,
      goalId: goalId,
      status: status,
    });
    //Set points to attr and exp on update from "in progress" to "complete"

    if (status === "in progress") {
      updateUserStats({
        goalType: goalType,
        goalId: goalId,
      });
    }
  };

  let statusIcon = "";
  let completedGoal = "";
  if (status === "complete") {
    statusIcon = <i className="nes-icon star"></i>;
    completedGoal = 
    <p className="goals-title-name tooltip" style={{
      textDecoration: `line-through`, 
      textDecorationThickness: `3px`, 
      textDecorationColor: `#383838`}}>
      {title}
      <div class="tooltiptext nes-balloon">
        <p className="tooltip-text-hover">{goalDescription}</p>
      </div>
    </p>
  } else if (status === "incomplete") {
    statusIcon = <i className='nes-icon star is-empty'></i>;
    completedGoal = 
    <p className="goals-title-name tooltip">
      {title}
      <div class="tooltiptext nes-balloon">
        <p className="tooltip-text-hover">{goalDescription}</p>
      </div>
    </p>
  } else if (status === "in progress") {
    statusIcon = <i className='nes-icon star is-half'></i>;
    completedGoal = 
    <p className="goals-title-name tooltip">
      {title}
      <div class="tooltiptext nes-balloon">
        <p className="tooltip-text-hover">{goalDescription}</p>
      </div>
    </p>
  }

  return (
    <>
      <li className='goal-entry'>
        <button onClick={handleStatusClick} className='goals-status-name'>
          {statusIcon}
        </button>
          {completedGoal}
        <div
          className='rpgui-icon sword edit-button'
          onClick={() => setOpen(!open)}
        ></div>
      </li>

      <Collapse in={open}>
        <div>
          <GoalUpdate 
          goalId={goalId}
          goalType={goalType}
          reCollapse={setOpen}
          />
        </div>
      </Collapse>
    </>
  );
}
