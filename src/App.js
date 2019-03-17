import React, { Component } from 'react';

// Services
import PrayerRequestService from './services/prayerRequestService';

// Components
import Form from './components/forms/homepageForm/HomepageForm';
import PrayerFeed from './components/prayerFeed/prayerFeed';
import Header from './components/header/header';

import './App.scss';

class App extends Component {

  handleOnSubmit = async formInfo => {
    const {prayerRequestMessage} = formInfo;
    console.log({prayerRequestMessage});
    const prs = new PrayerRequestService();
    prs.postPrayerRequest({prayerBody: prayerRequestMessage});
  }

  render() {
    /*
      <main>
      <header>
        <h1> title</h1>
        
      </header>
    
    */
    return (
      <main>
        <Header />
        <Form
          handleOnSubmit={this.handleOnSubmit}
        />
        <PrayerFeed />
      </main>
    );
  }
}

export default App;
