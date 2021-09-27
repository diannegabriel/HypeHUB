import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";
// import Login from './components/Login';
import SpotifyAuth from "./components/SpotifyAuth";
import BattleTheme from "./components/BattleTheme";
import Goals from "./components/Goals";
import Header from "./components/Header";

function App() {
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
    // <Login />
    <>
      <Header />
      <Goals />
      {token ? <BattleTheme token={token} /> : <SpotifyAuth />}
    </>
  );
}

export default App;
