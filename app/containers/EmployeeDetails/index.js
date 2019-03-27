/**
 *
 * EmployeeDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectEmployeeDetails } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import { getNames, employeeLogin, updateCommonInfo } from './actions';

/* eslint-disable react/prefer-stateless-function */
export class EmployeeDetails extends React.PureComponent {
  handleSubmit = values => {
    const data = { userName: 'Biplab', password: '123' };
    const commonInfo = {
      age: 30,
    };
    this.props.updateCommonInfo(commonInfo);
    this.props.requestLoginInfo(data);
  };

  componentDidMount() {
    this.props.requestNames();
  }

  render() {
    const { employeeDetails } = this.props;
    return (
      <div>
        <EmployeeDetailsForm
          handleSubmit={this.handleSubmit}
          employeeDetails={employeeDetails}
        />
      </div>
    );
  }
}

EmployeeDetails.propTypes = {
  requestNames: PropTypes.func,
  requestLoginInfo: PropTypes.func,
  updateCommonInfo: PropTypes.func,
  employeeDetails: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  employeeDetails: makeSelectEmployeeDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestNames: () => dispatch(getNames()),
    requestLoginInfo: data => dispatch(employeeLogin(data)),
    updateCommonInfo: commonInfo => dispatch(updateCommonInfo(commonInfo)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'employeeDetails', reducer });
const withSaga = injectSaga({ key: 'employeeDetails', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmployeeDetails);
