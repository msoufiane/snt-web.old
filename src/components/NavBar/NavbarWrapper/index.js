import React from 'react';
import PropTypes from 'prop-types';
import NavbarLogo from '../NavbarLogo';
import NavbarMenu from '../NavbarMenu';
import NavbarToggle from '../NavbarToggle';


class NavbarWrapper extends React.Component {
  render() {
    return (
      <header className="main-header">
        <NavbarLogo />
        <nav className="navbar navbar-static-top">
          <NavbarToggle />
          <NavbarMenu>
            {this.props.children}
          </NavbarMenu>
        </nav>
      </header>
    );
  }
}

NavbarWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};


export default NavbarWrapper;
