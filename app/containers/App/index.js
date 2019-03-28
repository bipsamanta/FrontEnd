/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TableView from 'containers/TableView/Loadable';
import EmployeeDetails from 'containers/EmployeeDetails/Loadable';
import LoginPage from 'containers/LoginPage';
import RegisterPage from 'containers/RegisterPage/Loadable';
import ModalConductor from 'containers/ModalConductor';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={TableView} />
        <Route path="/EmployeeDetails" component={EmployeeDetails} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <ModalConductor />
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
