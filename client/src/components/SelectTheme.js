import "./SelectTheme.scss";
import { useState } from "react";
import BattleTheme from "./BattleTheme";

const SelectTheme = (props) => {
  const { token } = props;
  const [theme, setTheme] = useState();
  console.log("selectTheme props", props);
  console.log("selectTheme theme", theme);

  return (
    <>
      {!theme ? (
        <footer id='select-theme'>
          <div className='rpgui-container framed'>
            <button
              className='rpgui-button'
              onClick={() => setTheme("knowledge")}
            >
              <i className='fas fa-brain'></i>
              Knowledge
            </button>
            <button className='rpgui-button' onClick={() => setTheme("social")}>
              <i className='fas fa-address-book'></i>
              Social
            </button>
            <button
              className='rpgui-button'
              onClick={() => setTheme("strength")}
            >
              <i className='fas fa-dumbbell'></i>
              Strength
            </button>
            <button
              className='rpgui-button'
              onClick={() => setTheme("vitality")}
            >
              <i className='fas fa-heartbeat'></i>
              Vitality
            </button>
            <button
              className='rpgui-button'
              onClick={() => setTheme("willpower")}
            >
              <i className='fas fa-fist-raised'></i>
              Willpower
            </button>
          </div>
        </footer>
      ) : (
        <BattleTheme theme={theme} token={token} setTheme={setTheme} />
      )}
    </>
  );
};

export default SelectTheme;
