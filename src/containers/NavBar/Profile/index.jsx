/**
 * Created by soufiaane on 7/3/17.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutRequest } from '../../../actions/login';

class ProfileContainer extends Component {
  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const { user } = this.props;
    const capitaize = string => string.charAt(0).toUpperCase() + string.slice(1);

    return (
      <li className="dropdown user user-menu">
        <a href="/" className="dropdown-toggle" data-toggle="dropdown">
          <img src="img/user2-160x160.jpg" className="user-image" alt="User" />
          <span className="hidden-xs">{capitaize(user.first_name)} {capitaize(user.last_name)}</span>
        </a>
        <ul className="dropdown-menu">
          <li className="user-header">
            <img src="img/user2-160x160.jpg" className="img-circle" alt="User" />
            <p>
              {capitaize(user.first_name)} {capitaize(user.last_name)} - {user.username}
            </p>
          </li>

          <li className="user-footer">
            <div className="pull-left">
              <a href="/" className="btn btn-default btn-flat">Profile</a>
            </div>
            <div className="pull-right">
              <button onClick={this.handleLogout} className="btn btn-default btn-flat">Sign out</button>
            </div>
          </li>
        </ul>
      </li>
    );
  }
}

ProfileContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.authUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
