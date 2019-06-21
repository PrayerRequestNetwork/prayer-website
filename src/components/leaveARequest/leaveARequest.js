import React, {Component} from 'react';

// Services
import PrayerRequestService from '../../services/prayerRequestService';

// Components 
import Form from '../forms/homepageForm/HomepageForm';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

import './leaveARequest.scss';

export default class LeaveARequest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posting: false,
      postingSuccess: false,
      postingFailure: false,
    };
  }

  togglePosting = () => this.setState({posting: !this.state.posting});
  togglePostingSuccess = () => this.setState({ postingSuccess: !this.state.postingSuccess });
  togglePostingError = () => this.setState({ postingFailure: !this.state.postingFailure });

  handleOnSubmit = async formInfo => {
    const { prayerRequestMessage } = formInfo;
    if (prayerRequestMessage && prayerRequestMessage.length) {
      const prs = new PrayerRequestService();
      this.togglePosting();
      let result;
      try {
        result = await prs.postPrayerRequest({ prayerBody: prayerRequestMessage });
        this.togglePostingSuccess();
      } catch (e) {
        this.togglePostingError();
      }
      return result;
    }
  }

  render() {
    return(
      <div id="leaveARequest" className="leaveARequest">
        <Form
          handleOnSubmit={this.handleOnSubmit}
          submitDisabled={this.state.posting}
        />
        {
          this.state.posting &&
            <LoadingSpinner 
              show={this.state.posting}
              success={this.state.postingSuccess}
              error={this.state.postingFailure}
            />
        }
      </div>
    );
  }
}