import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.43.232:3000/api", // mobile
  // baseURL: "http://10.1.1.108:3000/api",
  baseURL: "https://rajshahi-district-portal-app-server.onrender.com/api",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
