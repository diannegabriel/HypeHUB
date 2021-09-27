import React from "react";
import "./Goals.scss";
import GoalsList from "./GoalsList";

let g1 = [
  { title: "goal1", something: "information" },
  { title: "goal2", something: "information" },
  { title: "goal7", something: "information" },
];
let g2 = [
  { title: "goal3", something: "information" },
  { title: "goal4", something: "information" },
];
let g3 = [
  { title: "goal5", something: "information" },
  { title: "goal6", something: "information" },
];

export default function Goals(props) {
  return (
    <main id="main-container">
      <section className="goals-box">
        {/* <GoalsList headerName={"Daily"} goals={g1}/>
        <GoalsList headerName={"Mission"} goals={g2}/> */}
        <GoalsList headerName={"Daily"} goals={props.goalsFromDb} />
      </section>
    </main>
  );
}
