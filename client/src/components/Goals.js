import React from "react";
import './Goals.scss'
import GoalsList from './GoalsList';


export default function Goals() {
  const goalsTypes = ["Daily Tasks!", "Missions!", "Quests!"]
  const goalsType = goalsTypes.map((goalType) => {
    console.log(goalType)
    return (
      <section className="goals-box">
        <article className="goals">
          <GoalsList goalsType={goalType}/>
        </article>
      </section>
    );
  })

  return (
    <main id="main-container">
      {/* <section className="goals-box">
        <GoalsList goalsType={"Daily Taskss!"}/>
      </section> */}
      {goalsType}
    </main>
  );
}