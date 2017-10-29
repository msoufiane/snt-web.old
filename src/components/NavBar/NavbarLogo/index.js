import React from 'react';
import {Link} from 'react-router-dom';

class NavbarLogo extends React.Component {
  render() {
    return (
      <Link to="/" className="logo">
        <span className="logo-mini"><b>SA</b>M</span>
        <span className="logo-lg"><b>SentAd</b>Media</span>
      </Link>
    );
  }
}

export default NavbarLogo;
