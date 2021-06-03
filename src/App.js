import React, { useState } from 'react'
import './App.css';

import Form from './components/form/Form'

import Clock from './components/Clock/Clock'
import formattedTime from './components/Clock/clockWork'

import Table from './components/table/Table'

function App() {
  
  const [runners, setRunners] = useState([])
  const [timeElapsed, updateTimeElapsed] = useState('00.00.00')
  
  
  let raceInterval

  const startRaceHandler = () => {
    raceInterval = setInterval(() => {
      updateTimeElapsed(formattedTime()) 
    }, 10);
    return raceInterval
  }

  const endRaceHandler = (raceInterval) => {
    clearInterval(raceInterval)
  }

  return (
    <div className="App">
      <a href="https://github.com/jakeRPowell/lap-tracker-react.git" target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
