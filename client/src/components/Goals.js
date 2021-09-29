import React from "react";
import "./Goals.scss";
import GoalsList from "./GoalsList";

export default function Goals(props) {
  return (
    <main id="main-container" className="rpgui-content">
      <section className="goals-box rpgui-container framed-golden">
        <GoalsList headerName={"Daily"} goals={props.dailyGoals} />
        <GoalsList headerName={"Mission"} goals={props.missionGoals} /> 
        <GoalsList headerName={"Quest"} goals={props.questGoals} />
      </section>
    </main>
  );
}
