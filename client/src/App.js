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
      {!state.userId ? (
        <GamifyLogin />
        ) : (
          <div id="overall-body">
            <header id='header-container'>
             <Header />
            </header>
            <main id="main-container" className="rpgui-content">
              <Goals
                dailyGoals={state.dailyGoals}
                missionGoals={state.missionGoals}
                questGoals={state.questGoals}
                />
            </main>
            <footer id='spotify-auth'>
            {state.token ? <SelectTheme token={state.token} /> : <SpotifyAuth />}
            </footer>
        </div>
      )}
    </>
  );
}

export default App;
