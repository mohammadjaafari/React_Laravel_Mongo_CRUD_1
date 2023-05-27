import axios from "axios";

const PRODUCTION = false;

const baseURL = PRODUCTION ? "" : "http://localhost:8000/api";

export default axios.create({
  baseURL,
});
