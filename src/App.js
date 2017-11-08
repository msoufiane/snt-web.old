import React from 'react';
import PropTypes from 'prop-types';

// region Content Imports
import {
  ContentBody,
  ContentHeader,
  ContentWrapper
} from './components/Content';

import {
  BreadCrumb
} from './containers/Content';
// endregion

// region NavBar imports
import {
  NavbarWrapper,
} from './components/NavBar';

import {
  Tasks,
  Profile,
  Messages,
  Notifications
} from './containers/NavBar';
//endregion

// region SideBar imports
import SideBarWrapper from './components/SideBar';

import {
  MenuTree,
  UserPanel
} from './containers/SideBar';
//endregion

// region Footer Importq
import Footer from './components/Footer';
// endregion

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <NavbarWrapper>
          <Messages/>
          <Notifications/>
          <Tasks/>
          <Profile/>
        </NavbarWrapper>

        <SideBarWrapper UserPanel={UserPanel} Menu={MenuTree}/>

        <ContentWrapper>
          <ContentHeader>
            <BreadCrumb/>
          </ContentHeader>
          <ContentBody>
            {this.props.children}
          </ContentBody>
        </ContentWrapper>

        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired
};

export default App;
