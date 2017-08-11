/**
 * Created by soufiaane on 7/3/17.
 */
import React from 'react';

class MessagesComponent extends React.Component {
	render() {
		return (
			<li className="dropdown messages-menu">
				<a href="/" className="dropdown-toggle" data-toggle="dropdown">
					<i className="fa fa-envelope-o"></i>
					<span className="label label-success">4</span>
				</a>
				<ul className="dropdown-menu">
					<li className="header">You have 4 messages</li>
					<li>
						<ul className="menu">
							<li>
								<a href="/">
									<div className="pull-left">
										<img src="img/user2-160x160.jpg" className="img-circle" alt="User" />
									</div>
									<h4>
										Support Team
										<small><i className="fa fa-clock-o"></i> 5 mins</small>
									</h4>
									<p>Why not buy a new awesome theme?</p>
								</a>
							</li>
						</ul>
					</li>
					<li className="footer"><a href="/">See All Messages</a></li>
				</ul>
			</li>
		);
	}
}

export default MessagesComponent;
