import React from 'react';
import {LoginForm} from '../../components/authentication';


class HomePage extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="login-box">
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          Home Page
          <br /><a>I forgot my password</a>
        </div>
      </div>
    );
  }
}

export default HomePage;
