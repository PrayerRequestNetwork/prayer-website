import React, {Component} from 'react';

import './navBar.scss';

export default class NavBar extends Component {
  onClick = e => {
    e.preventDefault();
    let href = e.target.href;
    let id = /#(.*)/gm.exec(href)[1];
    if (id) {
      let el = document.getElementById(id);
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
  render() {
    return (
      <nav onClick={this.onClick} >
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#leaveARequest">Leave a Request</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    );
  }
}