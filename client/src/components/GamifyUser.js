import React from "react";
import './User.scss'
import "./rpgui.css";

export default function GamifyUser() {
  return (
    <article id="user-bar">
      <div className="rpgui-content">
        <div className="rpgui-container framed user-bar">
          <div className="avatar">
            <div className="hexTop"></div>
            <div className="hexBottom"></div>
          </div>
          <div className="user">
            <div className="user-info">
              <h1 className="username">Chubby_Bunny</h1>
              <h2 className="user-level">LVL 1</h2>
            </div>
            {/* <div className="exp-bar">
              <div className="bar">
                <div className="user-progress-line"><span className="user-exp"></span></div>
              </div>
            </div> */}
            <div className="rpgui-content">
              <div id="progress" className="rpgui-container experience-bar">
                <div>
                  <div id="hp-bar" data-value="0.4" className="rpgui-progress red bar" data-rpguitype="progress">
                    <div className=" rpgui-progress-track">
                      <div className="rpgui-progress-fill red herro user-progress-line">
                        <span className="user-exp"></span></div>
                    </div>
                    <div className=" rpgui-progress-left-edge"></div>
                    <div className=" rpgui-progress-right-edge"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};