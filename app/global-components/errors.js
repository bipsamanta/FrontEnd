import { put } from 'redux-saga/effects';
import { open as openModal } from 'containers/ModalConductor/actions';
import { SNACKBAR_POPUP } from 'containers/ModalConductor/constants';

const getErrorMessage = error => {
  if (error.code) {
    return 'Have issue';
  }
  return 'HI';
};

export default function* showError(error, action) {
  yield put(
    openModal(SNACKBAR_POPUP, {
      content: getErrorMessage(error),
      action,
    }),
  );
}
