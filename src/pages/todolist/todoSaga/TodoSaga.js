import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TodoSaga() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [state, setState] = useState({
    value: { taskName: "" },
    err: { taskName: "" },
  });
  const addTask = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD-TASK-API-SAGA", payload: state.value });
  };
  const GetAllTask = () => {
    dispatch({ type: "GET-ALL-API-SAGA" });
  };
  useEffect(() => {
    GetAllTask();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      value: { [name]: value },
      err: { [name]: value.trim().length > 0 ? "" : "Không được để trống!" },
    });
  };
  const deleteTask = (item) => {
    dispatch({ type: "DELETE-TASK-API-SAGA", payload: item.taskName });
  };
  const doneTask = (item) => {
    dispatch({ type: "DONE_TASK_API_SAGA", payload: item.taskName });
  };
  const rejectTask = (item) => {
    dispatch({ type: "REJECT_TASK_API_SAGA", payload: item.taskName });
  };
  return (
    <form className="card" onSubmit={addTask}>
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
