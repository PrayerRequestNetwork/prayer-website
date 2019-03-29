import React, {Component} from 'react';

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
          onBlur={this.onBlur}
          onFocus={this.onFocus} 
          onChange={this.props.handleOnChange} 
          name="prayerRequestMessage" 
          placeholder={this.state.placeholder} 
        />
        <button type="submit">Submit</button>
      </React.Fragment>
    );
  }
}