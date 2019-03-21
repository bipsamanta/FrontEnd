import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employeeDetails state domain
 */

const selectEmployeeDetailsDomain = state =>
  state.get('employeeDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmployeeDetails
 */

const makeSelectEmployeeDetails = () =>
  createSelector(selectEmployeeDetailsDomain, substate => substate.toJS());

export default makeSelectEmployeeDetails;
export { selectEmployeeDetailsDomain };
