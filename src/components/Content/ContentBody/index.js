import React from 'react';
import PropTypes from 'prop-types';

class ContentBody extends React.Component {
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    );
  }
}

ContentBody.propTypes = {
  children: PropTypes.element.isRequired
};

export default ContentBody;
