import React from 'react';
import PropTypes from 'prop-types';

class NavbarMenu extends React.Component {
  render() {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {this.props.children}
        </ul>
      </div>
    );
  }
}

NavbarMenu.propTypes = {
  children: PropTypes.element.isRequired
};


export default NavbarMenu;
