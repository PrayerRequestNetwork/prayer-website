import React, {Component} from 'react';
import ReCAPTCHA from '../../reCAPTCHA/reCAPTCHA';

export default class PrayerBody extends Component {

  state = {
    placeholder: 'Leave Your Request Here...',
  }

  onFocus = () => {
    this.setState({placeholder: ''});
  }

  onBlur = e => {
    let txt = e.target.value;
    if (!txt) {
      this.setState({placeholder: 'Leave Your Request Here...'});
    }
  }

  render() {
    return(
      <React.Fragment>
        <textarea 
          className="loading"
          onBlur={this.onBlur}
          onFocus={this.onFocus} 
          onChange={this.props.handleOnChange} 
          name="prayerRequestMessage" 
          placeholder={this.state.placeholder} 
        />
        <ReCAPTCHA />
        <button type="submit" disabled={this.props.submitDisabled}>Submit</button>
      </React.Fragment>
    );
  }
}