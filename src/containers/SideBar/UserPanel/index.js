import React from 'react';

class UserPanel extends React.Component {
  render() {
    return (
      <div className="user-panel">
        <div className="pull-left image">
          <img src="../../../www/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
        </div>
        <div className="pull-left info">
          <p>Alexander Pierce</p>
          <a href="#"><i className="fa fa-circle text-success"/> Online</a>
        </div>
      </div>
    );
  }
}

export default UserPanel;
