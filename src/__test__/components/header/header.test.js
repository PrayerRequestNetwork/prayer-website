import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../components/header/header'; 

describe('Header Component', () => {
  test('Should Render Header Component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});