import React from 'react';
import PropTypes from 'prop-types';

const ContentBody = function ContentBody(props) {
  return (
    <section className="content">
      {props.children}
    </section>
  );
};

ContentBody.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentBody;
