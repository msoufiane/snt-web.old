import React from 'react';
import PropTypes from 'prop-types';

class ContentWrapper extends React.Component {
  render() {
    return (
      <div className="content-wrapper">
        {this.props.children}
      </div>
    );
  }
}

ContentWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ContentWrapper;
