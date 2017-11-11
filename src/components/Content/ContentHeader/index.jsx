import React from 'react';
import PropTypes from 'prop-types';

class ContentHeader extends React.Component {
  render() {
    return (
      <section className="content-header">
        {this.props.children}
      </section>
    );
  }
}

ContentHeader.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContentHeader;
