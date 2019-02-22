import React, {Component} from 'react';

export default class Form extends Component {

  handleOnChange = (e) => {

    console.log(e.target.value)
  }

  render() {
    return(
      // email
      // prayer request
      <div>
        <label htmlFor="prayer-request-field">Prayer Request</label>
        <textarea onChange={this.handleOnChange} name="prayer-request-field" placeholder="Prayer Request"/>
      </div>
    );
  }
}
