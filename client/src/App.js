import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import SpotifyAuth from "./components/SpotifyAuth";
import BattleTheme from "./components/BattleTheme";
import Goals from "./components/Goals";
import Header from "./components/Header";
import GamifyLogin from "./components/GamifyLogin";
import useData from "./hooks/useData";
import SelectTheme from "./components/SelectTheme";

function App() {
  const { state } = useData();

  return (
    <>
      {/* <div className="rpgui-content full-page">
      <div className="rpgui-container framed full-page"> */}

      {!state.userId ? (
        <GamifyLogin />
      ) : (
        <>
          <Header />
          <Goals
            dailyGoals={state.dailyGoals}
            missionGoals={state.missionGoals}
            questGoals={state.questGoals}
          />
        </>
      )}

      {state.token ? <BattleTheme token={state.token} /> : <SpotifyAuth />}
      {/* {state.token ? <SelectTheme token={state.token} /> : <SpotifyAuth />} */}
      {/* Can I initialize a component with an onClick? - I tried setting the theme then rendering -- no go... */}
      {/* once authenticated, I want to show the select theme, from there I want to be able to set state and pass that in as props to the battletheme component... */}
      {/* !theme ? <SelectTheme /> : <BattleTheme token={state.token} theme={..theme} /> */}
      {/* <SelectTheme /> */}
      {/* </div>
    </div> */}
    </>
  );
}

export default App;
