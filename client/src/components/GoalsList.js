import React from "react";
import './GoalsList.scss'
import GoalsListItem from "./GoalsListItem";

export default function GoalsList(props) {
  console.log(props)
  const goals = [
    {
      title: "goals1",
      description: "describe"
    }
  ]
  return (
    <>
      {/* <article className="daily goals"> */}
        <h3>{props.goalsType}</h3>
        <GoalsListItem goals={goals}/>
        <li className="goal-entry">
          Drink woter
        </li>
      {/* </article> */}
{/* 
      <article className="short goals">
        <h3>Missions</h3>
        <li className="goal-entry">
          Lose 5lbs
        </li>
        <li className="goal-entry">
          Go outside
        </li>
      </article>

      <article className="long goals">
        <h3>Quests</h3>
        <li className="goal-entry">
          Go to Mars
        </li>
        <li className="goal-entry">
          Become president
        </li>
      </article> */}
    </>
  );
}