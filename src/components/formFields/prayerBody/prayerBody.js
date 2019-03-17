import React, {Component} from 'react';

export default class PrayerBody extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="prayerRequestMessage">Prayer Request</label>
        <textarea onChange={this.props.handleOnChange} name="prayerRequestMessage" placeholder="Prayer Request" />
      </React.Fragment>
    );
  }
}