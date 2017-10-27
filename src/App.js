/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import NavbarComponent from './components/layout/Navbar';
import SidebarComponent from './components/layout/Sidebar';
import FooterComponent from './components/layout/Footer';


class App extends Component {
  render() {
    return (
        <div className="main">
          <NavbarComponent/>
          <div className="content-wrapper">
            <aside className="main-sidebar">
              <section className="sidebar">
                <SidebarComponent/>
              </section>
              <section className="content">
                {this.props.children}
              </section>
            </aside>
          </div>
          <FooterComponent/>
        </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

const mapStateToProps = state => {
  return {
    isLogged: !!state.authUser.token
  };
};

export default connect(mapStateToProps, null)(App);
