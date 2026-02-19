import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5108",
});

export default api;
