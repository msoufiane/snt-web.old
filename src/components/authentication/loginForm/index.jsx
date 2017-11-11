/* eslint-disable jsx-a11y/label-has-for */
/**
 * Created by soufiaane on 7/14/17.
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import PropTypes from 'prop-types';

import { authRequest } from '../../../actions/login';

class LoginForm extends React.Component {
  componentWillUpdate(nextProps) {
    const { redirectAfterLogin } = this.props;
    if (nextProps.submitSucceeded) redirectAfterLogin('/');
  }

  usernameInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;
    return (
      <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
        <input className="form-control" placeholder="Username" type="text" {...input} {...custom} />
        <label className="glyphicon glyphicon-envelope form-control-feedback" htmlFor="username" />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  passwordInput = ({ input, meta: { touched, error }, ...custom }) => {
    const hasError = touched && error !== undefined;
    return (
      <div className={hasError ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
        <input className="form-control" placeholder="Password" type="password" {...input} {...custom} />
        <label className="glyphicon glyphicon-lock form-control-feedback" htmlFor="password" />
        {hasError && <span className="help-block"> {error} </span>}
      </div>
    );
  };

  serverError = ({ meta: { error } }) => (
    <div className={error !== undefined ? 'form-group has-feedback has-error' : 'form-group has-feedback'}>
      {error !== undefined && <span className="help-block"> {error} </span>}
    </div>
  );

  submit = (props, credentials) => {
    const { handleLogin } = props;
    return new Promise((resolve, reject) => {
      handleLogin({ ...credentials, resolve, reject });
    }).catch((error) => {
      throw new SubmissionError(error);
    });
  };


  render() {
    const { handleSubmit } = this.props;
    return (
      <form name="loginForm" onSubmit={handleSubmit(this.submit)}>
        <Field name="username" component={this.usernameInput} />
        <Field name="password" component={this.passwordInput} />
        <div className="row">
          <div className="col-xs-7" />
          <div className="col-xs-5">
            <button className="btn btn-block btn-social btn-bitbucket btn-flat" type="submit">
              <i className="fa fa-sign-in" />Sign In
            </button>
          </div>
        </div>
        <Field name="serverError" component={this.serverError} />
      </form>
    );
  }
}

LoginForm.propTypes = {
  redirectAfterLogin: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const validate = (values) => {
  const { username, password } = values;
  const errors = {};
  if (!username || username.trim() === '') {
    errors.username = 'Username field is required !';
  }
  if (!password || password.trim() === '') {
    errors.password = 'Password field is required !';
  }
  return errors;
};

const mapDispatchToProps = dispatch => ({
  redirectAfterLogin: path => dispatch(push(path)),
  handleLogin: payload => dispatch(authRequest(payload)),
});

export default reduxForm({ form: 'login', validate })(connect(null, mapDispatchToProps)(LoginForm));
