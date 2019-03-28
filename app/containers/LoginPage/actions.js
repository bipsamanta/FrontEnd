/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_ACTION } from './constants';

export function requestLogin(userData) {
  // Can do some codeing changes as well
  return {
    type: LOGIN_ACTION,
    userData,
  };
}
