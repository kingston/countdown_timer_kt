import React from 'react';
import { Button } from 'semantic-ui-react';

function SpeedInput() {
  return (
    <Button.Group>
      <Button active>1.0X</Button>
      <Button>1.5X</Button>
      <Button>2.0X</Button>
    </Button.Group>
  );
}

export default SpeedInput;
