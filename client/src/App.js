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

function App() {
  const state = useData();

  return (
    <>
      {!state.userId ? (
        <GamifyLogin />
      ) : (
        <>
          <Header />
          <Goals dailyGoals={state.dailyGoals} />
        </>
      )}

      {state.token ? <BattleTheme token={state.token} /> : <SpotifyAuth />}
    </>
  );
}

export default App;
