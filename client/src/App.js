import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  //Token setup for spotifyAPI
  const [token, setToken] = useState("");
  

  useEffect(() => {
    async function getToken() {
      const response = await fetch("/auth/token");
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, []);

  return (
    <>
    {/* { !state.userId ? <GamifyLogin /> : */}
    <>
    <Header />
    <Goals />
    </>
  {/* } */}
      
      {/* {token ? <BattleTheme token={token} /> : <SpotifyAuth />}  */}
    </>
  );
}

export default App;
