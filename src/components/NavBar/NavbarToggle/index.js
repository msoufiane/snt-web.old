import React from 'react';

class NavbarToggle extends React.Component {
  render() {
    return (
      <a href="" className="sidebar-toggle" data-toggle="push-menu" role="button">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
        <span className="icon-bar"/>
      </a>
    );
  }
}

export default NavbarToggle;
