import React from "react";
import './Header.scss'

export default function Header() {
  return (
    <header id="user-container">
      <section className="master-header">
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
        
        <article id="nav-bar">
          <i className="fas fa-plus-circle fa-3x"></i>
          <i className="far fa-calendar-alt fa-3x"></i>
        </article>
      </section>

      <section className="burger">
        <input type="checkbox" />
        <div className="burgerlines">
          <span className="lines line1"></span>
          <span className="lines line2"></span>
          <span className="lines line3"></span>
        </div>
        <div className="skills menu-items">
          <div className="skills-bar">
            <div className="bar">
              <div className="info">
                <span>Strength</span>
              </div>
              <div className="progress-line"><span className="strength"></span></div>
              <div className="bar">
                <div className="info">
                  <span>Vitality</span>
                </div>
                <div className="progress-line"><span className="vitality"></span></div>
                <div className="bar">
                  <div className="info">
                    <span>Knowledge</span>
                  </div>
                  <div className="progress-line"><span className="knowledge"></span></div>
                  <div className="bar">
                    <div className="info">
                      <span>Social</span>
                    </div>
                    <div className="progress-line"><span className="social"></span></div>
                    <div className="bar">
                      <div className="info">
                        <span>Willpower</span>
                      </div>
                      <div className="progress-line"><span className="willpower"></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="total-goals">
            28/35 Success Missions!
          </div>
          <div className="login-streak">
            <img className="star-drop" src="https://emoji.gg/assets/emoji/1807-acnh-starfragment.png" alt=""/>
            You've logged in 5 days in a row!
          </div>
        </div>
      </section>
    </header>
  );
}