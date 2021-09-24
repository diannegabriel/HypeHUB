import './App.scss';
// import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    // <Login />
    <>
      <Header />
      
      <main id="main-container">
        <section className="goals-box">
          <article className="daily goals">
            <h3>Daily Tasks</h3>
            <li className="goal-entry">
              Eat 1500 cals
            </li>
            <div className="goal-entry">
              Drink woter
            </div>
            <div className="goal-entry">
              Workout
            </div>
            <div className="goal-entry">
              Meditate
            </div>
            <div className="goal-entry">
              Solve 20 katas
            </div>
            <div className="goal-entry">
              Read 10 pages of a book
            </div>
            <div className="goal-entry">
              Sleep 8 hrs
            </div>
            <div className="goal-entry">
              Take meds
            </div>
            <div className="goal-entry">
              Eat 1500 cals
            </div>
            <div className="goal-entry">
              Drink woter
            </div>
            <div className="goal-entry">
              Workout
            </div>
            <div className="goal-entry">
              Meditate
            </div>
            <div className="goal-entry">
              Solve 20 katas
            </div>
            <div className="goal-entry">
              Read 10 pages of a book
            </div>
            <div className="goal-entry">
              Sleep 8 hrs
            </div>
            <div className="goal-entry">
              Take meds
            </div>
          </article>

          <article className="short goals">
            <h3>Missions</h3>
            <div className="goal-entry">
              Lose 5lbs
            </div>
            <div className="goal-entry">
              Go outside
            </div>
          </article>

          <article className="long goals">
            <h3>Quests</h3>
            <div className="goal-entry">
              Go to Mars
            </div>
            <div className="goal-entry">
              Become president
            </div>
          </article>

        </section>
      </main>

      <footer id="battle-theme">
        Battle Theme!
      </footer>
    </>
  );
}

export default App;
