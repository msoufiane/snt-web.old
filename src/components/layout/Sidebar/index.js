/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NavItem from './navUtils';


class SidebarComponent extends React.Component {
  render() {
    const isLogged = !!this.props.token;
    return (
      <aside className={isLogged ? "main-sidebar" : ""}>
        {isLogged &&
        <section className="sidebar">
          <ul className="sidebar-menu">
            <NavItem to="/dashboard" shouldExpand={false}>
              <i className="fa fa-dashboard"/> <span>Dashboard1</span>
            </NavItem>

            <NavItem to="" shouldExpand={true}>
              <i className="fa fa-pie-chart"/>
              <span>Charts</span>
              <span className="pull-right-container">
								<i className="fa fa-angle-left pull-right"/>
							</span>
            </NavItem>
          </ul>
        </section>
        }
      </aside>
    );
  }
}

SidebarComponent.prototype = {
  isLogged: PropTypes.bool,
  token: PropTypes.string
};

const mapStateToProps = (state) => {
  return {
    ...state.authUser,
  };
};

export default connect(mapStateToProps)(SidebarComponent);
