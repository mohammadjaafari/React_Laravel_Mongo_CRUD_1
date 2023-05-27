import axios from "../../lib/axios";
import { API_ROUTES } from "./routes";

async function createTask(data = {}) {
  const res = await axios.post(API_ROUTES.POST.CREATE, data);
  return res.data;
}

async function getTask(data = {}) {
  const res = await axios.get(API_ROUTES.GET.GET_LIST(data.taskId));
  return res.data;
}

async function updateTask(data = {}) {
  const res = await axios.patch(
    API_ROUTES.PATCH.UPDATE_TASK(data.taskId),
    data
  );
  return res.data;
}
async function listTasks(data = {}) {
  const res = await axios.get(API_ROUTES.GET.GET_ALL_LISTS);
  return res.data;
}

async function deleteTask(data = {}) {
  const res = await axios.delete(API_ROUTES.DELETE.DELETE_TASK(data.taskId));
  return res.data;
}
const taskApi = {
  createTask,
  getTask,
  listTasks,
  updateTask,
  deleteTask,
};

export default taskApi;
