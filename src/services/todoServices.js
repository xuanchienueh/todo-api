import axios from "axios";

export const getAllTask = () => {
  return axios({
    method: "GET",
    url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
  });
};

export const addTask = (taskName) => {
  return axios({
    method: "POST",
    url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
    data: taskName,
  });
};

export const deleteTask = (taskName) => {
  return axios({
    method: "DELETE",
    url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
  });
};

export const doneTask = (taskName) => {
  return axios({
    method: "PUT",
    url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
  });
};

export const rejectTask = (taskName) => {
  return axios({
    method: "PUT",
    url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
  });
};
