import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ContentWrapperComponent extends Component {
  render() {
    const {isLogged} = this.props;
    return (
      <div className="content-wrapper" style={isLogged ? null : {margin: '0px'}}>
        {this.props.children}
      </div>
    );
  }
}

ContentWrapperComponent.propTypes={
  isLogged: PropTypes.bool,
  children: PropTypes.element
};

export default ContentWrapperComponent;

