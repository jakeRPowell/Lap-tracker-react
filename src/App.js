import React, { useState } from "react";
import "./App.css";

import Form from "./components/form/Form";

import Clock from "./components/Clock/Clock";
import formattedTime from "./components/Clock/clockWork";
import { mostLaps, bestLap } from "./components/calculateResults";

import Table from "./components/table/Table";

function App() {
  const [runners, setRunners] = useState([]);
  const [timeElapsed, updateTimeElapsed] = useState("00.00.00");
  const [raceInterval, setRaceInterval] = useState();

  const startRaceHandler = () => {
    setRaceInterval(
      setInterval(() => {
        updateTimeElapsed(formattedTime());
      }, 10)
    );
  };

  const endRaceHandler = () => {
    clearInterval(raceInterval);
    const most = mostLaps(runners);
    console.log(most);
    const best = bestLap(runners);
  };

  return (
    <div className="App">
      <a
        href="https://github.com/jakeRPowell/lap-tracker-react.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
      <Form
        runners={runners}
        setRunners={setRunners}
        startRace={startRaceHandler}
        endRace={endRaceHandler}
      />
      <Clock timeElapsed={timeElapsed} />
      <Table
        timeElapsed={timeElapsed}
        runners={runners}
        setRunners={setRunners}
      />
    </div>
  );
}

export default App;
