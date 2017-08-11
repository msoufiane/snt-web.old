/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import {connect} from 'react-redux';

class FooterComponent extends React.Component {
	render() {
		const {isLogged} = this.props;
		const date = new Date();
		
		return (
			
			<footer className={isLogged ? "main-footer" : ""}>
				{isLogged &&
				<div className="pull-right hidden-xs">
					<b>Version</b> 2.3.8
				</div>
				}
				{isLogged &&
				<strong>Copyright &copy; {(date.getFullYear() > 2017) ? '2017-' + date.getFullYear() : '2017'}
					&nbsp;<a href="http://almsaeedstudio.com">SentAd Media</a>.&nbsp;</strong>
				}
				{isLogged &&
				<span>All rights reserved.</span>
				}
			</footer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isLogged: !!state.authUser.token
	}
};

export default connect(mapStateToProps)(FooterComponent);