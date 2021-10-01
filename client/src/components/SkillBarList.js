import React from "react";
import useData from "../hooks/useData";
import "./SkillBarList.scss";
import "./rpgui.css";

export default function SkillBarList() {
  const { state } = useData();
  const strengthVal = state.userStrength;
  const vitalityVal = state.userVitality;
  const knowledgeVal = state.userKnowledge;
  const socialVal = state.userSocial;
  const willpowerVal = state.userWillpower;

  return (
    <div className="rpgui-container framed-golden skills-bar">
      <div className="rpgui-content">
        <div id="progress" className="rpgui-container experience-bar">
          <div>

            <div id="hp-bar" data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Strength
                <span>x1<div className="rpgui-icon sword strength-icon"></div></span>
              </div>

              <div className=" rpgui-progress-track">
                <div className="rpgui-progress-fill user-progress-line">
                  <span
                    className="attributes user-str"
                    style={{ width: `${strengthVal}%` }}
                  ></span>
                </div>
              </div>
              <div className=" rpgui-progress-left-edge"></div>
              <div className=" rpgui-progress-right-edge"></div>
            </div>

            <div data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Vitality
                <span>x1<i class="nes-icon is-small heart"></i></span>
              </div>

              <div className=" rpgui-progress-track">
                <div className="rpgui-progress-fill user-progress-line">
                  <span
                    className="attributes user-vit"
                    style={{ width: `${vitalityVal}%` }}
                  ></span>
                </div>
              </div>
              <div className=" rpgui-progress-left-edge"></div>
              <div className=" rpgui-progress-right-edge"></div>
            </div>

            <div id="hp-bar" data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Knowledge
                <span>x1<div className="rpgui-icon potion-green knowledge-icon"></div></span>
              </div>

              <div className=" rpgui-progress-track">
                <div className="rpgui-progress-fill user-progress-line">
                  <span
                    className="attributes user-kno"
                    style={{ width: `${knowledgeVal}%` }}
                  ></span>
                </div>
              </div>
              <div className=" rpgui-progress-left-edge"></div>
              <div className=" rpgui-progress-right-edge"></div>
            </div>

            <div id="hp-bar" data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Social
                <span>x1<i class="nes-icon coin is-small"></i></span>
              </div>

              <div className=" rpgui-progress-track">
                <div className="rpgui-progress-fill user-progress-line">
                  <span
                    className="attributes user-soc"
                    style={{ width: `${socialVal}%` }}
                  ></span>
                </div>
              </div>
              <div className=" rpgui-progress-left-edge"></div>
              <div className=" rpgui-progress-right-edge"></div>
            </div>


            <div id="hp-bar" data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Willpower
                <span>x1<div className="rpgui-icon shield willpower-icon"></div></span>
              </div>

              <div className=" rpgui-progress-track">
                <div className="rpgui-progress-fill user-progress-line">
                  <span
                    className="attributes user-wil"
                    style={{ width: `${willpowerVal}%` }}
                  ></span>
                </div>
              </div>
              <div className=" rpgui-progress-left-edge"></div>
              <div className=" rpgui-progress-right-edge"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
