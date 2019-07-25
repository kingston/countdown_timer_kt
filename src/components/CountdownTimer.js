import React from 'react';
import CountdownStartPause from './CountdownStartPause';
import TimeInput from './TimeInput';
import CountdownDisplay from './CountdownDisplay';
import SpeedInput from './SpeedInput';

import './CountdownTimer.css';

function CountdownTimer() {
  return (
    <div className="countdown-timer">
      <TimeInput />
      <div className="display-row">
        <CountdownDisplay />
        <CountdownStartPause />
      </div>
      <SpeedInput />
    </div>
  );
}

export default CountdownTimer;
