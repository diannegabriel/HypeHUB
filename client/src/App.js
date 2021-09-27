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
import axios from "axios";

function App() {
  const state = useData();
  //Token setup for spotifyAPI
  const [token, setToken] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/auth/token").then((res) => {
      console.log(res);
      setToken(res.data.access_token);
    });
  }, []);

  return (
    <>
      {!state.userId ? (
        <GamifyLogin />
      ) : (
        <>
          <Header />
          <Goals />
        </>
      )}

      {token ? <BattleTheme token={token} /> : <SpotifyAuth />}
    </>
  );
}

export default App;
