/*
 *
 * EmployeeDetails actions
 *
 */

import { DEFAULT_ACTION, SAVE_EMPLOYEE_INFORMATION } from './constants';

export const saveEmployeeInformation = () => ({
  type: SAVE_EMPLOYEE_INFORMATION,
});

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
