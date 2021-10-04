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
             <Header />
              <Goals
                dailyGoals={state.dailyGoals}
                missionGoals={state.missionGoals}
                questGoals={state.questGoals}
                />
            {state.token ? <SelectTheme token={state.token} /> : <SpotifyAuth />}
        </div>
      )}
    </>
  );
}

export default App;
