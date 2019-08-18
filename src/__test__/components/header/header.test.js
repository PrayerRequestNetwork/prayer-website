import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../components/header/header'; 
import LeaveARequest from '../../../components/leaveARequest/leaveARequest';

describe('Header Component', () => {
  test('Should Render Header Component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('Should render LeaveARequest Component', () => {
    const wrapper = shallow(<Header />);
    const component = wrapper.find(LeaveARequest);
    expect(component).toBeDefined();
  });
});