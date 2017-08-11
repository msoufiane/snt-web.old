/**
 * Created by soufiaane on 7/25/17.
 */


import React from 'react'
import {connect} from 'react-redux'

import {NavbarComponent, SidebarComponent, FooterComponent} from './components/layout';

class App extends React.Component {
	render() {
		return (
			<div className="main">
				<NavbarComponent/>
				<div className="content-wrapper" style={this.props.authUser.token ? null : {margin: "0px"}}>
					<SidebarComponent/>
					<section className="content">
						{this.props.children}
					</section>
				</div>
				<FooterComponent/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authUser: state.authUser
	}
};

export default connect(mapStateToProps)(App);