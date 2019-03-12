import React, { Component } from 'react';

// Services
import PrayerRequestService from './services/prayerRequestService';

// Components
import Form from './components/forms/homepageForm/HomepageForm';

import './App.css';

class App extends Component {

  handleOnSubmit = async formInfo => {
    const {prayerRequestMessage} = formInfo;
    console.log({prayerRequestMessage});
    const prs = new PrayerRequestService();
    prs.postPrayerRequest({prayerBody: prayerRequestMessage});
  }

  render() {
    return (
      <Form 
        handleOnSubmit={this.handleOnSubmit}
      />
    );
  }
}

export default App;
