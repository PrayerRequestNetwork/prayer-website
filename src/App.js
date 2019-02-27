import React, { Component } from 'react';

// Components
import Form from './components/form/form';

import './App.css';

class App extends Component {

  handleOnSubmit = props => {
    console.log(props);
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
