import React, { useState } from "react";
import "./rpgui.css";
import "./Modal.scss"

export default function GamifyModal(props) {
  const [goal, setGoal] = useState("");

  const validateForm = () => {
    return goal.length > 5
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  return (
    <form onSubmit={handleSubmit} show={props.show}>
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
          <select class="rpgui-dropdown" name="goal-type">
            <option value="Daily" selected>Daily Task</option>
            <option value="Mission">Mission</option>
            <option value="Quest">Quest</option>
          </select>
          <input class="rpgui-checkbox golden" type="checkbox" value="strength" /><label>STR&nbsp;</label>
          <input class="rpgui-checkbox golden" type="checkbox" value="vitality" /><label>VIT&nbsp;</label>
          <input class="rpgui-checkbox golden" type="checkbox" value="knowledge" /><label>KNO&nbsp;</label>
          <input class="rpgui-checkbox golden" type="checkbox" value="social" /><label>SOC&nbsp;</label>
          <input class="rpgui-checkbox golden" type="checkbox" value="willpower" /><label>WIL</label>
          <br />
          <br />
          <div className="rpgui-center">
          <button className="rpgui-button" type="submit" onClick={props.handleClose}>
            <p className="button-text">Enter</p>
          </button>
          </div>
        </div>
      </div>
    </div>
    </form>
  );
};