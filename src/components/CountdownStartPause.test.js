import React from 'react';
import CountdownStartPause from './CountdownStartPause';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<CountdownStartPause />);
});
