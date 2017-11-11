import React from 'react';
import { Link } from 'react-router-dom';

class MenuTree extends React.Component {
  render() {
    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        <li>
          <Link to="/dashboard">
            <i className="fa fa-dashboard" /> <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default MenuTree;
