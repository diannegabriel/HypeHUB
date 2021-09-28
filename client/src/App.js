import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
// import Login from './components/Login';
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
      {/* once authenticated, I want to show the select theme, from there I want to be able to set state and pass that in as props to the battletheme component... */}
      {/* !theme ? <SelectTheme /> : <BattleTheme token={state.token} theme={..theme} /> */}
      {/* <SelectTheme /> */}
    </>
  );
}

export default App;
