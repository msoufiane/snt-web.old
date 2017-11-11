/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../components/authentication/loginForm';


const Login = function Login() {
  return (
    <div className="main">
      <header className="main-header" />
      <div className="content-wrapper" style={{ margin: '0px' }}>
        <aside>
          <section className="sidebar" />
          <section className="content">
            <div className="login-box">
              <div className="login-logo">
                <Link to="/"><b>SentAd</b>Media</Link>
              </div>
              <div className="login-box-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <LoginForm />
                <br /><a>I forgot my password</a>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};

export default Login;
