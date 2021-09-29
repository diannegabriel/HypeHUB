import React, { useState, useRef, useEffect } from "react";
import "./GoalsListItem.scss";
import useData from "./../hooks/useData";
import Collapse from "react-bootstrap/Collapse";

export default function GoalsListItem({goalId, status, title}) {
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

  const handleClick = () => {
    updateGoalStatus({
      goalId: goalId,
      status: status,
    });
  };

  if (status === 'complete') {
    status = <i class="nes-icon star"></i>;
  } else if (status === 'incomplete') {
    status = <i class="nes-icon star is-empty"></i>;
  } else if (status === 'in progress') {
    status = <i class="nes-icon star is-half"></i>;
  }

  return (
    <>
    <li className="goal-entry">
      <button onClick={handleClick} className="goals-status-name">{status}</button>
      <p className="goals-title-name">{title}</p>
      <div className="rpgui-icon sword edit-button" onClick={() => setOpen(!open)}></div>
      {/* <img src="https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/015a5440cba9551.png" className="pencil-edit-button" /> */}
    </li>
      <Collapse in={open}>
        <form ref={formEl}>
          <div className="rpgui-container framed-grey">
          <div className='rpgui-center'>
          <button className='rpgui-button golden'>
            <p className='button-text'>Delete</p>
          </button>
          </div>
          <br />
          <label>Update Goal:</label>
            <input
              type='text'
              name='goal'
              autoComplete='off'
            />
            <br />
            <br />
            <textarea
              name='description'
              rows='4'
              cols='50'
              placeholder='Goal Description'
            ></textarea>
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
                <p className='button-text'>Update</p>
              </button>
              
            </div>
          </div>
        </form>
      </Collapse>
    </>
  );
}
