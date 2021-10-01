import "./SelectTheme.scss";
import useTheme from "../hooks/useTheme"; //think of better names for this
import { useState } from "react";
import BattleTheme from "./BattleTheme";

const SelectTheme = (props) => {
  const [theme, setTheme] = useState(null);
  return (
    <footer id='select-theme'>
      <div className='rpgui-container framed'>
        <button className='rpgui-button' onClick={setTheme("knowledge")}>
          <i className='fas fa-brain'></i>
          KNOWLEDGE
        </button>
        <button className='rpgui-button'>
          <i className='fas fa-address-book' onClick={setTheme("social")}></i>
          SOCIAL
        </button>
        <button className='rpgui-button' onClick={setTheme("strength")}>
          <i className='fas fa-dumbbell'></i>
          STRENGTH
        </button>
        <button className='rpgui-button' onClick={setTheme("vitality")}>
          <i className='fas fa-heartbeat'></i>
          VITALITY
        </button>
        <button className='rpgui-button' onClick={setTheme("willpower")}>
          <i className='fas fa-fist-raised'></i>
          WILLPOWER
        </button>
      </div>

      {/* <BattleTheme theme={theme} token={props.token} /> */}
    </footer>
  );
};

export default SelectTheme;
