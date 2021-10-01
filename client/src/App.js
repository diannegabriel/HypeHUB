import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import SpotifyAuth from "./components/SpotifyAuth";
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

      {state.token ? <SelectTheme token={state.token} /> : <SpotifyAuth />}
    </>
  );
}

export default App;
