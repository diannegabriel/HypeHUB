import React from "react";
import './User.scss'

export default function User() {
  return (
    <article id="user-bar">
      <div className="avatar">
        <div className="hexTop"></div>
        <div className="hexBottom"></div>
      </div>
      <div className="user">
        <div className="user-info">
          <h1 className="username">Chubby_Bunny</h1>
          <h2 className="user-level">LVL 1</h2>
        </div>
        <div className="exp-bar">
          <div className="bar">
            <div className="user-progress-line"><span className="user-exp"></span></div>
          </div>
        </div>
      </div>
    </article>
  );
};