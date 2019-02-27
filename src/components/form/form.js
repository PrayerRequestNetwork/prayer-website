import React, {Component} from 'react';

import './form.scss';

export default class Form extends Component {
  state = {
    prayerRequestField: '',
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
        <label htmlFor="prayerRequestField">Prayer Request</label>
        <input onChange={this.handleOnChange} name="prayerRequestField" placeholder="Prayer Request"/>
      </form>
    );
  }
}
