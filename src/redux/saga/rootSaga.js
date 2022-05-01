import { all } from "redux-saga/effects";
import {
  addTaskApiSaga,
  deleteTaskSaga,
  doneTaskSaga,
  getAllApiSaga,
  rejectTaskSaga,
} from "../todoAction/todoActionApiSaga";

export function* rootSaga() {
  yield all([
    getAllApiSaga(),
    addTaskApiSaga(),
    deleteTaskSaga(),
    doneTaskSaga(),
    rejectTaskSaga(),
  ]);
}
