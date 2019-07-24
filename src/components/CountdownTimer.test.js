import React from 'react';
import CountdownTimer from './CountdownTimer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<CountdownTimer />);
});
