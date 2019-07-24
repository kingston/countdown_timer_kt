import React from 'react';
import CountdownStartPause from './CountdownStartPause';
import TimeInput from './TimeInput';
import CountdownDisplay from './CountdownDisplay';
import SpeedInput from './SpeedInput';

function CountdownTimer() {
  return (
    <div>
      <TimeInput />
      <div>
        <CountdownDisplay />
        <CountdownStartPause />
      </div>
      <SpeedInput />
    </div>
  );
}

export default CountdownTimer;
