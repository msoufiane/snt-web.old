import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';


const AuthRoute = ({component: Component, authUser, ...rest}) => (
  <Route
    {...rest}
    render={props => (authUser.token === "" ? <Redirect to={{pathname: '/login'}}/> : <Component {...props} /> )}
  />
);

AuthRoute.prototype = {
  component: PropTypes.element.isRequired,
  authUser: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    authUser: state.authUser,
  };
}

export default withRouter(connect(mapStateToProps, null)(AuthRoute));
