import React, {Component} from 'react';

import './form.scss';

export default class Form extends Component {
  state = {
    prayerRequestMessage: '',
  }
  handleOnChange = e => {
    this.setState(Object.assign({}, this.state, {[e.target.name]: e.target.value}));
  }
  handleOnSubmit = e => {
    e.preventDefault();
    this.props.handleOnSubmit(Object.assign({}, this.state));
  }
  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor="prayerRequestMessage">Prayer Request</label>
        <input onChange={this.handleOnChange} name="prayerRequestMessage" placeholder="Prayer Request"/>
      </form>
    );
  }
}
