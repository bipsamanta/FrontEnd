import React from 'react';
import { FormattedMessage } from 'react-intl';

import { isAuthenticated } from 'containers/App/auth';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          {isAuthenticated() && (
            <HeaderLink to="/EmployeeDetails">Add New</HeaderLink>
          )}
        </NavBar>
      </div>
    );
  }
}

export default Header;
