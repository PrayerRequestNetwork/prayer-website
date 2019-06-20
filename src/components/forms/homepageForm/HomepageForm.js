import React, {Component} from 'react';

// COMPONENTS
import PrayerBody from '../../formFields/prayerBody/prayerBody';

import './homepageForm.scss';

export default class Form extends Component {
  state = {
    prayerRequestMessage: '',
  }
  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.handleOnSubmit(this.state);
  }
  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <PrayerBody 
          handleOnChange={this.handleOnChange} 
          submitDisabled={this.props.submitDisabled}
        />
      </form>
    );
  }
}
