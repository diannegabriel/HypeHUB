import React from "react";
import "./Goals.scss";
import GoalsList from "./GoalsList";
import useData from "../hooks/useData";

export default function Goals(props) {
  return (
    <main id="main-container">
      <section className="goals-box">
        <GoalsList headerName={"Daily"} goals={props.dailyGoals} />
        <GoalsList headerName={"Mission"} goals={props.missionGoals} /> 
        <GoalsList headerName={"Quest"} goals={props.questGoals} />
      </section>
    </main>
  );
}
