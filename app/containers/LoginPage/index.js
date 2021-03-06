/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import { isValid } from 'redux-form/immutable';
import { submit } from 'redux-form';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import LoginForm from './loginForm';
import { requestLogin } from './actions';

const FORM_NAME = 'loginForm';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  handleSubmit = values => {
    const data = {
      userName: values.get('email'),
      password: values.get('password'),
    };
    this.props.requestLoginInfo(data);
  };

  render() {
    const { isFormValid } = this.props;
    return (
      <div>
        <Helmet>
          <title>LoginPage</title>
          <meta name="description" content="Description of LoginPage" />
        </Helmet>
        <LoginForm isFormValid={isFormValid} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  isFormValid: PropTypes.bool,
  requestLoginInfo: PropTypes.func,
};

const mapStateToProps = state => ({
  loginPage: makeSelectLoginPage(),
  isFormValid: isValid(FORM_NAME)(state),
});

function mapDispatchToProps(dispatch) {
  return {
    submitForm: () => dispatch(submit(FORM_NAME)),
    requestLoginInfo: data => dispatch(requestLogin(data)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginPage);
