import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CountdownStartPause({ isRunning, onClick }) {
  const icon = isRunning ? 'pause' : 'play';
  return (
    <Button onClick={onClick} icon>
      <Icon name={icon} />
    </Button>
  );
}

CountdownStartPause.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default CountdownStartPause;
