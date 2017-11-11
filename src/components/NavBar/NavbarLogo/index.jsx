import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = function NavbarLogo() {
  return (
    <Link to="/" className="logo">
      <span className="logo-mini"><b>SA</b>M</span>
      <span className="logo-lg"><b>SentAd</b>Media</span>
    </Link>
  );
};

export default NavbarLogo;
