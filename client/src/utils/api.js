import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.43.71:3000/api", // mobile
  // baseURL: "http://10.1.1.108:3000/api", //for windows 
  // baseURL: "http://10.1.1.186:3000/api", //for mac
  // baseURL: "https://rajshahi-district-portal-app-server.onrender.com/api", //for render deployment server
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default api;
