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
      <div className="skills menu-items rpgui-content">
        <a href="/" className="logout-link">Log Out</a>
        <SkillBarList />
      </div>
    </>
  );
};