/**
 * Created by soufiaane on 7/8/17.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import ProfileContainer from '../../../containers/Profile';

import NotificationsComponent from './NotificationsComponent';
import MessagesComponent from './MessagesComponent';
import TasksComponent from './TasksComponent';

class NavbarComponent extends Component {
  render() {
    const {isLogged} = this.props;
    console.log('NavbarComponent', isLogged);
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
          <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
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
              <ProfileContainer/>
            </ul>
          </div>
        </nav>
        }
      </header>
    );
  }
}

export default NavbarComponent;
