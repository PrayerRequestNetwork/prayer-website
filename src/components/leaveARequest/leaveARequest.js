import React, {Component} from 'react';

// Services
import PrayerRequestService from '../../services/prayerRequestService';

// Components 
import Form from '../forms/homepageForm/HomepageForm';
import PrayerFeed from '../prayerFeed/prayerFeed';

// Assets
import leaveARequestBackground from '../../assets/milada-vigerova-36934-unsplash.jpg';
import headerBackground from '../../assets/edwin-andrade-158050-unsplash.jpg';

import './leaveARequest.scss';

export default class LeaveARequest extends Component {

  handleOnSubmit = async formInfo => {
    const { prayerRequestMessage } = formInfo;
    console.log({ prayerRequestMessage });
    if (prayerRequestMessage && prayerRequestMessage.length) {
      const prs = new PrayerRequestService();
      prs.postPrayerRequest({ prayerBody: prayerRequestMessage });

    }
  }

  render() {
    return(
      <section id="leaveARequest" className="leaveARequest">
        <div>
          <h2>Leave a Request</h2>
        </div>
        <Form
          handleOnSubmit={this.handleOnSubmit}
        />
      </section>
    );
  }
}