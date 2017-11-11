import React from 'react';
import PropTypes from 'prop-types';

class BreadCrumb extends React.Component {
  render() {
    return (
      <h3>
        BreadCrumb Component
      </h3>
    );
  }
}

BreadCrumb.propTypes = {
  children: PropTypes.element,
};

export default BreadCrumb;
