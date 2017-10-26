/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';

import NavbarComponent from './components/layout/Navbar';
import SidebarComponent from './components/layout/Sidebar';
import FooterComponent from './components/layout/Footer';
import {AuthenticatedRoute} from './Routes';

import Login from './screens/login';
import HomePage from './screens/HomePage';


class App extends Component {
  render() {
    return (
      <div className="main">
        <NavbarComponent />
        <div className="content-wrapper">
          <aside className="main-sidebar">
            <section className="sidebar">
              <SidebarComponent/>
            </section>
            <section className="content">
              <Switch>
                <Route path="/login" component={Login}/>
                <AuthenticatedRoute exact path="/" component={HomePage}/>
              </Switch>
            </section>
          </aside>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isLogged: !!state.authUser.token
  };
};

export default connect(mapStateToProps, null)(App);
