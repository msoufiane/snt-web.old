/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import NavbarComponent from './components/layout/Navbar';
import SidebarComponent from './components/layout/Sidebar';
import FooterComponent from './components/layout/Footer';
import ContentWrapperComponent from './components/layout/ContentWrapper';
import {AuthenticatedRoute} from './Routes';

import Login from './screens/login';
import HomePage from './screens/HomePage';


class App extends Component {
  render() {
    const {isLogged} = this.props;
    return (
      <div className="main">
        <NavbarComponent isLogged={isLogged}/>
        <ContentWrapperComponent isLogged={isLogged}>
          <aside className={isLogged ? "main-sidebar" : ""}>
            <section className="sidebar">
              {isLogged && <SidebarComponent/>}
            </section>
            <section className="content">
              <Switch>
                <Route path="/login" component={Login}/>
                <AuthenticatedRoute exact path="/" component={HomePage}/>
              </Switch>
            </section>
          </aside>
        </ContentWrapperComponent>
        {isLogged && <FooterComponent/>}
      </div>
    );
  }
}

App.propTypes = {
  isLogged: PropTypes.bool
};


const mapStateToProps = state => {
  return {
    isLogged: !!state.authUser.token
  };
};

export default connect(mapStateToProps, null)(App);
