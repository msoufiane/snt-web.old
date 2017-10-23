/* eslint-disable import/no-named-as-default */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, Switch} from 'react-router-dom';
import NavbarComponent from './layout/Navbar';
import SidebarComponent from './layout/Sidebar';
import FooterComponent from './layout/Footer';
import ContentWrapperComponent from './layout/ContentWrapper';

import Login from '../screens/login';
import HomePage from '../screens/HomePage';


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
          </aside>

          <section className="content">
            <Switch>
              <Route path="/login" component={Login}/>
              <AuthenticatedRoute exact path="/" component={HomePage}/>
            </Switch>
          </section>

        </ContentWrapperComponent>
        {isLogged && <FooterComponent/>}
      </div>
    );
  }
}

const AuthenticatedRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    props.isLogged ? (<Component {...props}/>) :
      (<Redirect to={{pathname: '/login', state: {from: props.location}}}/>)
  )}/>
);

const mapStateToProps = state => {
  return {
    isLogged: !!state.authUser.token
  };
};


export default connect(mapStateToProps, null)(App);
