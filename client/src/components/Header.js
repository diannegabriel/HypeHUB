import React from "react";
import './Header.scss'
import User from './User'
import Nav from './Nav'

export default function Header() {
  return (
    <header id="user-container">
      <section className="master-header">
        <User />
        <Nav />
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