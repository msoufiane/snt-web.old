import React from 'react';
import PropTypes from 'prop-types';

const ContentHeader = function ContentHeader(props) {
  return (
    <section className="content-header">
      {props.children}
    </section>
  );
};

ContentHeader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentHeader;
