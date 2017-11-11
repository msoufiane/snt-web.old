import React from 'react';

import CopyRight from './CopyRights';
import Version from './Version';

const Footer = function Footer() {
  return (
    <footer className="main-footer">
      <Version />
      <CopyRight />
    </footer>
  );
};

export default Footer;
