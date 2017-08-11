/**
 * Created by soufiaane on 7/3/17.
 */

import React from 'react';
import {LoginForm} from '../../components/authentication';


class Login extends React.Component {
	render() {
		return (
			<div className="login-box">
				<div className="login-box-body">
					<p className="login-box-msg">Sign in to start your session</p>
					<LoginForm />
					<br /><a>I forgot my password</a>
				</div>
			</div>
		);
	}
}

export default Login;
