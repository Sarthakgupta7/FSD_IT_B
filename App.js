import React, { useState } from 'react';
import { redirect } from 'react-router-dom';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Toggle Start/Stop
  const toggleStopwatch = () => {
    if (isRunning) {
      clearInterval(intervalId); // Stop the stopwatch
    } else {
      const id = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setHours((prevHours) => prevHours + 1);
            return 0;
          }
          return prevSeconds + 1;
        });
      }, 1000);
      setIntervalId(id); // Start the stopwatch
    }
    setIsRunning(!isRunning); // Toggle the running state
  };

  // Reset the stopwatch
  const resetStopwatch = () => {
    setSeconds(0);
    setHours(0);
    setIsRunning(false);
    clearInterval(intervalId);
  };

  return (
    <div style={{ textAlign: 'center', padding: '255px',margin:'80px',backgroundColor:'Lightsteelblue' }}>
      <h1 style={{backgroundColor:'cyan',height:'35px',}}>
        {String(hours).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}
      </h1>
      <div>
        <button onClick={toggleStopwatch} style={{backgroundColor:'lightgreen',margin:'10px',padding:'10px'}}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={resetStopwatch} style={{backgroundColor:'red',padding:'10px',margin:'10px'}}>Reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;