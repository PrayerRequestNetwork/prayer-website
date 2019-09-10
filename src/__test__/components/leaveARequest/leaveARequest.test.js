import React from 'react';
import { shallow } from 'enzyme';

import { mocks as PrayerRequestServiceMocks } from '../../../services/prayerRequestService';

import LeaveARequest from '../../../components/leaveARequest/leaveARequest';
import Form from '../../../components/forms/homepageForm/HomepageForm';
import Message from '../../../components/message/message';

jest.mock('../../../services/prayerRequestService');

describe('LeaveARequest', () => {
  it('Should Render LeaveARequest Component', () => {
    const wrapper = shallow(<LeaveARequest />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('Should Render Form Component', () => {
    const wrapper = shallow(<LeaveARequest />);
    const form = wrapper.find(Form);
    expect(form).toBeDefined();
  });

  describe('Handle Submit', () => {
    describe('On Success', () => {

      beforeEach(() => {
        PrayerRequestServiceMocks.postPrayerRequest.mockReturnValueOnce(
          new Promise(resolve => resolve('success'))
        );
      });

      it('Should toggle postingSuccess and displayMessage if PrayerRequestService returns success', async () => {
        const wrapper = shallow(<LeaveARequest />);
        const form = wrapper.find(Form);
        await form.props().handleOnSubmit({ prayerRequestMessage: 'TEST' });
        expect(wrapper.state().postingSuccess).toBe(true);
        expect(wrapper.state().displayMessage).toBe(true);
      });
      
      it('Should render message content with success text', async () => {
        const wrapper = shallow(<LeaveARequest />);
        const form = wrapper.find(Form);
        await form.props().handleOnSubmit({ prayerRequestMessage: 'TEST' });
        const message = wrapper.find(Message);
        const h4 = message.find('h4');
        const p = message.find('p');
        expect(message.debug()).toMatchSnapshot();
        expect(h4.hasClass('success-title')).toEqual(true);
        expect(p.hasClass('success-body')).toEqual(true);
      });
    });
    
    describe('On Failure', () => {

      beforeEach(() => {
        PrayerRequestServiceMocks.postPrayerRequest.mockReturnValueOnce(
          new Promise(resolve => resolve('error'))
        );
      });
      
      it('Should toggle postingFailure and displayMessage if PrayerRequestService returns error', async () => {
        const wrapper = shallow(<LeaveARequest />);
        const form = wrapper.find(Form);
        await form.props().handleOnSubmit({ prayerRequestMessage: 'TEST' });
        expect(wrapper.state().postingFailure).toBe(true);
        expect(wrapper.state().displayMessage).toBe(true);
      });
        
      it('Should render message content with failure text', async () => {
        const wrapper = shallow(<LeaveARequest />);
        const form = wrapper.find(Form);
        await form.props().handleOnSubmit({ prayerRequestMessage: 'TEST' });
        const message = wrapper.find(Message);
        const h4 = message.find('h4');
        const p = message.find('p');
        expect(message.debug()).toMatchSnapshot();
        expect(h4.hasClass('failure-title')).toEqual(true);
        expect(p.hasClass('failure-body')).toEqual(true);
      });
    });
  });
});