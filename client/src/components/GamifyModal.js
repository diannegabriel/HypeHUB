import React, { useState } from "react";
import useData from "../hooks/useData";
import "./rpgui.css";
import "./Modal.scss"

export default function GamifyModal(props) {
  const [goal, setGoal] = useState("");
  const { createGoal } = useData();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    let formData = {
      goalName: event.target[0].value,
      goalDescription: event.target[1].value,
      goalType: event.target[2].value
    }
    // console.log(`event0: ${event.target[0].value}`)
    // console.log(`event1: ${event.target[1].value}`)
    // console.log(`event2: ${event.target[2].value}`)

    //ISSUE: the check boxes all return 1. no way of telling if they have been checked or not?

    // console.log(`event3: ${event.target[3].value}`)
    // console.log(`event4: ${event.target[4].value}`)
    // console.log(`event5: ${event.target[5].value}`)
    // console.log(`event6: ${event.target[6].value}`)
    // console.log(`event7: ${event.target[7].value}`)
    
    createGoal(formData);
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
            <select className="rpgui-dropdown" name="goal-type">
              <option value="Daily" selected>Daily Task</option>
              <option value="Mission">Mission</option>
              <option value="Quest">Quest</option>
            </select>
            <input className="rpgui-checkbox golden" type="checkbox" value="1" name="strength"/><label>STR&nbsp;</label>
            <input className="rpgui-checkbox golden" type="checkbox" value="1" name="vitality" /><label>VIT&nbsp;</label>
            <input className="rpgui-checkbox golden" type="checkbox" value="1" name="knowledge" /><label>KNO&nbsp;</label>
            <input className="rpgui-checkbox golden" type="checkbox" value="1" name="social" /><label>SOC&nbsp;</label>
            <input className="rpgui-checkbox golden" type="checkbox" value="1" name="willpower" /><label>WIL</label>
            <br />
            <br />
            <div className="rpgui-center">
            <button className="rpgui-button" type="submit">
              <p className="button-text">Enter</p>
            </button>
            </div>
        </div>
      </div>
    </div>
    </form>
  );
};