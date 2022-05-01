import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        {/* Brand */}
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        {/* Links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/todolistrfc">
              TodolistRFC
            </NavLink>
          </li>
          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbardrop"
              data-toggle="dropdown"
            >
              Dropdown link
            </a>
            <div className="dropdown-menu">
              <NavLink className="dropdown-item" to="/todolist-redux-thunk">
                Todolist Thunk
              </NavLink>
              <NavLink className="dropdown-item" to="/todolist-redux-saga">
                Todo Saga
              </NavLink>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
