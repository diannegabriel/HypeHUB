import React from "react";
import './Goals.scss'
import GoalsList from './GoalsList';


export default function Goals() {
  return (
    <main id="main-container">
      <section className="goals-box">
        <GoalsList />
      </section>
    </main>
  );
}