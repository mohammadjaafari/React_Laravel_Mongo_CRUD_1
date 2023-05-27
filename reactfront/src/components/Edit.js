import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import taskApi from "../api/tasks";

export default function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTask();
  }, []);

  const [loadingUpdatingTask, setLoadingUpdatingTask] = useState(false);
  const updateTask = async (e) => {
    try {
      e.preventDefault();
      setLoadingUpdatingTask(true);
      await taskApi.updateTask({ taskId: id, title, description });
      navigate("/");
      // alert("hello mohterluckers");
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingUpdatingTask(false);
    }
  };
  const [loading, setLoading] = useState(false);
  const fetchTask = async () => {
    try {
      setLoading(true);
      const data = await taskApi.getTask({ taskId: id });

      setTitle(data.task.title);
      setDescription(data.task.description);
    } catch (error) {
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
              <h3 className="card-title"> Update a Task</h3>
              <hr></hr>
              <div className="from-wrapper">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Title </label>
                    <input
                      type="text"
                      className="form-control"
                      value={loading ? "Loading..." : title}
                      disabled={loading}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      value={loading ? "Loading..." : description}
                      disabled={loading}
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <button
                      onClick={(e) => updateTask(e)}
                      type="submit"
                      disabled={loadingUpdatingTask || loading}
                      className="btn btn-primary mb-3"
                    >
                      {loadingUpdatingTask ? "Loading..." : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
