/**
 * Created by soufiaane on 7/30/17.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'

class NavLink extends Component {
	render() {
		const {router} = this.context;
		const {to, children, shouldExpand} = this.props;
		let style = router.isActive(to, true) ? 'active' : '';
		style = shouldExpand ? style + ' treeview menu-open' : style + ' treeview';
		
		return (
			<li className={style}>
				<Link to={to}>{children}</Link>
			</li>
		);
	}
}

NavLink.contextTypes = {
	router: PropTypes.object
};

export default NavLink;
