import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Sidebar from "../Sidebar/Sidebar";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Posts />} />
        <Route path="addNewPost" element={<Form />} />
      </Route>
    </Routes>
  );
}

export default Routers;
