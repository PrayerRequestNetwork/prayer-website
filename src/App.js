import React, { Component } from 'react';

// Components
import Header from './components/header/header';
import LeaveARequest from './components/leaveARequest/leaveARequest';

import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <LeaveARequest />
      </main>
    );
  }
}

export default App;
