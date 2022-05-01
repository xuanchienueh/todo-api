import axios from "axios";

export const getAllTasklistApi = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await axios({
        method: "GET",
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      });
      if (status === 200) dispatch({ type: "GET_ALL_TASK", payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTaskApi = (data) => {
  return async (dispatch) => {
    try {
      let { status } = await axios({
        method: "POST",
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        data: { taskName: data },
      });
      if (status === 200) dispatch(getAllTasklistApi());
    } catch (err) {
      console.log(err);
    }
  };
};
export const deleteTaskApi = (data) => {
  return (dispatch) => {
    let promise = axios({
      method: "DELETE",
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${data}`,
    });
    promise.then(() => {
      dispatch(getAllTasklistApi());
    });
  };
};

export const doneTaskApi = (data) => {
  return (dispatch) => {
    let promise = axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${data}`,
    });
    promise.then(() => {
      dispatch(getAllTasklistApi());
    });
  };
};

export const rejectTaskApi = (data) => {
  return (dispatch) => {
    let promise = axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${data}`,
    });
    promise.then(() => {
      dispatch(getAllTasklistApi());
    });
  };
};
