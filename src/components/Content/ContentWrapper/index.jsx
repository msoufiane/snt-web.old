import React from 'react';
import PropTypes from 'prop-types';

const ContentWrapper = function ContentWrapper(props) {
  return (
    <div className="content-wrapper">
      {props.children}
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default ContentWrapper;
