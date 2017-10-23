/**
 * Created by soufiaane on 7/8/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class SidebarComponent extends Component {
  render() {
    return (
      <ul className="sidebar-menu tree">
        <li className="active treeview menu-open">
          <a href="#" data-toggle="pull-right">
            <i className="fa fa-dashboard"/>
            <span>Dashboard</span>
            <span className="pull-right-container">
              <i className="fa fa-angle-left pull-right"/>
            </span>
          </a>
          <ul className="treeview-menu">
            <li><Link to="/"><i className="fa fa-circle-o"/> Dashboard v1</Link></li>
            <li className="active"><Link to="/"><i className="fa fa-circle-o"/> Dashboard v2</Link></li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default SidebarComponent;
