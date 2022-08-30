import React, { useEffect } from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";
import Login from "../SignUpLogin/Login";
import Signup from "../SignUpLogin/Signup";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../Redux/slice/authSlice";

function Routers() {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.authReducer);
  const location = useLocation()
  useEffect(() => {
    dispatch(setAuth(localStorage.getItem("auth")));
  }, [dispatch,location]);

  return (
    <Routes>
      {auth ? (
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Posts />} />
          <Route path="addNewPost" element={<Form />} />
          <Route path="updatePost/:id" element={<Form />} />
        </Route>
      ):<>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      </>}
      
    </Routes>
  );
}

export default Routers;
