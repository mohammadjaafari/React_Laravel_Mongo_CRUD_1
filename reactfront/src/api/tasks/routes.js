export const API_ROUTES = {
  POST: {
    CREATE: "/task",
  },
  GET: {
    GET_ALL_LISTS: "/task",
    GET_LIST: (id) => `/task/${id}`,
  },
  PATCH: {
    UPDATE_TASK: (id) => `/task/${id}`,
  },
  DELETE: {
    DELETE_TASK: (id) => `/task/${id}`,
  },
};
