import React from "react";
import './SidePanel.scss'
import './rpgui.css'
import SkillBarList from "./SkillBarList";

export default function SidePanel() {
  return (
    <>
      <input type="checkbox" />
      <div className="burgerlines">
        <span className="lines line1"></span>
        <span className="lines line2"></span>
        <span className="lines line3"></span>
      </div>
      <div className="skills menu-items">
        Log Out
        <SkillBarList />
        {/* <div className="total-goals">
          28/35 Success Missions!
        </div>
        <div className="login-streak">
          <img className="star-drop" src="https://emoji.gg/assets/emoji/1807-acnh-starfragment.png" alt=""/>
          You've logged in 5 days in a row!
        </div> */}
      </div>
    </>
  );
};