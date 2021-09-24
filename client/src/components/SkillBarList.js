import React from "react";
import './SkillBarList.scss'

export default function SkillBarList() {
  return (
    <div className="skills-bar">
      <div className="bar">
        <div className="info">
          <span>Strength</span>
        </div>
        <div className="progress-line"><span className="strength"></span></div>
      </div>
      <div className="bar">
          <div className="info">
            <span>Vitality</span>
          </div>
          <div className="progress-line"><span className="vitality"></span></div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Knowledge</span>
        </div>
        <div className="progress-line"><span className="knowledge"></span></div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Social</span>
        </div>
        <div className="progress-line"><span className="social"></span></div>
      </div>
      <div className="bar">
        <div className="info">
          <span>Willpower</span>
        </div>
        <div className="progress-line"><span className="willpower"></span></div>
      </div>
    </div>
  );
}