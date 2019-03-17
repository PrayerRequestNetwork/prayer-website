import React, {Component} from 'react';

// Assets
import headerBackground from '../../assets/edwin-andrade-158050-unsplash.jpg';

// Styles
import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <header style={{ backgroundImage: `url(${headerBackground})`}}>
        <h1>
          <span className="dropCap">P</span>rayer <span className="dropCap">R</span>equest <span className="dropCap">N</span>etwork</h1>
      </header>
    );
  }
}