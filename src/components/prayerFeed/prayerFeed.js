import React, {Component} from 'react';

// SERVICES
import PrayerRequestService from '../../services/prayerRequestService';

export default class PrayerFeed extends Component {

  state = {
    prayers: [],
  }
  componentDidMount = () => {
    const prayers = this.state.prayers;
    if (!(prayers && prayers.length)) { this.fetchPrayers(); }
  }
  
  fetchPrayers = async () => {
    const prs = new PrayerRequestService();
    let prayers; 
    try {
      prayers = await prs.getPrayers();
      if (prayers && prayers.length) {
        this.setState(Object.assign({}, this.state, {prayers}));
      }
    } catch (e){
      console.log(e);
    }
    
  }

  render () {
    const prayers = this.state.prayers;
    return(
      prayers && prayers.length ? 
        prayers.map(prayer => (
          <div key={prayer.id}>{prayer.body}</div>
        ))
        :
        null
    );
  }
}