import React from 'react';

import CopyRight from "./CopyRights";
import Version from "./Version";

class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <Version/>
        <CopyRight/>
      </footer>
    );
  }
}

export default Footer;
