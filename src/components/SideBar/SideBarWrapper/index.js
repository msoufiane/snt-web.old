/**
 * Created by soufiaane on 7/8/17.
 */

import React from 'react';
import PropTypes from 'prop-types';

class SidebarWrapper extends React.Component {
  render() {
    const {UserPanel, Menu} = this.props;
    return (
      <aside className="main-sidebar">
        <section className="sidebar" style={{height: "auto"}}>
          <UserPanel/>
          <Menu/>
        </section>
      </aside>
    );
  }
}

SidebarWrapper.propTypes = {
  UserPanel: PropTypes.element.isRequired,
  Menu: PropTypes.element.isRequired
};

export default SidebarWrapper;
