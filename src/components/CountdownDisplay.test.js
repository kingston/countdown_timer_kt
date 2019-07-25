import React from 'react';
import CountdownDisplay from './CountdownDisplay';
import { shallow } from 'enzyme';

it('renders initial state', () => {
  const initialState = shallow(
    <CountdownDisplay secondsRemaining={0} totalSeconds={0} />
  );
  expect(initialState).toMatchSnapshot();
});
