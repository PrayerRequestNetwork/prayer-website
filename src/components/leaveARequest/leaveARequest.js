import React, {Component} from 'react';

// Services
import PrayerRequestService from '../../services/prayerRequestService';
import copy from '../../copy/copy';

// Components 
import Form from '../forms/homepageForm/HomepageForm';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';
import Message from '../message/message';

// Styles
import './leaveARequest.scss';

export default class LeaveARequest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayMessage: false,
      posting: false,
      postingSuccess: false,
      postingFailure: false,
    };
  }

  toggleDisplayMessage = () => this.setState({displayMessage: !this.state.displayMessage});

  togglePosting = () => this.setState({posting: !this.state.posting});

  togglePostingSuccess = () => this.setState({ postingSuccess: !this.state.postingSuccess });

  togglePostingFailure = () => this.setState({ postingFailure: !this.state.postingFailure });
  
  showHandler = () => {
    this.toggleDisplayMessage();
    this.togglePosting();

    if (this.state.postingSuccess) { this.togglePostingSuccess(); }
    if (this.state.postingFailure) { this.togglePostingFailure(); }
  }

  handleOnSubmit = async formInfo => {
    const { prayerRequestMessage } = formInfo;
    if (prayerRequestMessage && prayerRequestMessage.length) {
      const prs = new PrayerRequestService();
      this.togglePosting();
      try {
        const result = await prs.postPrayerRequest({ prayerBody: prayerRequestMessage });
        if (result === 'error') { throw new Error(); }
        this.togglePostingSuccess();
        this.toggleDisplayMessage();
      } catch (e) {
        this.togglePostingFailure();
        this.toggleDisplayMessage();
      }
    }
  }

  renderMessageContent = () => {
    const success = <div>
      <h4 className="success-title">{copy.postingPrayer.successTitle}</h4>
      <p className="success-body">{copy.postingPrayer.successBody}</p>
    </div>;

    const failure = <div>
      <h4 className="failure-title">{copy.postingPrayer.failureTitle}</h4>
      <p className="failure-body">{copy.postingPrayer.failureBody}</p>
    </div>;

    return (
      <Message showHandler={this.showHandler}>
        {
          this.state.postingFailure
            ? failure
            : success
        }
      </Message>
    );
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
        {
          this.state.displayMessage && 
            this.renderMessageContent()
        }
      </div>
    );
  }
}