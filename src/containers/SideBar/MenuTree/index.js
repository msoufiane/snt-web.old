import React from 'react';
import {Link} from 'react-router-dom';

class MenuTree extends React.Component {
  render() {
    return (
      <ul className="sidebar-menu tree" data-widget="tree">
        <li>
          <Link to="/dashboard">
            <i className="fa fa-dashboard"/> <span>Dashboard</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default MenuTree;
/*
<li className="treeview">
  <a href="#">
    <i className="fa fa-dashboard"/> <span>Dashboard</span>
    <span className="pull-right-container">
      <i className="fa fa-angle-left pull-right"/>
    </span>
  </a>
  <ul className="treeview-menu" style={{display: "none"}}>
    <li><a href="index.html"><i className="fa fa-circle-o"/> Dashboard v1</a></li>
    <li className="active"><a href="index2.html"><i className="fa fa-circle-o"/> Dashboard v2</a></li>
  </ul>
</li>
 */
