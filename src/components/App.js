/* eslint-disable import/no-named-as-default */
import React from 'react';
import {Switch, Route} from 'react-router';

import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import NotFoundPage from '../screens/NotFoundPage';
import HomePage from '../screens/HomePage';
import AuthRoute from './AuthRoute';



class App extends React.Component {
  render() {
    return (
      <Switch>
        <AuthRoute exact path="/" component={HomePage}/>
        <AuthRoute path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login}/>
        <Route component={NotFoundPage}/>
      </Switch>
    );
  }
}


export default App;
