import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Landing page</Link></li>
            <li><Link to="/blackjack">Blackjack</Link></li>
          </ul>
        </nav>
        <hr />
      </header>
    );
  }
}

export default Header;
