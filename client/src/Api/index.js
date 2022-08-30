import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

// List of all the endpoints😎
export const fetchAllPost = () => api.get("/allPost");
export const createNewPost = (data) => api.post("/createNewPost",data);
export const deleteOnePost = (data) => api.post("/deletePost",data);
export const updateOnePost = (data) => api.post("/updateOnePost",data);
export const likePost = (id) => api.patch(`/${id}/likePost`);



export default api;
