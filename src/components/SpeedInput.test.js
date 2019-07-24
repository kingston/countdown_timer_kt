import React from 'react';
import SpeedInput from './SpeedInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<SpeedInput />);
});
