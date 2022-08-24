import React from "react";
import { Routes, Route } from "react-router-dom";
import Post from "../Posts/Post/Post";
import Sidebar from "../Sidebar/Sidebar";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar/>} > 
      <Route index element={<Post/>}/>
      </Route>
    </Routes>
  );
}

export default Routers;
