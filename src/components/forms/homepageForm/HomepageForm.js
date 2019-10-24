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
    // To ensure reCAPTCHA is being used
    // Using eslint-disable because create react app doesn't seem to work even though variable (grecaptcha) is defined globally
    // eslint-disable-next-line no-undef
    if (grecaptcha.getResponse()) {
      this.props.handleOnSubmit(this.state);
    }
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
