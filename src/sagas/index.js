import { take, takeEvery, put, call } from "redux-saga/effects";
import { IMAGES } from "../constants/index";

function* handleImagesLoad() {
  console.log("object");
}

// worker saga
// function* workerSaga() {
// console.log("object");
// yield put({ type: "ACTION_FROM_WORKER" });
// }

// watcher saga
function* rootSaga() {
  // yield takeEvery("HELLO", workerSaga);
  // yield take('LOGIN');
  // yield call(workerSaga)
  // yield take('LOGOUT')
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;
