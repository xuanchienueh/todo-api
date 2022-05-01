import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TodolistRFC() {
  const [state, setState] = useState({
    taskList: [],
    value: { taskName: "" },
    err: { taskName: "" },
  });
  let GetAllTask = () => {
    let promise = axios({
      method: "GET",
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    });
    promise
      .then((result) => {
        setState({ ...state, taskList: result.data });
      })
      .catch((err) => console.log(err));
  };
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      err: { [name]: value.trim().length > 0 ? "" : "không duoc de trong" },
      value: { [name]: value },
    });
  };
  useEffect(() => {
    GetAllTask();
  }, []);
  let addTask = (e) => {
    e.preventDefault();
    let promise = axios({
      method: "POST",
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      data: { taskName: state.value.taskName },
    });
    promise.then((result) => {
      GetAllTask();
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  let deleteTask = (item) => {
    let promise = axios({
      method: "DELETE",
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${item.taskName}`,
    });
    promise.then(() => GetAllTask());
  };
  let doneTask = (item) => {
    console.log(item);
    let promise = axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${item.taskName}`,
    });
    promise.then(() => GetAllTask());
  };
  let rejectTask = (item) => {
    let promise = axios({
      method: "PUT",
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${item.taskName}`,
    });
    promise.then(() => GetAllTask());
  };
  return (
    <form className="card" onSubmit={addTask}>
      <button type="button" onClick={() => GetAllTask()}>
        getapi
      </button>
      <div className="card__header">
        <img src="./img/bg-todo.png" />
      </div>
      {/* <h2>hello!</h2> */}
      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              id="newTask"
              name="taskName"
              placeholder="Enter an activity..."
              onChange={(e) => handleChange(e)}
            />
            <button id="addItem" onClick={(e) => addTask(e)}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <p className="text-danger">{state.err.taskName}</p>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {state.taskList.map((item, index) => {
                if (item.status == false)
                  return (
                    <li key={index}>
                      <span>{item.taskName}</span>
                      <div className="buttons">
                        <button
                          className="remove"
                          onClick={() => deleteTask(item)}
                        >
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button
                          className="complete"
                          onClick={() => doneTask(item)}
                        >
                          <i className="far fa-check-circle" />
                          <i className="fas fa-check-circle" />
                        </button>
                      </div>
                    </li>
                  );
              })}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {state.taskList.map((item, index) => {
                if (item.status)
                  return (
                    <li key={index}>
                      <span>{item.taskName}</span>
                      <div className="buttons">
                        <button
                          className="remove"
                          onClick={() => deleteTask(item)}
                        >
                          <i className="fa fa-trash-alt" />
                        </button>
                        <button
                          className="complete"
                          onClick={() => rejectTask(item)}
                        >
                          <i className="far fa-check-circle" />
                          <i className="fas fa-ban" />
                        </button>
                      </div>
                    </li>
                  );
              })}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
