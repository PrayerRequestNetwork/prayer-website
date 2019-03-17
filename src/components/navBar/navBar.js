import React, {Component} from 'react';

import './navBar.scss';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Leave a Request</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    );
  }
}