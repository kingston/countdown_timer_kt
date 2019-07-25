import React, { useState } from 'react';
import CountdownStartPause from './CountdownStartPause';
import TimeInput from './TimeInput';
import CountdownDisplay from './CountdownDisplay';
import CountdownStatus from './CountdownStatus';
import SpeedInput from './SpeedInput';

import './CountdownTimer.css';

function CountdownTimer() {
  const [inputMinutes, setInputMinutes] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [speed, setSpeed] = useState(1);

  const onInputMinutesChange = (e, value) => {
    setInputMinutes(value.value);
  };

  const onStart = () => {
    const minutes = parseFloat(inputMinutes);

    if (isNaN(minutes) || minutes < 0) return;

    const totalSeconds = Math.floor(60 * minutes);

    setIsRunning(true);
    setSecondsRemaining(totalSeconds);
    setTotalSeconds(totalSeconds);
  };

  const onStartPause = () => {
    setIsRunning(!isRunning);
  };

  const onSpeedChange = newSpeed => setSpeed(newSpeed);

  return (
    <div className="countdown-timer">
      <TimeInput
        value={inputMinutes}
        onChange={onInputMinutesChange}
        onStart={onStart}
      />
      <CountdownStatus secondsRemaining={0} totalSeconds={totalSeconds} />
      <div className="display-row">
        <CountdownDisplay
          secondsRemaining={secondsRemaining}
          totalSeconds={totalSeconds}
        />
        <CountdownStartPause isRunning={isRunning} onClick={onStartPause} />
      </div>
      <SpeedInput speed={speed} onChange={onSpeedChange} />
    </div>
  );
}

export default CountdownTimer;
