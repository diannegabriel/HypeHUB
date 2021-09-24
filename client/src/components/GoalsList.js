import React from "react";
import './GoalsList.scss'
import GoalsListItem from "./GoalsListItem";

export default function GoalsList() {
  return (
    <>
      <article className="daily goals">
        <h3>Daily Tasks</h3>
        <GoalsListItem />
        <li className="goal-entry">
          Drink woter
        </li>
        <li className="goal-entry">
          Workout
        </li>
        <li className="goal-entry">
          Meditate
        </li>
        <li className="goal-entry">
          Solve 20 katas
        </li>
        <li className="goal-entry">
          Read 10 pages of a book
        </li>
        <li className="goal-entry">
          Sleep 8 hrs
        </li>
        <li className="goal-entry">
          Take meds
        </li>
        <li className="goal-entry">
          Eat 1500 cals
        </li>
        <li className="goal-entry">
          Drink woter
        </li>
        <li className="goal-entry">
          Workout
        </li>
        <li className="goal-entry">
          Meditate
        </li>
        <li className="goal-entry">
          Solve 20 katas
        </li>
        <li className="goal-entry">
          Read 10 pages of a book
        </li>
        <li className="goal-entry">
          Sleep 8 hrs
        </li>
        <li className="goal-entry">
          Take meds
        </li>
      </article>

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
      </article>
    </>
  );
}