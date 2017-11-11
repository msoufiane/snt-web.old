import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import App from '../../App';

class AuthenticatedRoute extends React.Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={() => (this.props.isLogged ?
        (<App><Component /></App>)
        :
        (<Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />)
        )}
      />
    );
  }
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.func,
  isLogged: PropTypes.bool,
  location: PropTypes.object,
};

const mapStateToProps = state => ({
  isLogged: !!state.authUser.token,
});

export default connect(mapStateToProps, null)(AuthenticatedRoute);
