import React from 'react';
import { Link } from 'react-router-dom';

const MenuTree = function MenuTree() {
  return (
    <ul className="sidebar-menu tree" data-widget="tree">
      <li>
        <Link to="/dashboard">
          <i className="fa fa-dashboard" /> <span>Dashboard</span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuTree;
