import React from 'react';
import CountdownDisplay from './CountdownDisplay';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<CountdownDisplay />);
});
