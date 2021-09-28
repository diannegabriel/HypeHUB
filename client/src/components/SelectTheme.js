import "./SelectTheme.scss";
import useTheme from "../hooks/useTheme"; //think of better names for this
const setTheme = () => {
  //useTheme hook to set state...
};

const SelectTheme = () => {
  return (
    <footer id='select-theme'>
      <div className='rpgui-container framed'>
        <button className='rpgui-button'>
          <i className='fas fa-brain'></i>
          KNOWLEDGE
        </button>
        <button className='rpgui-button'>
          <i className='fas fa-address-book'></i>
          SOCIAL
        </button>
        <button className='rpgui-button'>
          <i className='fas fa-dumbbell'></i>
          STRENGTH
        </button>
        <button className='rpgui-button'>
          <i className='fas fa-heartbeat'></i>
          VITALITY
        </button>
        <button className='rpgui-button'>
          <i className='fas fa-fist-raised'></i>
          WILLPOWER
        </button>
      </div>
    </footer>
  );
};

export default SelectTheme;
