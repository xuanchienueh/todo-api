import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Homepage from "./pages/home/Homepage";
import TodolistRFC from "./pages/todolist/todolistRFC/TodolistRFC";
import TodolistThunk from "./pages/todolist/todolistThunk/TodolistThunk";
import TodoSaga from "./pages/todolist/todoSaga/TodoSaga";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/todolistrfc" element={<TodolistRFC />} />
          <Route path="/todolist-redux-thunk" element={<TodolistThunk />} />
          <Route path="/todolist-redux-saga" element={<TodoSaga />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
