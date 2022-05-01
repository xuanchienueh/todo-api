import * as todoServices from "../../services/todoServices";
import { call, takeLatest, put } from "redux-saga/effects";

function* getAllApi() {
  try {
    let { data, status } = yield call(todoServices.getAllTask);
    if ((status = 200)) yield put({ type: "GET_ALL_TASK", payload: data });
  } catch (err) {
    console.log(err);
  }
}
export function* getAllApiSaga() {
  yield takeLatest("GET-ALL-API-SAGA", getAllApi);
}

//add task saga
function* addTaskApi(data) {
  try {
    let { status } = yield call(() => {
      return todoServices.addTask(data.payload);
    });
    if ((status = 200)) yield put({ type: "GET-ALL-API-SAGA" });
  } catch (err) {
    console.log(err);
  }
}
export function* addTaskApiSaga() {
  yield takeLatest("ADD-TASK-API-SAGA", addTaskApi);
}

//delete task
function* deleteTask(data) {
  try {
    let { status } = yield call(() => {
      return todoServices.deleteTask(data.payload);
    });
    if (status == 200) yield put({ type: "GET-ALL-API-SAGA" });
  } catch (err) {
    console.log(err);
  }
}
export function* deleteTaskSaga() {
  yield takeLatest("DELETE-TASK-API-SAGA", deleteTask);
}

//done task
function* doneTask(data) {
  try {
    let { status } = yield call(() => {
      return todoServices.doneTask(data.payload);
    });
    if (status === 200) yield put({ type: "GET-ALL-API-SAGA" });
  } catch (err) {
    console.log(err);
  }
}
export function* doneTaskSaga() {
  yield takeLatest("DONE_TASK_API_SAGA", doneTask);
}

//reject task
function* rejectTask(data) {
  try {
    let { status } = yield call(() => {
      return todoServices.rejectTask(data.payload);
    });
    if (status == 200) yield put({ type: "GET-ALL-API-SAGA" });
  } catch (err) {
    console.log(err);
  }
}
export function* rejectTaskSaga() {
  yield takeLatest("REJECT_TASK_API_SAGA", rejectTask);
}
