import React from 'react';
import PropTypes from 'prop-types';

const NavbarMenu = function NavbarMenu(props) {
  return (
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
        {props.children}
      </ul>
    </div>
  );
};

NavbarMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};


export default NavbarMenu;
