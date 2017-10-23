/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';

class FooterComponent extends React.Component {
  render() {
    const date = new Date();

    return (
      <footer className="main-footer">
        <div className="pull-right hidden-xs">
          <b>Version</b> 2.3.8
        </div>
        <strong>Copyright &copy; {(date.getFullYear() > 2017) ? '2017-' + date.getFullYear() : '2017'}
          &nbsp;<a href="http://almsaeedstudio.com">SentAd Media</a>.&nbsp;</strong>
        <span>All rights reserved.</span>
      </footer>
    );
  }
}

export default FooterComponent;
