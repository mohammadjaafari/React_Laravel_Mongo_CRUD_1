import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import taskApi from "../api/tasks";

export default function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const [loadingTasks, setLoadingTasks] = useState(false);
  const fetchTasks = async () => {
    try {
      setLoadingTasks(true);
      const data = await taskApi.listTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTasks(false);
    }
  };

  const [loadingDeletingTask, setLoadingDeletingTask] = useState(false);
  const deleteTask = async (id) => {
    try {
      setLoadingDeletingTask(true);
      await taskApi.deleteTask({ taskId: id });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingDeletingTask(false);
      fetchTasks();
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="conl-12">
          <Link className="btn btn-primary mb-2 float-end" to={"/task/create"}>
            Create
          </Link>
          {loadingTasks ? (
            "Loading tasks..."
          ) : (
            <div className="col-12">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.length > 0 &&
                    tasks.map((row, key) => (
                      <tr key={key}>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>
                          <Link
                            className="btn btn-success mb-2 float-end"
                            to={`/task/edit/${row._id}`}
                          >
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteTask(row._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
