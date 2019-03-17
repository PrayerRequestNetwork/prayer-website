import React, {Component} from 'react';

// Services
import PrayerRequestService from '../../services/prayerRequestService';

// Components 
import Form from '../forms/homepageForm/HomepageForm';
import PrayerFeed from '../prayerFeed/prayerFeed';

import './leaveARequest.scss';

export default class LeaveARequest extends Component {

  handleOnSubmit = async formInfo => {
    const { prayerRequestMessage } = formInfo;
    console.log({ prayerRequestMessage });
    const prs = new PrayerRequestService();
    prs.postPrayerRequest({ prayerBody: prayerRequestMessage });
  }

  render() {
    return(
      <section className="leaveARequest">
        <h2>Leave a Request</h2>
        <Form
          handleOnSubmit={this.handleOnSubmit}
        />
      </section>
    );
  }
}