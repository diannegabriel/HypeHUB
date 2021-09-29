import React, { useState, useRef, useEffect } from "react";
import "./GoalsListItem.scss";
import useData from "./../hooks/useData";
// import Collapse from "react-bootstrap/Collapse";

export default function AnotherForm() {
  const [open, setOpen] = useState(false);
  const { updateGoalStatus } = useData();
  const formEl = useRef(null);

  useEffect(() => {
    formEl.current.querySelectorAll("[data-rpgui]").forEach((el) => {
      if (window.RPGUI) {
        const type = el.dataset.rpgui;
        window.RPGUI.create(el, type);
      }
    });
  }, []);

  return (

<form ref={formEl}>
          <div className="rpgui-container framed-grey">
          <label>Update Goal:</label>
            <input
              type='text'
              name='goal'
              autoComplete='off'
            />
            <br />
            <br />
            <label>Update the type:</label>
            <select
              className='rpgui-dropdown'
              name='goal-type'
              data-rpgui='dropdown'
            >
              <option value='Daily'>
                Daily Task
              </option>
              <option value='Mission'>Mission</option>
              <option value='Quest'>Quest</option>
            </select>
            <input
              className='rpgui-checkbox golden'
              type='checkbox'
              value='1'
              name='strength'
              data-rpgui='checkbox'
            />
            <label>STR&nbsp;</label>
            <input
              className='rpgui-checkbox golden'
              type='checkbox'
              value='1'
              name='vitality'
              data-rpgui='checkbox'
            />
            <label>VIT&nbsp;</label>
            <input
              className='rpgui-checkbox golden'
              type='checkbox'
              value='1'
              name='knowledge'
              data-rpgui='checkbox'
            />
            <label>KNO&nbsp;</label>
            <input
              className='rpgui-checkbox golden'
              type='checkbox'
              value='1'
              name='social'
              data-rpgui='checkbox'
            />
            <label>SOC&nbsp;</label>
            <input
              className='rpgui-checkbox golden'
              type='checkbox'
              value='1'
              name='willpower'
              data-rpgui='checkbox'
            />
            <label>WIL</label>
            <br />
            <br />
            <div className='rpgui-center'>
              <button className='rpgui-button' type='submit'>
                <p className='button-text'>E</p>
              </button>
              <button className='rpgui-button'>
                <p className='button-text'>D?</p>
              </button>
            </div>
          </div>
        </form>
  )}