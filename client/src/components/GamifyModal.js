import React, { useState, useRef, useEffect } from "react";
import useData from "../hooks/useData";

import "./rpgui.css";
import "./Modal.scss";

export default function GamifyModal(props) {
  const [goal, setGoal] = useState("");

  const formEl = useRef(null);
  //Rename state === lot of changes. Group talk. (App.js, dbCreateGoal.js,useData.js)
  const { state, createGoal } = useData();


  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      userId: state.userId,
      goalName: event.target[0].value,
      goalDescription: event.target[1].value,
      goalType: event.target[2].value,
      Strength: event.target[3].checked,
      Vitality: event.target[4].checked,
      Knowledge: event.target[5].checked,
      Social: event.target[6].checked,
      Willpower: event.target[7].checked,
    };

    createGoal(formData);
  };

  useEffect(() => {
    formEl.current.querySelectorAll("[data-rpgui]").forEach((el) => {
      if (window.RPGUI) {
        const type = el.dataset.rpgui;
        window.RPGUI.create(el, type);
      }
    })
  }, [])

  return (
    <form onSubmit={handleSubmit} ref={formEl}>
    <div className="Modal">
      <div className="rpgui-content">
        <div className="rpgui-container framed add-goal-modal">
          <h1>Next Goal</h1>
          <hr />
          <label>Goal:</label>
          <input type="text" name="goal" value={goal} autoComplete="off" onChange={(e) => setGoal(e.target.value)} />
          <br/><br/>
          <textarea name="description" rows="4" cols="50" placeholder="Goal Description"></textarea>
          <br/><br/>
          <label>Select the type:</label>
          <select className="rpgui-dropdown" name="goal-type" data-rpgui="dropdown">
            <option value="Daily" selected>Daily Task</option>
            <option value="Mission">Mission</option>
            <option value="Quest">Quest</option>
          </select>
          <input className="rpgui-checkbox golden" type="checkbox" value="1" name="strength" data-rpgui="checkbox" /><label>STR&nbsp;</label>
          <input className="rpgui-checkbox golden" type="checkbox" value="1" name="vitality" data-rpgui="checkbox" /><label>VIT&nbsp;</label>
          <input className="rpgui-checkbox golden" type="checkbox" value="1" name="knowledge" data-rpgui="checkbox" /><label>KNO&nbsp;</label>
          <input className="rpgui-checkbox golden" type="checkbox" value="1" name="social" data-rpgui="checkbox" /><label>SOC&nbsp;</label>
          <input className="rpgui-checkbox golden" type="checkbox" value="1" name="willpower" data-rpgui="checkbox" /><label>WIL</label>
          <br />
          <br />
          <div className="rpgui-center">
          <button className="rpgui-button" type="submit">
            <p className="button-text">Enter</p>
          </button>
          </div>
        </div>
      </div>
    </form>
  );
}
