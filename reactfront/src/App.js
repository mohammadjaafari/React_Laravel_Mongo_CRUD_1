import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import List from "./components/List";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Tasks
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"/task/create"}>
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/task/create" element={<Create />}></Route>
        <Route path="/task/edit/:id" element={<Edit />}></Route>
        <Route path="/" element={<List />}></Route>
      </Routes>
    </Router>
  );
}
