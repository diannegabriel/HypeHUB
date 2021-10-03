import React, { useState, useRef, useEffect } from "react";
import useData from "./../hooks/useData";
import "./GoalsListItem.scss";


export default function GoalUpdate({ goalId, goalType, reCollapse }) {
  //This is for updating the goal name
  const [goal, setGoal] = useState("");

  const { updateGoal, deleteGoal } = useData();


  const formEl = useRef(null);
  useEffect(() => {
    formEl.current.querySelectorAll("[data-rpgui]").forEach((el) => {
      if (window.RPGUI) {
        const type = el.dataset.rpgui;
        window.RPGUI.create(el, type);
      }
    });
  }, []);

  const handleDeleteClick = (event) => {
    event.preventDefault();
    deleteGoal({ goalId, goalType });
    //See parent component - this closes "edit mode"
    reCollapse(false)
  };

  const handleEditClick = (event) => {
    event.preventDefault();
    console.log(`edit called`);
    let updateInformation = {
      goalId,
      goalName: event.target[0].value,
      goalType: event.target[1].value,
      Strength: event.target[2].checked,
      Vitality: event.target[3].checked,
      Knowledge: event.target[4].checked,
      Social: event.target[5].checked,
      Willpower: event.target[6].checked,
    };

    updateGoal(updateInformation);
    //See parent component - this closes "edit mode"
    reCollapse(false)
  };
  
  return (
    <form onSubmit={handleEditClick} ref={formEl}>
      <div className="rpgui-container framed-grey">
        <label>Update Goal:</label>
        <input
          type="text"
          name="goal"
          value={goal}
          autoComplete="off"
          onChange={(e) => setGoal(e.target.value)}
          maxLength="30"
        />
        <br />
        <br />
        <label>Update the type:</label>
        <select
          className="rpgui-dropdown"
          name="goal-type"
          data-rpgui="dropdown"
        >
          <option value="Daily">Daily Task</option>
          <option value="Mission">Mission</option>
          <option value="Quest">Quest</option>
        </select>
        <input
          className="rpgui-checkbox golden"
          type="checkbox"
          value="1"
          name="strength"
          data-rpgui="checkbox"
        />
        <label>STR&nbsp;</label>
        <input
          className="rpgui-checkbox golden"
          type="checkbox"
          value="1"
          name="vitality"
          data-rpgui="checkbox"
        />
        <label>VIT&nbsp;</label>
        <input
          className="rpgui-checkbox golden"
          type="checkbox"
          value="1"
          name="knowledge"
          data-rpgui="checkbox"
        />
        <label>KNO&nbsp;</label>
        <input
          className="rpgui-checkbox golden"
          type="checkbox"
          value="1"
          name="social"
          data-rpgui="checkbox"
        />
        <label>SOC&nbsp;</label>
        <input
          className="rpgui-checkbox golden"
          type="checkbox"
          value="1"
          name="willpower"
          data-rpgui="checkbox"
        />
        <label>WIL</label>
        <br />
        <br />
        <div className="rpgui-center">
          <button className="rpgui-button" type="submit">
            <p className="button-text">E</p>
          </button>
          <button className="rpgui-button" onClick={handleDeleteClick}>
            <p className="button-text">D</p>
          </button>
        </div>
      </div>
    </form>
  );
}
