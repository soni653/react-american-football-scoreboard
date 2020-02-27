//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow"; 

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.
  //You'll need one for the home score and another for the away score.

  const [ value, setHome] = useState(21);
  const [ setValue, setAway]= useState(14);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{value}</div>
          </div>
          <div className="timer">03:01</div>
          <div className="away">
            <h2 className="away__name">Giants</h2>
            <div className="away__score">{setValue}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <section className="buttons">
        <div className="homeButtons">
            <button onClick = { () => setHome(value + 7)}
                className = 'homeButtons_touchdown'>
                          Touch Down
            </button>
            <button onClick = { () => setHome(value + 3)} 
              className = 'homeButtons__fieldGoal'>
                           Field Goal
            </button>
          </div>
        <div className = 'awayButtons'>
          <button onClick = { () => setAway(setValue + 7)}
              className = 'awayButtons__touchdown'>
                           Touch Down
          </button>
          <button onClick = { () => setAway(setValue + 3)}
              className = 'awayButtons__fieldGoal'>
                           Field Goal
          </button>
        </div>
        </section>
        </div>
  );
}

export default App;



