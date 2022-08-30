import axios from "axios";
const auth = localStorage.getItem('auth')
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${auth}`,
  },
});

// List of all the endpoints😎
export const fetchAllPost = () => api.get("/allPost");
export const loginApi = (data) => api.post("/login",data);
export const signupApi = (data) => api.post("/signup",data);
export const createNewPost = (data) => api.post("/createNewPost",data);
export const deleteOnePost = (data) => api.post("/deletePost",data);
export const updateOnePost = (data) => api.post("/updateOnePost",data);
export const likePost = (id) => api.patch(`/${id}/likePost`);



export default api;
