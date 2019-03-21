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
import makeSelectEmployeeDetails from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import EmployeeDetailsForm from './EmployeeDetailsForm';

/* eslint-disable react/prefer-stateless-function */
export class EmployeeDetails extends React.PureComponent {
  handleSubmit = values => {
    console.log(values);
    return false;
  };

  render() {
    return (
      <div>
        <EmployeeDetailsForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

EmployeeDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  employeeDetails: makeSelectEmployeeDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
