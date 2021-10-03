import React from "react";
import useData from "../hooks/useData";
import "./SkillBarList.scss";
import "./rpgui.css";

export default function SkillBarList() {
  const { state } = useData();
  const strengthVal = state.userStrength % 100;
  const strengthLvl = Math.floor(state.userStrength / 100);

  const vitalityVal = state.userVitality % 100;
  const vitalityLvl = Math.floor(state.userVitality / 100);

  const knowledgeVal = state.userKnowledge % 100;
  const knowledgeLvl = Math.floor(state.userKnowledge / 100);

  const socialVal = state.userSocial % 100;
  const socialLvl = Math.floor(state.userSocial / 100);

  const willpowerVal = state.userWillpower % 100;
  const willpowerLvl = Math.floor(state.userWillpower / 100);


  return (
    <div className="rpgui-container framed-golden skills-bar">
      <div className="rpgui-content">
        <div id="progress" className="rpgui-container experience-bar">
          <div>

            <div id="hp-bar" data-value="0.4" className="rpgui-progress bar" data-rpguitype="progress">
              <div className="skill-attribute-name">
                Strength
                <span>x{strengthLvl}<div className="rpgui-icon sword strength-icon"></div></span>
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
                <span>x{vitalityLvl}<i class="nes-icon is-small heart"></i></span>
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
                <span>x{knowledgeLvl}<div className="rpgui-icon potion-green knowledge-icon"></div></span>
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
                <span>x{socialLvl}<i class="nes-icon coin is-small"></i></span>
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
                <span>x{willpowerLvl}<div className="rpgui-icon shield willpower-icon"></div></span>
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
