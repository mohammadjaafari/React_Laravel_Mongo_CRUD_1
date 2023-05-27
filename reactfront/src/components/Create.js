import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import taskApi from "../api/tasks";

export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const createTask = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      await taskApi.createTask({ title, description });
      navigate("/");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="conl-12 col-sm-12 col-md-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title"> Create a Task</h3>
              <hr></hr>
              <div className="from-wrapper">
                <div>
                  <div className="mb-3">
                    <label className="form-label">Title </label>
                    <input
                      type="text"
                      className="form-control"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button
                      disabled={loading}
                      onClick={(e) => createTask(e)}
                      type="submit"
                      className="btn btn-primary mb-3"
                    >
                      {loading ? "Loading..." : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
