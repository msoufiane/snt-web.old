import React, {Component} from 'react';


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

export default ContentWrapperComponent;

