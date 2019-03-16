import React, { Component } from 'react';

// Services
import PrayerRequestService from './services/prayerRequestService';

// Components
import Form from './components/form/form';

import './App.css';

class App extends Component {

  handleOnSubmit = async formInfo => {
    const {prayerRequestMessage} = formInfo;
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
