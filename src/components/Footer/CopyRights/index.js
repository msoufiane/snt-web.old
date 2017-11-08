import React from 'react';

class CopyRights extends React.Component {
  render() {
    const date = new Date();

    return (
      <div>
        <strong>Copyright &copy; {(date.getFullYear() > 2017) ? '2017-' + date.getFullYear() : '2017'}
          &nbsp;<a href="http://almsaeedstudio.com">SentAd Media</a>.&nbsp;</strong>
        <span>All rights reserved.</span>
      </div>
    );
  }
}

export default CopyRights;
