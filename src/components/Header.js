import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to="/">Earth</Link></li>
            <li><Link to="/moon">Moon</Link></li>
            <li><Link to="/mars">Mars</Link></li>
          </ul>
        </nav>
        <hr />
      </header>
    );
  }
}

export default Header;
