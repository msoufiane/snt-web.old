/**
 * Created by soufiaane on 7/25/17.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

/*
import React from 'react'
import {connect} from 'react-redux'

import {NavbarComponent, SidebarComponent, FooterComponent} from './components/layout';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <NavbarComponent/>
        <div className='content-wrapper' style={ this.props.authUser.token ? null : {margin: '0px'} }>
          <SidebarComponent/>
          <section className='content'>
            {this.props.children}
          </section>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.authUser
  };
};

export default connect(mapStateToProps)(App);
*/
