import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

import './TimeInput.css';

function TimeInput() {
  return (
    <Form className="time-input">
      <Form.Field inline>
        <label>Countdown:</label>
        <Input placeholder="(Min)" />
        <Button primary>Start</Button>
      </Form.Field>
    </Form>
  );
}

export default TimeInput;
