import React, { Component } from 'react';

// Services
import PrayerRequestService from './services/prayerRequestService';

// Components
import Form from './components/form/form';

import './App.css';

class App extends Component {

  handleOnSubmit = async props => {
    const prs = new PrayerRequestService();
    const accountRoles = await prs.getAccountRoles();
    console.log({accountRoles});
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
