import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";

import Register from "../components/Register/Register";
import CreateClass from "../components/StudentClass/CreateClass";

export default function Rms() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* These routes needs to be protected */}
      <Route path="/dashboard" element={<Dashboard />}>

        <Route path="create-class" element={<CreateClass/>}/>
      </Route>

      <Route path="*" element={<h3>No Routes Found !</h3>} />
    </Routes>
  );
}
