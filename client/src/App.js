import './App.css';

function App() {
  return (
    <>
      <header id="user-container">
        <section className="master-header">
          <article id="user-bar">
            <div className="avatar">
              <div className="hexTop"></div>
              <div className="hexBottom"></div>
            </div>
            <div className="user">
              <div className="user-info">
                <h1 className="username">Chubby_Bunny</h1>
                <h2 className="user-level">LVL 1</h2>
              </div>
              <div className="exp-bar">
                <div className="bar">
                  <div className="user-progress-line"><span className="user-exp"></span></div>
                </div>
              </div>
            </div>
          </article>
          
          <article id="nav-bar">
            <i className="fas fa-plus-circle fa-3x"></i>
            <i className="far fa-calendar-alt fa-3x"></i>
          </article>
        </section>

        <section class="burger">
          <input type="checkbox" />
          <div class="burgerlines">
            <span class="lines line1"></span>
            <span class="lines line2"></span>
            <span class="lines line3"></span>
          </div>
          <div class="skills menu-items">
            <div class="skills-bar">
              <div class="bar">
                <div class="info">
                  <span>Strength</span>
                </div>
                <div class="progress-line"><span class="strength"></span></div>
                <div class="bar">
                  <div class="info">
                    <span>Vitality</span>
                  </div>
                  <div class="progress-line"><span class="vitality"></span></div>
                  <div class="bar">
                    <div class="info">
                      <span>Knowledge</span>
                    </div>
                    <div class="progress-line"><span class="knowledge"></span></div>
                    <div class="bar">
                      <div class="info">
                        <span>Social</span>
                      </div>
                      <div class="progress-line"><span class="social"></span></div>
                      <div class="bar">
                        <div class="info">
                          <span>Willpower</span>
                        </div>
                        <div class="progress-line"><span class="willpower"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="total-goals">
              28/35 Success Missions!
            </div>
            <div class="login-streak">
              <img class="star-drop" src="https://emoji.gg/assets/emoji/1807-acnh-starfragment.png" />
              You've logged in 5 days in a row!
            </div>
          </div>
        </section>
      </header>
      
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
