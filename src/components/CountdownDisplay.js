import React from 'react';
import PropTypes from 'prop-types';

import './CountdownDisplay.css';

function CountdownDisplay({ secondsRemaining, totalSeconds }) {
  const minutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (secondsRemaining % 60).toString().padStart(2, '0');
  return (
    <div className="countdown-display">
      {minutes}:{seconds}
    </div>
  );
}

CountdownDisplay.propTypes = {
  secondsRemaining: PropTypes.number.isRequired,
  totalSeconds: PropTypes.number.isRequired,
};

export default CountdownDisplay;
