/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NotificationsComponent from './NotificationsComponent';
import MessagesComponent from './MessagesComponent';
import ProfileComponent from './ProfileComponent';
import TasksComponent from './TasksComponent';

class NavbarComponent extends React.Component {
  render() {
    const {isLogged} = this.props;

    return (
      <header className="main-header">
        {isLogged &&
        <Link to="/" className="logo">
          <span className="logo-mini"><b>SA</b>M</span>
          <span className="logo-lg"><b>SentAd</b>Media</span>
        </Link>
        }
        {isLogged &&
        <nav className="navbar navbar-static-top">
          <a href="/" className="sidebar-toggle" data-toggle="offcanvas" role="button">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </a>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <MessagesComponent/>
              <NotificationsComponent/>
              <TasksComponent/>
              <ProfileComponent/>
            </ul>
          </div>
        </nav>
        }
      </header>
    );
  }
}

NavbarComponent.prototype = {
  isLogged: PropTypes.bool
};

const mapStateToProps = (state) => {
  return {
    isLogged: !!state.authUser.token
  };
};

export default connect(mapStateToProps)(NavbarComponent);
