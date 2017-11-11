import React from 'react';

const UserPanel = function UserPanel() {
  return (
    <div className="user-panel">
      <div className="pull-left image">
        <img src="img/user2-160x160.jpg" className="img-circle" alt="User" />
      </div>
      <div className="pull-left info">
        <p>Alexander Pierce</p>
        <a href=""><i className="fa fa-circle text-success" /> Online</a>
      </div>
    </div>
  );
};

export default UserPanel;
