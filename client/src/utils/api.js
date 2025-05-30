import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.43.232:3000/api", // mobile
  baseURL: "http://192.168.10.108:3000/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
