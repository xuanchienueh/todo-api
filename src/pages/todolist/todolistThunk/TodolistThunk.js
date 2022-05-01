import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTaskApi,
  deleteTaskApi,
  doneTaskApi,
  getAllTasklistApi,
  rejectTaskApi,
} from "../../../redux/todoAction/todoActionApiThunk";

export default function TodolistThunk() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [state, setState] = useState({
    value: { taskName: "" },
    err: { taskName: "" },
  });
  useEffect(() => {
    GetAllTask();
  }, []);

  let addTask = (e) => {
    e.preventDefault();
    dispatch(addTaskApi(state.value.taskName));
  };
  let GetAllTask = () => {
    dispatch(getAllTasklistApi());
  };
  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      value: { [name]: value },
      err: { [name]: value.trim().length > 0 ? "" : "Không được để trống!" },
    });
  };
  let deleteTask = (item) => {
    dispatch(deleteTaskApi(item.taskName));
  };
  let doneTask = (item) => {
    dispatch(doneTaskApi(item.taskName));
  };
  let rejectTask = (item) => {
    dispatch(rejectTaskApi(item.taskName));
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
              {todos.taskList.map((item, index) => {
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
              {todos.taskList.map((item, index) => {
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
