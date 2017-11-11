import React from 'react';

const CopyRights = function CopyRights() {
  const date = new Date();
  return (
    <div>
      <strong>Copyright &copy; {(date.getFullYear() > 2017) ? `2017-${date.getFullYear()}` : '2017'}
        <a href="http://app.sentad.com">&nbsp;SentAd Media</a>.&nbsp;
      </strong>
      <span>All rights reserved.</span>
    </div>
  );
};

export default CopyRights;
