/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // const activeStyle = {color: 'blue'};
    return (
      <div>
        Soufiane
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
